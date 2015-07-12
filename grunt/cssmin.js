module.exports = function(grunt) {

  grunt.config('cssmin', {
    generated: {
      options: {
        keepSpecialComments: 0,
        report: 'gzip'
      },
      files: {
        'build/css/style.min.css': ['build/css/style.css']
      }
    }
  });

};
