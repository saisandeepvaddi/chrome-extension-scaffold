# chrome-extension-scaffold
Creates scaffolding for Google Chrome extension development
# Features
Compilation from ES6 and stage-2 is provided out of the box  
# Usage
* You should have Node.js installed
* Install gulp globally if you haven't yet
  * ```$> npm install gulp -g```
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
# NOTE  
You should not use resource directory names in tags as src. Example: Don't use _css/style.css_ or _js/popup.js_. Just use _style.css_ and _popup.js_.
Because all the files will be sent to build directory at same root level.
