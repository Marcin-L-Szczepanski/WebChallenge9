# WebChallenge9

Below PSD design converted to responsive website.

<!---Converted page is available at: https://marcin-l-szczepanski.github.io/WebChallenge9/--->

More information about the project:
* [Progressive Enhancement](#progressive-enhancement)
* [CSS Grid](#css-grid)
* [CSS Organization](#css-organization)
  * [ITCSS](#itcss)
* [Webpack](#webpack)

Download [PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge9/raw/master/design/9.psd) and challenge yourself! 

![WebChallenge3 PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge9/blob/master/design/9.jpg)

## Progressive Enhancement
- [HTML only](https://github.com/Marcin-L-Szczepanski/WebChallenge9/raw/master/design/9.psd) 
## CSS Grid

## CSS organization

In order to structure CSS code, I used a combination of two methodologies: BEM and ITCSS.

Using a methodology of writing CSS code helps to have better understanding of CSS architecture, prepare smaller file sizes, mantain the code easier.

### BEM

### ITCSS
ITCSS (Inverted Triangle CSS) is a methodology proposed by Harry Roberts.


## Webpack
Webpack takes various assets and outputs them to a production-ready bundle.

In this project I used Webpack for the following purposes:
- Bundle multiple JavaScript file into one main JS file, minimizing http requests
- Compile SCSS files and bundle the styles into one main CSS file
- Compile ES6 to code that can run in older browser
- Add CSS prefixes

Basic Webpack configuration file: webpack.config.js
```Javascript
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract('css-loader')
      }
    ]
  },
                  
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}
```


### CSS
In order to compile all the .scss file into one main .css file that is linked in <head> section of index.html, the following loaders, plugins and libaries are required:
- `style-loader` -  Add exports of a module as style to DOM
- `css-loader` - Loads CSS file with resolved imports and returns CSS code
- `sass-loader`- Loads a SASS/SCSS file and compiles it to CSS file
- `node-sass` - Library required by `sass-loader`
- `extract-text-webpack-plugin` - Extracts text from a bundle, or bundles, into a separate file

Install command:
`npm install  --save-dev css-loader style-loader sass-loader extract-text-webpack-plugin@next`