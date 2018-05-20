# WebChallenge9

Below PSD design converted to responsive website.

<!---Converted page is available at: https://marcin-l-szczepanski.github.io/WebChallenge9/--->

More information about the project:
* [Progressive Enhancement](#progressive-enhancement)
* [CSS Grid](#css-grid)
* [CSS Organization](#css-organization)
  * [ITCSS](#itcss)
* [Webpack](#webpack)
* [Accessibility](#accessibility)

Download [PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge9/raw/master/design/9.psd) and challenge yourself! 

![WebChallenge3 PSD design](https://github.com/Marcin-L-Szczepanski/WebChallenge9/blob/master/design/9.jpg)

## Progressive Enhancement
- [HTML only](https://github.com/Marcin-L-Szczepanski/WebChallenge9/raw/master/design/9.psd) 
### Show/Hide Menu Button
On mobile screens, the menu is hidden and can be shown or hidden again by clicking a Menu Button. The Menu Button is controlled by JavaScript. 

However, for [many various reasons](https://www.gov.uk/service-manual/technology/using-progressive-enhancement#dont-assume-users-turn-off-javascript) JavaScript may fail to load.

In case JavaSript failed, the website on mobile screens could be rendered with invisible (hidden) menu and not working show/hide button.

According to the Progressive Enhancement strategy, the webiste should be rendered correctly even if JavaScript fails to load, i.e. the menu is visible and the show/hide button is not even a part of the DOM.

If the JavaScript loads correctly, the script hides the menu in the initial view and append the show/hide button to the DOM.
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
- `postcss-loader` - Adds vendor prefixes to CSS rules using values from Can I Use. 
- `extract-text-webpack-plugin` - Extracts text from a bundle, or bundles, into a separate file

Install command:
`npm install  --save-dev css-loader style-loader sass-loader node-sass postcss-loader extract-text-webpack-plugin@next`


## Accessibility

In order to ensure the Menu button accessibility, the below 8 requirements are met:
### 1. Correct semantic element is used: 
```html
<button type="button">
</button>
```
### 2. Label describing the button is between opening and closing tags
Since the label between the tags does not indicate that the purpose of the button is to open Menu, the aria-label attribute is used to provide the label to any assistive technologies.
```html
<button type="button" aria-label="Open">
  Menu
</button>
```
The aria-label attribute dynamically changes depending on the current state:
```html
<!-- Menu is closed -->
<button type="button" aria-label="Open">
  Menu
</button>

<!-- Menu is open -->
<button type="button" aria-label="Close">
  Menu
</button>
```

### 3. Button gets focus from keyboard
The button can be accessed using Tab key.

### 4. Keyboard focus is visible
The CSS :focus pseudo-class is used to change sligthly the button's appearance when it gets focus form keyboard.

### 5. Button can be activated with the keyboard
The button's Opening / Closing Menu function can be activated by pressing Space or Enter key when the button is focused.

### 6. Focus order is correct
Because the Menu button is placed directly before the Menu list in HTML, when the button is activated and the Menu is opened, the next focused item is the first item on the Menu list.
```html
<button type="button" aria-label="Open">
  Menu
</button>
<ul class="menu__list menu__list--close">
  <li class="menu__item"><a class="menu__link" href="#home" title="Home page">Home</a></li>
  <li class="menu__item"><a class="menu__link" href="#about" title="About Treehouse">About</a></li>
  <li class="menu__item"><a class="menu__link" href="#blog" title="Read our Blog">Blog</a></li>
  <li class="menu__item"><a class="menu__link" href="#portfolio" title="See our Projects">Portfolio</a></li>
  <li class="menu__item"><a class="menu__link" href="#contact" title="Contact us">Contact</a></li>
</ul>
```

### 7. Additional ARIA attributes are included
In order to provide more information for the users using creen readers, below ARIA attributes are used:
#### aria-expanded
Used to inform the user what is the current state of the Menu.
The aria-expanded attribute dynamically changes depending on the current state:
```html
<!-- Menu is closed -->
<button type="button" aria-label="Open" aria-expanded="false">
  Menu
</button>
<ul class="menu__list menu__list--close">
  [...]
</ul>

<!-- Menu is open -->
<button type="button" aria-label="Close" aria-expanded="true">
  Menu
</button>
<ul class="menu__list menu__list--open">
  [...]
</ul>
```
#### aria-controls
Used to create relationship between the button and the controlled Menu list.
```html
<button type="button" aria-label="Open" aria-expanded="false" aria-controls="menu">
  Menu
</button>
<ul class="menu__list menu__list--close" id="menu">
  [...]
</ul>
```

