const CodeMirror    = require( 'codemirror' )

require( '../node_modules/codemirror/addon/dialog/dialog.js' )
require( '../node_modules/acorn/dist/acorn.js' )
require( '../node_modules/acorn-loose/dist/acorn-loose.js' )
require( '../node_modules/acorn-walk/dist/walk.js' )

require( '../node_modules/codemirror/mode/javascript/javascript.js' )
require( '../node_modules/codemirror/addon/edit/matchbrackets.js' )
require( '../node_modules/codemirror/addon/edit/closebrackets.js' )
require( '../node_modules/codemirror/addon/hint/show-hint.js' )
require( '../node_modules/codemirror/addon/hint/javascript-hint.js' )


let cm, cmconsole, exampleCode, 
    isStereo = false,
    fontSize = 1,
    environment = {
      proxies:[],
      useProxies:true,
      createProxies: require( './proxies.js' ),
      networkConfig : { isNetworked :false },
      showArgHints:true,
      showCompletions:true,
      showCodeBackground:false,
      CodeMirror,
      runCodeOverNetwork( selectedCode ) {
        //socket.send( JSON.stringify({ cmd:'eval', body:selectedCode }) ) 
        //binding.awareness.setLocalStateField( 'code', [selectedCode] )
        const sel = selectedCode.selection,
          end = sel.end,
          start = sel.start

        Gibber.Environment.share.commands.unshift([ 
          start.line, start.ch, end.line, end.ch, 
          selectedCode.code, 
          Gibber.Environment.share.username 
        ])
      },

      runCode( cm, useBlock=false, useDelay=true, shouldRunNetworkCode=true, selectedCode=null, preview=false ) {
        try {
          if( selectedCode === null ) selectedCode = environment.getSelectionCodeColumn( cm, useBlock )

          window.genish = Gibber.Audio.Gen.ugens
          
          let code = `{
        'use jsdsp'
        ${selectedCode.code}
      }`
          code = Babel.transform(code, { presets: [], plugins:['jsdsp'] }).code 

          if( environment.networkConfig.isNetworked && shouldRunNetworkCode ) 
            environment.runCodeOverNetwork( selectedCode )

          environment.flash( cm, selectedCode.selection )

          const func = new Function( code )

          Gibber.shouldDelay = Gibber.Audio.shouldDelay = useDelay 

          const preWindowMembers = Object.keys( window )
          let err = null
          try {
            func()
          } catch(e) {
            environment.console.error( e.toString(), e )
            err = e
          } finally {

            environment.console.__printNotifications()
            environment.console.__clearNotifications()
          }
          const postWindowMembers = Object.keys( window )

          if( preWindowMembers.length !== postWindowMembers.length && environment.useProxies === true )   {
            environment.createProxies( preWindowMembers, postWindowMembers, window, Environment, Gibber )
          }

          const markupFunction = () => {
            environment.codeMarkup.process( 
              selectedCode.code, 
              selectedCode.selection, 
              cm, 
              Gibber.currentTrack 
            ) 
          }

          markupFunction.origin = func

          if( !Environment.debug ) {
            Gibber.Scheduler.functionsToExecute.push( func )
            if( environment.annotations === true ) {
              Gibber.Scheduler.functionsToExecute.push( markupFunction )
            }
          }else{
            //func()
            if( environment.annotations === true ) markupFunction()
          }
        } catch (e) {
          environment.console.error( e.message.split('\n')[0], e )
          return
        }

        Gibber.shouldDelay = false
      },

      getSelectionCodeColumn( cm, findBlock ) {
        let  pos = cm.getCursor(), 
        text = null

        if( !findBlock ) {
          text = cm.getDoc().getSelection()

          if ( text === "") {
            text = cm.getLine( pos.line )
          }else{
            pos = { start: cm.getCursor('start'), end: cm.getCursor('end') }
            //pos = null
          }
        }else{
          let startline = pos.line, 
              endline = pos.line,
              pos1, pos2, sel

          while ( startline > 0 && cm.getLine( startline ) !== "" ) { startline-- }
          while ( endline < cm.lineCount() && cm.getLine( endline ) !== "" ) { endline++ }

          pos1 = { line: startline, ch: 0 }
          pos2 = { line: endline, ch: 0 }

          text = cm.getRange( pos1, pos2 )

          pos = { start: pos1, end: pos2 }
        }

        if( pos.start === undefined ) {
          let lineNumber = pos.line,
              start = 0,
              end = text.length

          pos = { start:{ line:lineNumber, ch:start }, end:{ line:lineNumber, ch: end } }
        }

        return { selection: pos, code: text }
      },
      flash(cm, pos) {
        let sel,
            cb = function() { sel.clear() }

        if (pos !== null) {
          if( pos.start ) { // if called from a findBlock keymap
            sel = cm.markText( pos.start, pos.end, { className:"CodeMirror-highlight" } );
          }else{ // called with single line
            sel = cm.markText( { line: pos.line, ch:0 }, { line: pos.line, ch:null }, { className: "CodeMirror-highlight" } )
          }
        }else{ // called with selected block
          sel = cm.markText( cm.getCursor(true), cm.getCursor(false), { className: "CodeMirror-highlight" } )
        }

        window.setTimeout( cb, 250 )
      },
      previewCode( cm, useBlock=false, useDelay=true, shouldRunNetworkCode=true, selectedCode=null ) {
        environment.flash( cm, selectedCode.selection )
      }
   } 

   const startingText = `
/* welcome!

to improve your gibbering, we suggest 
opening your browser's development console, 
which will display a variety of important 
messages. use one of the keystrokes below to
open it:

               chrome/edge               firefox
win/lin |   ctrl + shift + j    |    ctrl + shift + i
mac     | command + option + j  |  command + option + i

...and for best results, use chrome.

   ************************************************
  **************************************************
 ***                                              ***
**** ready? click anywhere in the editor to begin ****
 ***                                              ***
  **************************************************
   ***********************************************/`

module.exports = function( Gibber, element = '#editor', userEditable=true ) {

  const keys = {
    w:0,
    a:0,
    s:0,
    d:0,
    alt:0
  }
  const editor = {}
  const cm = CodeMirror( document.querySelector( element ), {
    mode:   'javascript',
    value:  startingText, 
    keyMap: 'playground',
    autofocus: false,
    //matchBrackets:true,
    readOnly: userEditable === true ? false : 'nocursor',
    indentUnit:2,
    autoCloseBrackets:true,
    tabSize:2,
    extraKeys:{ 'Ctrl-Space':'autocomplete' },
    hintOptions:{ hint:CodeMirror.hint.javascript },
    configureMouse: (cm, repeat, ev) => { 
      return { addNew : false };
    },
    cursorBlinkRate: 0
  })

  cm.setSize( null, '100%' )

  // cursor blink
  setTimeout( ()=> {
    let state = false
    const blink = ()=> {
      const cursor = document.getElementsByClassName('CodeMirror-cursor')[0]
      if( cursor === undefined ) return
      state = !state
      cursor.style.color = state ? 'transparent' : 'var(--f_med)'
      cursor.style.background = state ? 'transparent' : 'var(--f_med)'
    }

    Gibber.subscribe( 'metronome.tick', blink )
  }, 1000 )

  Babel.registerPlugin( 'jsdsp', jsdsp )
  
  let hidden = false
  const toggleGUI = function() {
    hidden = !hidden
    if( hidden === true ) {
      document.getElementsByTagName('header')[0].style.display = 'none'
      cm.getWrapperElement().style.display = 'none'
    }else{
      document.getElementsByTagName('header')[0].style.display = 'block'
      cm.getWrapperElement().style.display = 'block'
    }
  }

  delete CodeMirror.keyMap.default[ 'Ctrl-H' ]

  window.addEventListener( 'keydown', e => {
    if( e.key === 'h' && e.ctrlKey === true ) {
      toggleGUI()
    }
  })

  // setup autocomplete etc.
  require( './tern.js' )( Gibber, cm, environment )

  cm.__setup = function() {

    const defaultCode = `// hit alt+enter to run all code
// or run line/selection with ctrl+enter.
// ctrl+period to stop all sounds.
 
Theory.tuning = 'slendro'
Theory.mode = null
  
verb  = Reverb( 'space' ).bus()
delay = Delay( '1/3' ).bus().connect( verb, .1 )
  
perc = FM[3]( 'perc' )
  .connect( delay, .65 ).connect( verb, .35 )
  .spread(.975)
  .note.seq( sine( btof(8),7,0 ), 1/8,  0 )
  .note.seq( sine( btof(4),3,0 ), 1/16, 1 )
  .note.seq( sine( btof(8),7,7 ), 1/6,  2 )
  .loudness.seq( sine(4.33,.35,.7)  )
 
kik = Kick()
  .trigger.seq( 1,1/4 )
 
hat = Hat({ decay:.0125 })
  .trigger.seq( [ _, 1, _, .5 ], 1/8 )
 
bass = Synth( 'bass.hollow' )
  .note.seq( [0,1,2,-1], 1 )
  .trigger.seq( [.75,.5,.25], [1/4,1/8] )
 
clave = Clave({ gain:.1 }).connect( verb, .25 )
  .trigger.seq( .5, e = Euclid(3,8) )
 
e.rotate.seq( [1,-1], 2, 0, 4 )
 
fm = FM({ feedback:.0015, decay:1/2 })
  .connect( verb, .35 ).connect( delay, .125 )
  .note.seq( 
    sine( btof(4.5),4,5 ), 
    Hex(0x8032,1/4 ),
    0,
    8
  )`

    if( window.location.search !== '' ) {
      // use slice to get rid of ?
      const query = window.location.search.slice(1)
      const params = query.split('&')
      const code = params[0]
      
      // join shared server with room / username
      // automatically
      if( code.indexOf( 'join' ) === 0 ) {
        
      }else if( code.indexOf( 'show=' ) === -1 ) {
        const auto = params[1] !== undefined && params[1].split('=')[1] === 'true' ? true : false    
        const val = atob( code )
        cm.setValue(val)
        
        if( auto ) {
          cm.execCommand('selectAll')
          environment.runCode( cm, false, true )
          //cm.execCommand('undoSelection')
          cm.setSelection({ line:0, ch:0 })
          environment.togglemenu()
        }
      }
      // else share.js will launch spectator view of live performance
    }else{
      cm.setValue( defaultCode )
    }
  }

  const SDF = Marching
  SDF.keys = {
    w:0,
    a:0,
    s:0,
    d:0,
    alt:0
  }
    
  cm.on('keyup', (cm, event) => {
    if( SDF.cameraEnabled ) {
      const code = event.key//.code.slice(3).toLowerCase()
      SDF.keys[ code ] = 0
    }else if( event.key === 'Alt' ) {
      for( let key in SDF.keys ) {
        SDF.keys[ key ] = 0
      }
    } 
  })

  cm.on('keydown', (cm,event) => {
    if( SDF.cameraEnabled ) {
      SDF.keys[ event.key ] = 1
      event.codemirrorIgnore = 1
      event.preventDefault()
    }
  })

  window.addEventListener( 'keydown', e => {
    if( e.key === 'C' && e.ctrlKey === true && e.shiftKey === true ) {
      Marching.cameraEnabled = !Marching.cameraEnabled
      //document.querySelector('#cameratoggle').checked = Marching.cameraEnabled
      if( Marching.cameraEnabled ) Marching.camera.on()
    }
    if( e.key === '.' && e.ctrlKey === true && e.shiftKey === true ) {
      SDF.pause()
    }else if( SDF.cameraEnabled ) {
      SDF.keys[ e.key ] = 1
    }else if( e.key === '.' && e.ctrlKey === true ) {
      Gibber.clear( false )

      for( let key of environment.proxies ) delete window[ key ]
      environment.proxies.length = 0
    }
  })
  window.addEventListener( 'keyup', e => {
    if( SDF.cameraEnabled ) {
      SDF.keys[ e.key ] = 0
    }
  })
  return [cm,environment] 
}

CodeMirror.keyMap.playground =  {
  fallthrough:'default',

  'Cmd-Enter'( cm )   { environment.runCode( cm, false, true  ) },
  'Ctrl-Enter'( cm )  { environment.runCode( cm, false, true  ) },
  'Shift-Enter'( cm ) { environment.runCode( cm, false, false ) },
  'Alt-Enter'( cm )   { environment.runCode( cm, true,  true  ) },
  'Shift-Alt-Enter'( cm ) { environment.runCode( cm, true, false, true ) },
  'Ctrl-Alt-B'( cm ) {
    Gibber.Graphics.__showCodeBackground = !Gibber.Graphics.__showCodeBackground

    if( Gibber.Graphics.__showCodeBackground ) {
      Gibber.Graphics.addCodeBackground()
    }else{
      Gibber.Graphics.clearCodeBackground()
    }
  },

  //'Shift-Ctrl-C'(cm) {
  //  Marching.cameraEnabled = !Marching.cameraEnabled
  //  //document.querySelector('#cameratoggle').checked = Marching.cameraEnabled
  //  if( Marching.cameraEnabled ) 
  //    Marching.camera.on()
  //  //else
  //    //Marching.camera.off()
  //},
  'Ctrl-\\'( cm ) { environment.console.clear() }, 

  'Ctrl-.'( cm, ...args ) {
    Gibber.clear()

    for( let key of environment.proxies ) delete window[ key ]
    environment.proxies.length = 0
    //e.preventDefault()
  },
  'Shift-Ctrl-.'( cm ) {
    Gibber.clear()

    for( let key of environment.proxies ) delete window[ key ]
    environment.proxies.length = 0
  },
  //'Shift-Ctrl-C'(cm) { toggleSidebar() },

  "Shift-Ctrl-=": function(cm) {
    fontSize += .2
    document.querySelector('#editor').style.fontSize = fontSize + 'em'
    document.querySelector('#editor').style.paddingLeft = (fontSize/4) + 'em'
    cm.refresh()
  },

  "Shift-Ctrl--": function(cm) {
    fontSize -= .2
    document.querySelector('#editor').style.fontSize = fontSize + 'em'
    document.querySelector('#editor').style.paddingLeft = (fontSize/4) + 'em'
    cm.refresh()
  },
        
  'Shift-Ctrl-S'( cm ) {
    const value = cm.getValue()
    environment.Storage.values.savedText = value
    environment.Storage.save()
    console.log( 'code saved.' )
  },
  'Shift-Ctrl-L'( cm ) {
    const value = environment.Storage.values.savedText
    cm.setValue( value )
    console.log( 'code loaded.' )
  },
}
