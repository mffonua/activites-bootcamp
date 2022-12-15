const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
   //bundle 
    path: path.resolve(__dirname, 'dist'),
  },
};
// This File tells webpack what it should do.