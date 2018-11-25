/*jshint camelcase: false */
'use strict';

const grunt = require('grunt');
const fs = require('fs'); 
const path = require('path'); 

exports.svgonecolor = {

  iconic_icons: function (test) {

    var actual = 'tmp/svg/ytos/';
    var expected = 'test/expected/svg/ytos/';

    const files = fs.readdirSync(actual);

    test.expect(files.length);

    function checkSVGIcon(name) {
      test.equal(grunt.file.read(actual + name), grunt.file.read(expected + name));
    }

    files.forEach(file => {
      checkSVGIcon(path.basename(file));
    });

    test.done();
  }
};
