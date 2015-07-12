module.exports = function(grunt) {

  grunt.config('watch', {
    options: {
      livereload: true,
    },
    css: {
      files: 'source/less/**/*.less',
      tasks: ['less', 'autoprefixer', 'cmq'],
      options: {
        spawn: false,
      },
    },
    html: {
      files: 'source/*.html',
      tasks: ['copy:watchhtml'],
      options: {
        spawn: false,
      },
    },
    script: {
      files: 'source/js/script.js',
      tasks: ['copy:watchscript'],
      options: {
        spawn: false,
      },
    }
  });

};
