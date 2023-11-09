module.exports = ( patternObject, marker, className, cm ) => {
  patternObject.commentMarker = marker
  let out

  if( window.Environment.useComments === true ) {
    let update = () => {

      if( !patternObject.commentMarker ) return
      let patternValue = '' + patternObject.update.value


      if( patternValue.length > 8 ) patternValue = patternValue.slice(0,8) 

      let val ='/* ' + patternValue + ' */',
        pos = patternObject.commentMarker.find()

      if( pos !== undefined ) {
        end = Object.assign( {}, pos.to )

        //pos.from.ch += 1
        end.ch = pos.from.ch + val.length 
        //pos.from.ch += 1

        cm.replaceRange( val, pos.from, pos.to )

        if( patternObject.commentMarker ) patternObject.commentMarker.clear()

        patternObject.commentMarker = cm.markText( pos.from, end, { className:className + ' gibber_comment', atomic:false })
      }
    }

    patternObject.clear = () => {
      try{
        let commentPos = patternObject.commentMarker.find()
        //commentPos.to.ch -= 1 // XXX wish I didn't have to do this
        cm.replaceRange( '', commentPos.from, commentPos.to )
        patternObject.commentMarker.clear()
        delete patternObject.commentMarker
      } catch( e ) {
        console.error( e )
      } // yes, I just did that XXX 
    }

    out = update
  }

  return window.Environment.useComments ? out : ()=>{}
}

