Following [this example](https://www.youtube.com/watch?v=iukBMY4apvI) of using
ES6 to show a tileset of gifs from reddit.

## Setup
* `npm install` to install npm packages into `node_modules`
* `./node_modules/.bin/jspm install` to install jspm dependencies into `jspm_packages`
* `./node_modules/.bin/live-server` to start an http server that automatically
  live reloads. That should open the index page in the browser and show you
  some awesome gifs!!

## Using jspm in another project
* `npm init` and hit enter a lot if you don't already have a `package.json`
* `npm install --save-dev jspm` to get jspm for your project. You could also
  `npm install -g jspm` to have it available globally.
* once jspm is in your PATH, `jspm init` and hit enter a lot to set up jspm
  autoloading for your packages and importing other packages. This will create
  a `config.js` and `jspm_packages` in the root.
* if you are requiring react jsx, the easiest way so far is to `jspm install jsx`. Then when you require jsx, do `require('MyComponent.jsx!')` with the !. [Anyther way here](https://github.com/jspm/jspm-cli/issues/566#issuecomment-90279491).
* pull in this javascript in your html page:

```html
<script type="text/javascript" src="jspm_packages/system.js"></script>
<script type="text/javascript" src="config.js"></script>
```

* now use `system.js` to bootstrap a script and get started:

```html
<script>
  System.import('lib/main');
</script>
```

* in that file you can import other modules in several different ways:

```javascript
// ES6
import MyClass from './my-class';

// commonjs
var MyClass = require('./my-class');

// loading node modules
System.import('./node-app').then(function (NodeApp) {
    // use NodeApp...
});

// just load some js into the global scope
require('./my-js-file');
```

* use this technique to define dependencies in your modules.
* for production use `jspm bundle-sfx --minify lib/main` to bundle all into one
  file. (sfx stands for self-executing.)
* you will also need the traceur-runtime if you use ES6:

```javascript
<script type="text/javascript" src="jspm_packages/traceur-runtime.js"></script>
```

## Gotchas

I've also had problems with PhantomJS and JSPM. The PhantomJS browser crashes
when it encounters JSPM. I just run it in a real browser instead. Apparently
PhantomJS uses an old version of webkit that does not work with Traceur and 
probably Babel either. [Github issue
here](https://github.com/google/traceur-compiler/issues/908).
