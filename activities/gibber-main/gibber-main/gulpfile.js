const gulp        = require( 'gulp' ),
      buffer      = require( 'vinyl-buffer' ),
      uglify      = require( 'gulp-uglify' ),
      replace     = require( 'gulp-replace' ),
      watchify    = require( 'watchify' ),
      browserify  = require( 'browserify' ),
      source      = require( 'vinyl-source-stream' ),
      fs          = require( 'fs' ),
      dotenv      = require( 'dotenv' ),
      envify      = require( 'envify' ),
      esmify      = require( 'esmify' )

dotenv.config({ path:'./playground/.env' })

gulp.task( 'client', function(){
  const out = browserify({ transform:[ 'envify' ] })
    .require( './playground/environment.js', { entry: true })
    .plugin( esmify )
    .bundle()
    .on( 'error', console.log )
    .pipe( source( 'bundle.js' ) )
    .pipe( gulp.dest( './playground' ) )
  
  return out
});

gulp.task('watch', function() {
  const bundler = watchify( browserify( './playground/environment.js', { entry:true, transform:['envify'] } ) );

  bundler.on('update', rebundle)

  function rebundle() {
    const date = new Date()
    console.log("recompiling... ", date.getHours(), date.getMinutes(), date.getSeconds() )

    return bundler.bundle()
      // log errors if they happen
      .on( 'error', console.log ) 
      .pipe( source( 'bundle.js' ) )
      .pipe( gulp.dest( './playground/' ) )
  }

  return rebundle()
});

gulp.task( 'default', gulp.series('client') )
