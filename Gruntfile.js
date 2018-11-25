/*
 * gunt-svg-onecolor
 * https://github.com/laig/gunt-svg-onecolor
 *
 * Copyright (c) 2018 Giampiero Lai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      tests: 'tmp'
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

    // Configuration to be run (and then tested).
    svgonecolor: {
      test: {
        options: {
          color: '#000',
          debug: true
        },
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: '**/*.svg',
            dest: 'tmp'
          }
        ]
      }
    }

  });

  // Load this plugin's task(s)
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Test
  grunt.registerTask('test', ['jshint', 'clean', 'svgonecolor', 'nodeunit']);

  // Default task
  grunt.registerTask('default', ['svgonecolor']);
  // grunt.registerTask('default', ['test']);
};
