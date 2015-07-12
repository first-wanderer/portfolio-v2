module.exports = function(grunt) {

  grunt.config('concat', {
    generated: {
      src: [
        'bower_components/parallax.js/parallax.min.js',
        'bower_components/mixitup/build/jquery.mixitup.min.js',
        'build/js/script.js'
      ],
      dest: '.tmp/concat/js/script.js'
    }
  });

};
