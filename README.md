# Skylark Color utility

<!--version-->
[skylark-utils-color](https://github.com/skylarkutils/skylark-utils-color/) is a color manipulation and conversion utility library  for html5 application development using skylark.

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
| [skylark-langx](https://github.com/skylarkjs/skylark-langx)   |  | Javascript language extension library |

##  Different builds
builds are in the directory dist.

|  | build | Description |
|---------|--------|-------------|
| full | skylark-utils-color-all.js | included dependences |
| only | skylark-utils-color.js | not included dependences |
| full （development） | uncompressed/skylark-utils-all.js | included dependences |
| only （development）| uncompressed/skylark-utils.js | not included dependences |

Please use the "full" version when using this library alone, and use the "only" version when using other skylark libraries.

## Installation
You can get the latest version in many different ways:

- Downloading [a ZIP file from master](https://github.com/skylarkutils/skylark-utils-color/archive/master.zip)
- Cloning using Git: `git clone https://github.com/skylarkutils/skylark-utils-color.git`
- Installing via NPM: `npm install https://github.com/skylarkutils/skylark-utils-color.git#master --save`


## Usage

- Using the skylark-utils-color library for a AMD module.  
```js
require({
  'paths': {
     'skylark-utils-color': '{location}/skylark-utils-color-all' 
  }
}, ['skylark-utils-color'], function(ucolors) {
	var color = new ucolors.Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
});
```

- Using the skylark-utils-color library for a global object named skylarkjs.  
```js
<script type="text/javascript" src="{location}/skylark-utils-color-all.js"></script>
<script>
	var color = new skylarkjs.colors.Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
</script>
```

- Using the skylark-utils-color library for a AMD package.  
```js
require({
  'packages': [
    { 'name': 'skylark-utils-color', 'location': '{location}/skylark-utils-color/' }
  ]
}, ['skylark-utils-color/Color'], function(Color) {
	var color = new Color("red");
	color.toHsl(); // { h: 0, s: 1, l: 0.5, a: 1 }  
});
```

## Building 

- Ensure that Node.js is installed.
- Run npm gulp -g to ensure gulp is installed.
- Run npm install to ensure the required dependencies are installed.
- change current directory to build/, and run gulp. The builds will be placed in the dist/ directory.

## License

Released under the [MIT](http://opensource.org/licenses/MIT)
