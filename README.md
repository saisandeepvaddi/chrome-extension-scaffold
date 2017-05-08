# **chrome-extension-scaffold**  
Scaffolds out a Google Chrome extension with minimal structure  
# **Features**  
- Support for ES6 and stage-2  
- Support for SASS/SCSS files  
- Minification of JS and Stylesheets  
# **Usage**    
* You should have Node.js installed  
* Install gulp globally if you haven't yet  
  * ```$> npm install gulp-cli -g```  
* Install this package globally.  
  * ```$> npm install chrome-extension-scaffold -g```  
* Run. That's it. It will ask you details interactively  
  * ```$> chrome-extension-scaffold```  
* CD to the directory created with your extension name and install dependencies. You need only dev dependencies  
  * ```$> cd <ext-name> && npm install --only=dev```  
* Start gulp  
  * ```$> gulp```  
* Throw in your own icons with the same names as in src/icons directory  
* The unpacked extension is _build_ directory  
* Zip the build directory and publish to Webstore Developer Dashboard  
# **NOTE**  
- Do not use resource directory names in tags as src unless you are creating subdirectories. Example: Don't use `<link rel="stylesheet" href="./styles/style.css">` _or_ `<script src="./js/popup.js">`. Just use `<link rel="stylesheet" href="style.css">` _or_ `<script src="popup.js">`. Because all the files will be sent to build directory at same root level.  
- Do not use scss/sass extensions in html. Example: Don't use `<link rel="stylesheet" href="style.scss">`. Just use `<link rel="stylesheet" href="style.css">`. Because sass files will be compiled as css into build directory  

