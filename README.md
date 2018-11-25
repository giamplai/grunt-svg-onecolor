# grunt-svg-onecolor

**A simple tool for coloring SVG files.**

SVG One Color helps you to colorize SVG files, ready for production use.

Uses:

* Create onecolor SVGs across an entire SVG icon set. Colors in your design changing? No problem... update your grunt file and re-run. Done. No need to open your design tools to update and re-export all your assets.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

### Install

```shell
npm install --save-dev grunt-svg-onecolor
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-onecolor');
```


## svgonecolor task
_Run this task with the `grunt svgonecolor` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Usage

#### Gruntfile Configuration

```
svgonecolor: {
  dist: {
    options: {
      color: '#808000',
      debug: false
    },
    files: [
      {
        expand: true,
        cwd: 'src/icons/',
        src: '**/*.svg',
        dest: 'dist/icons'
      }
    ]
  }
```

#### Options

##### color
Type: `String`  
Default: #000

Define a hex color value (e.g. #d8dfd8) to colorize the SVG files by setting their `stroke` and `fill` attributes. Great for colorizing a set of icons.


##### debug
Type: `Boolean`  
Default: **false**

Log task progress and details about the processing of each SVG.


## Release History

### v0.1.0 (11/25/2018)
- Initial release

## License
Copyright (c) 2018 Giampiero Lai. Licensed under the MIT license.
