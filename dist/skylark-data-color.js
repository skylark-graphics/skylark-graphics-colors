/**
 * skylark-data-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,t){var e=t.define,n=t.require,a="function"==typeof e&&e.amd,i=!a&&"undefined"!=typeof exports;if(!a&&!e){var o={};e=t.define=function(r,t,e){"function"==typeof e?(o[r]={factory:e,deps:t.map(function(t){return function(r,t){if("."!==r[0])return r;var e=t.split("/"),n=r.split("/");e.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?e.pop():e.push(n[a]));return e.join("/")}(t,r)}),resolved:!1,exports:null},n(r)):o[r]={factory:null,resolved:!0,exports:e}},n=t.require=function(r){if(!o.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var e=o[r];if(!e.resolved){var a=[];e.deps.forEach(function(r){a.push(n(r))}),e.exports=e.factory.apply(t,a)||null,e.resolved=!0}return e.exports}}if(!e)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,t){r("skylark-data-color/colors",["skylark-langx/skylark","skylark-langx/langx"],function(r,t){var e=r.colors=r.colors||{},n=/^[\s,#]+/,a=/\s+$/,i=Math,o=i.round,s=i.min,f=i.max,h=(i.random,e.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"});e.hexNames=function(r){var t={};for(var e in r)r.hasOwnProperty(e)&&(t[r[e]]=e);return t}(h);function l(r,t,e){return{r:255*g(r,255),g:255*g(t,255),b:255*g(e,255)}}function u(r,t,e){var n,a,i;function o(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+6*(t-r)*e:e<.5?t:e<2/3?r+(t-r)*(2/3-e)*6:r}if(r=g(r,360),t=g(t,100),e=g(e,100),0===t)n=a=i=e;else{var s=e<.5?e*(1+t):e+t-e*t,f=2*e-s;n=o(f,s,r+1/3),a=o(f,s,r),i=o(f,s,r-1/3)}return{r:255*n,g:255*a,b:255*i}}function c(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function g(r,t){d(r)&&(r="100%");var e=p(r);return r=s(t,f(0,parseFloat(r))),e&&(r=parseInt(r*t,10)/100),i.abs(r-t)<1e-6?1:r%t/parseFloat(t)}function b(r){return parseInt(r,16)}function d(r){return"string"==typeof r&&-1!=r.indexOf(".")&&1===parseFloat(r)}function p(r){return"string"==typeof r&&-1!=r.indexOf("%")}function m(r){return 1==r.length?"0"+r:""+r}function _(r){return r<=1&&(r=100*r+"%"),r}function v(r){return b(r)/255}var y,x,k,w=(x="[\\s|\\(]+("+(y="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+y+")[,|\\s]+("+y+")\\s*\\)?",k="[\\s|\\(]+("+y+")[,|\\s]+("+y+")[,|\\s]+("+y+")[,|\\s]+("+y+")\\s*\\)?",{rgb:new RegExp("rgb"+x),rgba:new RegExp("rgba"+k),hsl:new RegExp("hsl"+x),hsla:new RegExp("hsla"+k),hsv:new RegExp("hsv"+x),hsva:new RegExp("hsva"+k),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function H(r){r=r.replace(n,"").replace(a,"").toLowerCase();var t,e=!1;if(h[r])r=h[r],e=!0;else if("transparent"==r)return{r:0,g:0,b:0,a:0,format:"name"};return(t=w.rgb.exec(r))?{r:t[1],g:t[2],b:t[3]}:(t=w.rgba.exec(r))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=w.hsl.exec(r))?{h:t[1],s:t[2],l:t[3]}:(t=w.hsla.exec(r))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=w.hsv.exec(r))?{h:t[1],s:t[2],v:t[3]}:(t=w.hsva.exec(r))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=w.hex8.exec(r))?{a:v(t[1]),r:b(t[2]),g:b(t[3]),b:b(t[4]),format:e?"name":"hex8"}:(t=w.hex6.exec(r))?{r:b(t[1]),g:b(t[2]),b:b(t[3]),format:e?"name":"hex"}:!!(t=w.hex3.exec(r))&&{r:b(t[1]+""+t[1]),g:b(t[2]+""+t[2]),b:b(t[3]+""+t[3]),format:e?"name":"hex"}}return t.mixin(e,{inputToRGB:function(r){var t={r:0,g:0,b:0},e=1,n=!1,a=!1;"string"==typeof r&&(r=H(r));"object"==typeof r&&(r.hasOwnProperty("r")&&r.hasOwnProperty("g")&&r.hasOwnProperty("b")?(t=l(r.r,r.g,r.b),n=!0,a="%"===String(r.r).substr(-1)?"prgb":"rgb"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("v")?(r.s=_(r.s),r.v=_(r.v),t=function(r,t,e){r=6*g(r,360),t=g(t,100),e=g(e,100);var n=i.floor(r),a=r-n,o=e*(1-t),s=e*(1-a*t),f=e*(1-(1-a)*t),h=n%6;return{r:255*[e,s,o,o,f,e][h],g:255*[f,e,e,s,o,o][h],b:255*[o,o,f,e,e,s][h]}}(r.h,r.s,r.v),n=!0,a="hsv"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("l")&&(r.s=_(r.s),r.l=_(r.l),t=u(r.h,r.s,r.l),n=!0,a="hsl"),r.hasOwnProperty("a")&&(e=r.a));return e=c(e),{ok:n,format:r.format||a,r:s(255,f(t.r,0)),g:s(255,f(t.g,0)),b:s(255,f(t.b,0)),a:e}},rgbToRgb:l,rgbToHsl:function(r,t,e){r=g(r,255),t=g(t,255),e=g(e,255);var n,a,i=f(r,t,e),o=s(r,t,e),h=(i+o)/2;if(i==o)n=a=0;else{var l=i-o;switch(a=h>.5?l/(2-i-o):l/(i+o),i){case r:n=(t-e)/l+(t<e?6:0);break;case t:n=(e-r)/l+2;break;case e:n=(r-t)/l+4}n/=6}return{h:n,s:a,l:h}},hslToRgb:u,rgbToHsv:function(r,t,e){r=g(r,255),t=g(t,255),e=g(e,255);var n,a,i=f(r,t,e),o=s(r,t,e),h=i,l=i-o;if(a=0===i?0:l/i,i==o)n=0;else{switch(i){case r:n=(t-e)/l+(t<e?6:0);break;case t:n=(e-r)/l+2;break;case e:n=(r-t)/l+4}n/=6}return{h:n,s:a,v:h}},rgbToHex:function(r,t,e,n){var a=[m(o(r).toString(16)),m(o(t).toString(16)),m(o(e).toString(16))];if(n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1))return a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0);return a.join("")},rgbaToHex:function(r,t,e,n){return[m((a=n,Math.round(255*parseFloat(a)).toString(16))),m(o(r).toString(16)),m(o(t).toString(16)),m(o(e).toString(16))].join("");var a},boundAlpha:c,bound01:g,clamp01:function(r){return s(1,f(0,r))},parseIntFromHex:b,isOnePointZero:d,isPercentage:p,pad2:m,convertToPercentage:_,convertHexToDecimal:v,stringInputToObject:H}),e}),r("skylark-data-color/Color",["skylark-langx/langx","./colors"],function(r,t){var e=t.inputToRGB,n=(t.rgbToRgb,t.rgbToHsl),a=(t.hslToRgb,t.rgbToHsv),i=t.rgbToHex,o=t.rgbaToHex,s=t.boundAlpha,f=t.bound01,h=t.clamp01,l=(t.parseIntFromHex,t.isOnePointZero,t.isPercentage,t.pad2,t.convertToPercentage),u=(t.convertHexToDecimal,t.stringInputToObject,t.hexNames),c=0,g=Math,b=g.round,d=g.min,p=g.max,m=g.random,_=t.Color=r.klass({init:function(r,t){if(r=r||"",t=t||{},r instanceof _)return r;var n=e(r);this._originalInput=r,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=b(1e3*this._a)/1e3,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=b(this._r)),this._g<1&&(this._g=b(this._g)),this._b<1&&(this._b=b(this._b)),this._ok=n.ok,this._tc_id=c++},isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},setAlpha:function(r){return this._a=s(r),this._roundA=b(1e3*this._a)/1e3,this},toHsv:function(){var r=a(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=a(this._r,this._g,this._b),t=b(360*r.h),e=b(100*r.s),n=b(100*r.v);return 1==this._a?"hsv("+t+", "+e+"%, "+n+"%)":"hsva("+t+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var r=n(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=n(this._r,this._g,this._b),t=b(360*r.h),e=b(100*r.s),a=b(100*r.l);return 1==this._a?"hsl("+t+", "+e+"%, "+a+"%)":"hsla("+t+", "+e+"%, "+a+"%, "+this._roundA+")"},toHex:function(r){return i(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(){return o(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:b(this._r),g:b(this._g),b:b(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+b(this._r)+", "+b(this._g)+", "+b(this._b)+")":"rgba("+b(this._r)+", "+b(this._g)+", "+b(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:b(100*f(this._r,255))+"%",g:b(100*f(this._g,255))+"%",b:b(100*f(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+b(100*f(this._r,255))+"%, "+b(100*f(this._g,255))+"%, "+b(100*f(this._b,255))+"%)":"rgba("+b(100*f(this._r,255))+"%, "+b(100*f(this._g,255))+"%, "+b(100*f(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(u[i(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var t="#"+o(this._r,this._g,this._b,this._a),e=t,n=this._gradientType?"GradientType = 1, ":"";if(r){var a=_(r);e=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+e+")"},toString:function(r){var t=!!r;r=r||this._format;var e=!1,n=this._a<1&&this._a>=0,a=!t&&n&&("hex"===r||"hex6"===r||"hex3"===r||"name"===r);return a?"name"===r&&0===this._a?this.toName():this.toRgbString():("rgb"===r&&(e=this.toRgbString()),"prgb"===r&&(e=this.toPercentageRgbString()),"hex"!==r&&"hex6"!==r||(e=this.toHexString()),"hex3"===r&&(e=this.toHexString(!0)),"hex8"===r&&(e=this.toHex8String()),"name"===r&&(e=this.toName()),"hsl"===r&&(e=this.toHslString()),"hsv"===r&&(e=this.toHsvString()),e||this.toHexString())},_applyModification:function(r,t){var e=r.apply(null,[this].concat([].slice.call(t)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(k,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(H,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(y,arguments)},greyscale:function(){return this._applyModification(x,arguments)},spin:function(){return this._applyModification(R,arguments)},_applyCombination:function(r,t){return r.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(M,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(O,arguments)},splitcomplement:function(){return this._applyCombination(P,arguments)},triad:function(){return this._applyCombination(S,arguments)},tetrad:function(){return this._applyCombination(T,arguments)}});function v(r,t){t=0===t?0:t||10;var e=_(r).toHsl();return e.s-=t/100,e.s=h(e.s),_(e)}function y(r,t){t=0===t?0:t||10;var e=_(r).toHsl();return e.s+=t/100,e.s=h(e.s),_(e)}function x(r){return _(r).desaturate(100)}function k(r,t){t=0===t?0:t||10;var e=_(r).toHsl();return e.l+=t/100,e.l=h(e.l),_(e)}function w(r,t){t=0===t?0:t||10;var e=_(r).toRgb();return e.r=p(0,d(255,e.r-b(-t/100*255))),e.g=p(0,d(255,e.g-b(-t/100*255))),e.b=p(0,d(255,e.b-b(-t/100*255))),_(e)}function H(r,t){t=0===t?0:t||10;var e=_(r).toHsl();return e.l-=t/100,e.l=h(e.l),_(e)}function R(r,t){var e=_(r).toHsl(),n=(b(e.h)+t)%360;return e.h=n<0?360+n:n,_(e)}function A(r){var t=_(r).toHsl();return t.h=(t.h+180)%360,_(t)}function S(r){var t=_(r).toHsl(),e=t.h;return[_(r),_({h:(e+120)%360,s:t.s,l:t.l}),_({h:(e+240)%360,s:t.s,l:t.l})]}function T(r){var t=_(r).toHsl(),e=t.h;return[_(r),_({h:(e+90)%360,s:t.s,l:t.l}),_({h:(e+180)%360,s:t.s,l:t.l}),_({h:(e+270)%360,s:t.s,l:t.l})]}function P(r){var t=_(r).toHsl(),e=t.h;return[_(r),_({h:(e+72)%360,s:t.s,l:t.l}),_({h:(e+216)%360,s:t.s,l:t.l})]}function M(r,t,e){t=t||6,e=e||30;var n=_(r).toHsl(),a=360/e,i=[_(r)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,i.push(_(n));return i}function O(r,t){t=t||6;for(var e=_(r).toHsv(),n=e.h,a=e.s,i=e.v,o=[],s=1/t;t--;)o.push(_({h:n,s:a,v:i})),i=(i+s)%1;return o}return _.fromRatio=function(r,t){if("object"==typeof r){var e={};for(var n in r)r.hasOwnProperty(n)&&(e[n]="a"===n?r[n]:l(r[n]));r=e}return _(r,t)},_.equals=function(r,t){return!(!r||!t)&&_(r).toRgbString()==_(t).toRgbString()},_.random=function(){return _.fromRatio({r:m(),g:m(),b:m()})},_.mix=function(r,t,e){e=0===e?0:e||50;var n,a=_(r).toRgb(),i=_(t).toRgb(),o=e/100,s=2*o-1,f=i.a-a.a,h=1-(n=((n=s*f==-1?s:(s+f)/(1+s*f))+1)/2),l={r:i.r*n+a.r*h,g:i.g*n+a.g*h,b:i.b*n+a.b*h,a:i.a*o+a.a*(1-o)};return _(l)},_.readability=function(r,t){var e=_(r),n=_(t),a=e.toRgb(),i=n.toRgb(),o=e.getBrightness(),s=n.getBrightness(),f=Math.max(a.r,i.r)-Math.min(a.r,i.r)+Math.max(a.g,i.g)-Math.min(a.g,i.g)+Math.max(a.b,i.b)-Math.min(a.b,i.b);return{brightness:Math.abs(o-s),color:f}},_.isReadable=function(r,t){var e=_.readability(r,t);return e.brightness>125&&e.color>500},_.mostReadable=function(r,t){for(var e=null,n=0,a=!1,i=0;i<t.length;i++){var o=_.readability(r,t[i]),s=o.brightness>125&&o.color>500,f=o.brightness/125*3+o.color/500;(s&&!a||s&&a&&f>n||!s&&!a&&f>n)&&(a=s,n=f,e=_(t[i]))}return e},_}),r("skylark-data-color/hexNames",["skylark-langx/langx","./colors"],function(r,t){return t.hexNames}),r("skylark-data-color/names",["skylark-langx/langx","./colors"],function(r,t){return t.names}),r("skylark-data-color/main",["./colors","./Color","./hexNames","./names"],function(r){return r}),r("skylark-data-color",["skylark-data-color/main"],function(r){return r})}(e),!a){var s=n("skylark-langx/skylark");i?module.exports=s:t.skylarkjs=s}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-data-color.js.map