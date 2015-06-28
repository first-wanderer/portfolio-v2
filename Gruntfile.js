module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.loadTasks('grunt');

  grunt.registerTask('bower-install', ['bower-install-simple']);

  grunt.registerTask('combing', [
    'jshint',
    'jscs'
  ]);

  grunt.registerTask('build', [
    'combing',
    'clean:build',
    'copy:build',
    'less',
    'autoprefixer',
    'cmq',
    'cssmin',
    'imagemin',
    'concat',
    'uglify:libs',
    'uglify:script'
  ]);
};
