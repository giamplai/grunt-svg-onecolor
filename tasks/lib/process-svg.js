/*
 * gunt-svg-onecolor
 * https://github.com/giamplai/gunt-svg-onecolor
 *
 * Copyright (c) 2018 Giampiero Lai
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {
  data.logger('Processing SVG');

  if (!data.options.color) {
    data.options.color = '#000';
  }

  // Save the now processed SVG content
  data.svg = data.svg.replace(/(stroke|fill)="((?!none).*?)"/g, '$1="' + data.options.color + '"');

  done(null, data);
};
