# The skylark color data type library.

<!--version-->
[skylark-data-color](https://github.com/skylark-data/skylark-data-color/) is a color manipulation and conversion utility library  for html5 application development using skylark.

Based on: https://github.com/bgrins/TinyColor


## What's included
The modules contained in the library are listed  as follows:
- Color  
This module defines a type wrapping color value.
- colors  
This module defines some utility functions for color manipulation and conversion.


## Dependences
| Project | Status | Description |
|---------|--------|-------------|
| [skylark-langx](https://github.com/skylarklangx/skylark-langx) |  | Javascript language extension library |

##  Different builds
builds are in the directory dist.

|  | build | Description |
|---------|--------|-------------|
| full | skylark-data-color-all.js | included dependences |
| only | skylark-data-color.js | not included dependences |
| full （development） | uncompressed/skylark-data-color-all.js | included dependences |
| only （development）| uncompressed/skylark-data-color.js | not included dependences |

Please use the "full" version when using this library alone, and use the "only" version when using other skylark libraries.

## Installation
You can get the latest version in many different ways:

- Downloading [a ZIP file from master](https://github.com/skylarkutils/skylark-data-color/archive/master.zip)
- Cloning using Git: `git clone https://github.com/skylarkutils/skylark-data-color.git`
- Installing via NPM: `npm install https://github.com/skylarkutils/skylark-data-color.git#master --save`


## Usage

- Using the skylark-data-color library for a AMD module.  
```js
require({
  'paths': {
     'skylark-data-color': '{location}/skylark-data-color-all' 
  }
}, ['skylark-data-color'], function(ucolors) {
	var color = new ucolors.Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
});
```

- Using the skylark-data-color library for a global object named skylarkjs.  
```js
<script type="text/javascript" src="{location}/skylark-data-color-all.js"></script>
<script>
	var color = new skylarkjs.colors.Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
</script>
```

- Using the skylark-data-color library for a AMD package.  
```js
require({
  'packages': [
    { 'name': 'skylark-data-color', 'location': '{location}/skylark-data-color/' }
  ]
}, ['skylark-data-color/Color'], function(Color) {
	var color = new Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
});
```

## Building 

- Ensure that Node.js is installed.
- Run npm install https://github.com/skylarkjs/skylark-bundle-cli -g  to ensure sbundle is installed.
- Run npm install to ensure the required dependencies are installed.
- Run npm run build. The builds will be placed in the dist/ directory.

## License

Released under the [MIT](http://opensource.org/licenses/MIT)
