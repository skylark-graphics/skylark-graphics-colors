/**
 * skylark-graphics-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,t){var e=t.define,require=t.require,n="function"==typeof e&&e.amd,a=!n&&"undefined"!=typeof exports;if(!n&&!e){var i={};e=t.define=function(r,t,e){"function"==typeof e?(i[r]={factory:e,deps:t.map(function(t){return function(r,t){if("."!==r[0])return r;var e=t.split("/"),n=r.split("/");e.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?e.pop():e.push(n[a]));return e.join("/")}(t,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:e}},require=t.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var e=[];module.deps.forEach(function(r){e.push(require(r))}),module.exports=module.factory.apply(t,e)||null,module.resolved=!0}return module.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-graphics-color/_names",[],function(){return{aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}}),r("skylark-graphics-color/_hexNames",["./_names"],function(r){return function(r){var t={};for(var e in r)r.hasOwnProperty(e)&&(t[r[e]]=e);return t}(r)}),r("skylark-graphics-color/_conversion",[],function(){function r(r){return 1==r.length?"0"+r:""+r}function t(r,t){(function(r){return"string"==typeof r&&-1!=r.indexOf(".")&&1===parseFloat(r)})(r)&&(r="100%");var e=function(r){return"string"==typeof r&&-1!=r.indexOf("%")}(r);return r=mathMin(t,mathMax(0,parseFloat(r))),e&&(r=parseInt(r*t,10)/100),math.abs(r-t)<1e-6?1:r%t/parseFloat(t)}return{bound01:t,rgbToHsl:function(r,e,n){r=t(r,255),e=t(e,255),n=t(n,255);var a,i,s=mathMax(r,e,n),o=mathMin(r,e,n),f=(s+o)/2;if(s==o)a=i=0;else{var h=s-o;switch(i=f>.5?h/(2-s-o):h/(s+o),s){case r:a=(e-n)/h+(e<n?6:0);break;case e:a=(n-r)/h+2;break;case n:a=(r-e)/h+4}a/=6}return{h:a,s:i,l:f}},hslToRgb:function(r,e,n){var a,i,s;function o(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+(t-r)*(2/3-e)*6:r}if(r=t(r,360),e=t(e,100),n=t(n,100),0===e)a=i=s=n;else{var f=n<.5?n*(1+e):n+e-n*e,h=2*n-f;a=o(h,f,r+1/3),i=o(h,f,r),s=o(h,f,r-1/3)}return{r:255*a,g:255*i,b:255*s}},rgbToHsv:function(r,e,n){r=t(r,255),e=t(e,255),n=t(n,255);var a,i,s=mathMax(r,e,n),o=mathMin(r,e,n),f=s,h=s-o;if(i=0===s?0:h/s,s==o)a=0;else{switch(s){case r:a=(e-n)/h+(e<n?6:0);break;case e:a=(n-r)/h+2;break;case n:a=(r-e)/h+4}a/=6}return{h:a,s:i,v:f}},hsvToRgb:function(r,e,n){r=6*t(r,360),e=t(e,100),n=t(n,100);var a=math.floor(r),i=r-a,s=n*(1-e),o=n*(1-i*e),f=n*(1-(1-i)*e),h=a%6;return{r:255*[n,o,s,s,f,n][h],g:255*[f,n,n,o,s,s][h],b:255*[s,s,f,n,n,o][h]}},rgbToHex:function(t,e,n,a){var i=[r(mathRound(t).toString(16)),r(mathRound(e).toString(16)),r(mathRound(n).toString(16))];if(a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1))return i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0);return i.join("")},rgbaToHex:function(t,e,n,a){return[r(convertDecimalToHex(a)),r(mathRound(t).toString(16)),r(mathRound(e).toString(16)),r(mathRound(n).toString(16))].join("")},hexToRgb:function(r){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}}}),r("skylark-graphics-color/Color",["skylark-langx-ns","skylark-langx-types","skylark-langx-klass","./_names","./_hexNames","./_conversion"],function(r,t,e,n,a,i){var s=Math,o=s.round,f=s.min,h=s.max,l=s.random;function u(r){return f(1,h(0,r))}var g=e({init:function(r,t){t=t||{},types.isString(r)&&(r=i.hexToRgb(r)),this._r=r.r,this._g=r.g,this._b=r.b,this._a=types.isDefined(r.a)?r.a:1,this._roundA=o(1e3*this._a)/1e3,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=o(this._r)),this._g<1&&(this._g=o(this._g)),this._b<1&&(this._b=o(this._b))},isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},setAlpha:function(r){return this._a=function(r){r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1);return r}(r),this._roundA=o(1e3*this._a)/1e3,this},toHsv:function(){var r=i.rgbToHsv(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=i.rgbToHsv(this._r,this._g,this._b),t=o(360*r.h),e=o(100*r.s),n=o(100*r.v);return 1==this._a?"hsv("+t+", "+e+"%, "+n+"%)":"hsva("+t+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var r=i.rgbToHsl(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=i.rgbToHsl(this._r,this._g,this._b),t=o(360*r.h),e=o(100*r.s),n=o(100*r.l);return 1==this._a?"hsl("+t+", "+e+"%, "+n+"%)":"hsla("+t+", "+e+"%, "+n+"%, "+this._roundA+")"},toHex:function(r){return i.rgbToHex(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(){return i.rgbaToHex(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:o(this._r),g:o(this._g),b:o(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+o(this._r)+", "+o(this._g)+", "+o(this._b)+")":"rgba("+o(this._r)+", "+o(this._g)+", "+o(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:o(100*i.bound01(this._r,255))+"%",g:o(100*i.bound01(this._g,255))+"%",b:o(100*i.bound01(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+o(100*i.bound01(this._r,255))+"%, "+o(100*i.bound01(this._g,255))+"%, "+o(100*i.bound01(this._b,255))+"%)":"rgba("+o(100*i.bound01(this._r,255))+"%, "+o(100*i.bound01(this._g,255))+"%, "+o(100*i.bound01(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(a[rgbToHex(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var t="#"+i.rgbaToHex(this._r,this._g,this._b,this._a),e=t,n=this._gradientType?"GradientType = 1, ":"";if(r){var a=g(r);e=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+e+")"},toString:function(r){var t=!!r;r=r||this._format;var e=!1,n=this._a<1&&this._a>=0,a=!t&&n&&("hex"===r||"hex6"===r||"hex3"===r||"name"===r);return a?"name"===r&&0===this._a?this.toName():this.toRgbString():("rgb"===r&&(e=this.toRgbString()),"prgb"===r&&(e=this.toPercentageRgbString()),"hex"!==r&&"hex6"!==r||(e=this.toHexString()),"hex3"===r&&(e=this.toHexString(!0)),"hex8"===r&&(e=this.toHex8String()),"name"===r&&(e=this.toName()),"hsl"===r&&(e=this.toHslString()),"hsv"===r&&(e=this.toHsvString()),e||this.toHexString())},lighten:function(r){r=0===r?0:r||10;var t=this.toHsl();return t.l+=r/100,t.l=u(t.l),g.fromHsl(t)},brighten:function(r){r=0===r?0:r||10;var t=this.toRgb();return t.r=h(0,f(255,t.r-o(-r/100*255))),t.g=h(0,f(255,t.g-o(-r/100*255))),t.b=h(0,f(255,t.b-o(-r/100*255))),new g(t)},darken:function(r){r=0===r?0:r||10;var t=this.toHsl();return t.l-=r/100,t.l=u(t.l),g.fromHsl(t)},desaturate:function(r){r=0===r?0:r||10;var t=this.toHsl();return t.s-=r/100,t.s=u(t.s),g.fromHsl(t)},saturate:function(r){r=0===r?0:r||10;var t=this.toHsl();return t.s+=r/100,t.s=u(t.s),g.fromHsl(t)},greyscale:function(){return this.desaturate(100)},spin:function(r){var t=this.toHsl(),e=(o(t.h)+r)%360;return t.h=e<0?360+e:e,g.fromHsl(t)},analogous:function(r,t){r=r||6,t=t||30;var e=this.toHsl(),n=360/t,a=[this];for(e.h=(e.h-(n*r>>1)+720)%360;--r;)e.h=(e.h+n)%360,a.push(g.fromHsl(e));return a},complement:function(){var r=this.toHsl();return r.h=(r.h+180)%360,g.fromHsl(r)},monochromatic:function(r){r=r||6;for(var t=this.toHsv(),e=t.h,n=t.s,a=t.v,i=[],s=1/r;r--;)i.push(g.fromHsv({h:e,s:n,v:a})),a=(a+s)%1;return i},splitcomplement:function(){var r=this.toHsl(),t=r.h;return[this,g.fromHsl({h:(t+72)%360,s:r.s,l:r.l}),g.fromHsl({h:(t+216)%360,s:r.s,l:r.l})]},triad:function(){var r=this.toHsl(),t=r.h;return[this,g.fromHsl({h:(t+120)%360,s:r.s,l:r.l}),g.fromHsl({h:(t+240)%360,s:r.s,l:r.l})]},tetrad:function(){var r=this.toHsl(),t=r.h;return[this,g.fromHsl({h:(t+90)%360,s:r.s,l:r.l}),g.fromHsl({h:(t+180)%360,s:r.s,l:r.l}),g.fromHsl({h:(t+270)%360,s:r.s,l:r.l})]},mix:function(r,t){t=0===t?0:t||50;var e,n=this.toRgb(),a=r.toRgb(),i=t/100,s=2*i-1,o=a.a-n.a,f=1-(e=((e=s*o==-1?s:(s+o)/(1+s*o))+1)/2),h={r:a.r*e+n.r*f,g:a.g*e+n.g*f,b:a.b*e+n.b*f,a:a.a*i+n.a*(1-i)};return new g(h)}});return g.equals=function(r,t){return!(!r||!t)&&r.toRgbString()==t.toRgbString()},g.random=function(){return g.fromRatio({r:l(),g:l(),b:l()})},g.fromRgba=function(r,t,e,n){return new g({r:r,g:t,b:e,a:n})},g.fromRgb=function(r,t,e){return new g({r:r,g:t,b:e})},g.fromHsl=function(r,t,e){var n=i.hslToRgb(r,t,e);return new g(n)},g.fromHsv=function(r,t,e){var n=i.hsvToRgb(r,t,e);return new g(n)},r.attach("graphics.Color",g)}),r("skylark-graphics-color/named",["./Color","./_names"],function(r,t){var e={};for(var n in t)e[n]=new r(t[n]);return r.named=e}),r("skylark-graphics-color/misc",["./Color"],function(r){return{readability:function(r,t){var e=r,n=t,a=e.toRgb(),i=n.toRgb(),s=e.getBrightness(),o=n.getBrightness(),f=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(s-o),color:f}},isReadable:function(r,t){var e=e(r,t);return e.brightness>125&&e.color>500},mostReadable:function(t,e){for(var n=null,a=0,i=!1,s=0;s<e.length;s++){var o=o(t,e[s]),f=o.brightness>125&&o.color>500,h=o.brightness/125*3+o.color/500;(f&&!i||f&&i&&h>a||!f&&!i&&h>a)&&(i=f,a=h,n=new r(e[s]))}return n}}}),r("skylark-graphics-color/parse",["./Color"],function(r){var t,e,n;e="[\\s|\\(]+("+(t="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",n="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",new RegExp("rgb"+e),new RegExp("rgba"+n),new RegExp("hsl"+e),new RegExp("hsla"+n),new RegExp("hsv"+e),new RegExp("hsva"+n);return r.parse=parse}),r("skylark-graphics-color/main",["./Color","./named","./misc","./parse"],function(r){return Color}),r("skylark-graphics-color",["skylark-graphics-color/main"],function(r){return r})}(e),!n){var s=require("skylark-langx-ns");a?module.exports=s:t.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-graphics-color.js.map