module.exports = function(grunt) {

  grunt.config('useminPrepare', {
    html: ['build/index.html'],
    options: {
      dest: 'build'
    }
  });

};
