/*
 * grunt-svg-onecolor
 * https://github.com/giamplai/grunt-svg-onecolor
 *
 * Copyright (c) 2018 Giampiero Lai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (debug) {
  var logger = function(msg) {
    if (debug) {
      console.log('Debug: ' + msg);
    }
  };

  return logger;
};
