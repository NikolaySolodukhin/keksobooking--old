/**
 * @fileoverview Конфигурационный файл сборщика и web-сервера.
 * @author Nikolay Solodukhin (Nikolay.Solodukhin@gmail.com)
 */

const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const OUTPUT_DIRNAME = 'out';
const SRC_DIRNAME = 'src';

module.exports = {
  devServer: {
    contentBase: path.resolve(projectRoot, OUTPUT_DIRNAME),
    entryPath: path.resolve(projectRoot, SRC_DIRNAME)
  },

  devtool: 'sourcemap',

  entry: path.resolve(projectRoot, SRC_DIRNAME, 'main.js'),

  output: {
    filename: "main.js",
    path: path.resolve(projectRoot, OUTPUT_DIRNAME, 'js'),
    outputPath: '/',
    sourceMapFilename: "[file].map"
  }
};
