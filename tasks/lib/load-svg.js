/*
 * grunt-svg-onecolor
 * https://github.com/giamplai/grunt-svg-onecolor
 *
 * Copyright (c) 2018 Giampiero Lai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {
  data.logger('Loading SVG file: ' + data.file.src);

  data.svg = data.grunt.file.read(data.file.src);

  done(null, data);
};
