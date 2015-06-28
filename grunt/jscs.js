module.exports = function(grunt) {

  grunt.config('jscs', {
    src: ['Gruntfile.js', 'grunt/**/*.js', 'sourse/js/**/*.js'],
    options: {
      preset: 'google',
      requireCurlyBraces: ['if']
    }
  });

};
