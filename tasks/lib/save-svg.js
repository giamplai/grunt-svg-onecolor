/*
 * grunt-svg-onecolor
 * https://github.com/giamplai/grunt-svg-onecolor
 *
 * Copyright (c) 2018 Giampiero Lai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {
  var path = require('path');

  var dest = path.join(data.file.destRoot, 'svg', data.file.destSubdir, data.file.filename);

  data.logger('Saving SVG file: ' + dest);

  data.grunt.file.write(dest, data.svg);

  done(null, data);
};
