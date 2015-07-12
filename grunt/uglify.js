module.exports = function(grunt) {

  grunt.config('uglify', {
    generated: {
      src: '.tmp/concat/js/script.js',
      dest: 'build/js/script.min.js'
    }
  });

};
