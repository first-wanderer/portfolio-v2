module.exports = function(grunt) {

  grunt.config('copy', {
    build: {
      files: [{
        expand: true,
        cwd: 'source',
        src: [
        'image/**',
        'js/**',
        '*.html'
        ],
        dest: 'build'
      }]
    },
    watchhtml: {
      files: [{
        expand: true,
        cwd: 'source',
        src: ['*.html'],
        dest: 'build'
      }]
    },
    watchscript: {
      files: [{
        expand: true,
        cwd: 'source',
        src: ['js/**'],
        dest: 'build'
      }]
    }
  });

};
