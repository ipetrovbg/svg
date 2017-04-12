var gulp = require('gulp'), 
// less compiler
less = require('gulp-less'),

// nodejs path module
path = require('path'),

// concatenating files
concat = require('gulp-concat'),

// minifying files
uglify = require('gulp-uglify'),

exec = require('child_process').exec,

// nodejs module for starting and restarting server
nodemon = require('gulp-nodemon');

gulp.task('build', function(){

  // copying node_modules to public lib
    gulp.src('node_modules/**/*')
      .pipe(gulp.dest('public/lib'));

    // executing command in public folder
    exec('bower install', { cwd: 'public/' }, function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr); 
      console.log(err);
    });

});

gulp.task('server', function () {
    var stream = nodemon({
        script: 'app.js'
    }); 
  return stream;
});

gulp.task('default', function () {

  // starting server
  gulp.run('server');

  // watch task
  gulp.task('watch', function () {

    //watching for changes in all files in routes directory and app.js
    gulp.watch(["routes/*.js", "app.js"], function(event){
        gulp.run('server');
    });

  });

});


