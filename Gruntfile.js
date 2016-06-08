'use strict';

module.exports = function(grunt) {

  var options = {
    config: {
      src: 'grunt/*.js'
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);
  grunt.initConfig(configs);

  grunt.registerTask('build', function() {
    grunt.task.run([
      'clean:dist'
    ]);
    grunt.task.run('concurrent:watch');
  });

  grunt.registerTask('default', 'build');
  require('load-grunt-tasks')(grunt);
};
