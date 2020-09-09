/**
 * skylark-graphics-colors - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var t=e.define,require=e.require,n="function"==typeof t&&t.amd,a=!n&&"undefined"!=typeof exports;if(!n&&!t){var s={};t=e.define=function(r,e,t){"function"==typeof t?(s[r]={factory:t,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var t=e.split("/"),n=r.split("/");t.pop();for(var a=0;a<n.length;a++)"."!=n[a]&&(".."==n[a]?t.pop():t.push(n[a]));return t.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):s[r]={factory:null,resolved:!0,exports:t}},require=e.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=s[r];if(!module.resolved){var t=[];module.deps.forEach(function(r){t.push(require(r))}),module.exports=module.factory.apply(e,t)||null,module.resolved=!0}return module.exports}}if(!t)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("skylark-graphics-colors/colors",["skylark-langx-ns"],function(r){return r.attach("graphics.colors",{})}),r("skylark-graphics-colors/_names",[],function(){return{aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"}}),r("skylark-graphics-colors/_hexNames",["./_names"],function(r){return function(r){var e={};for(var t in r)r.hasOwnProperty(t)&&(e[r[t]]=t);return e}(r)}),r("skylark-graphics-colors/_conversion",["skylark-langx-strings","./_names"],function(r,e){var t=Math,n=t.round,a=t.min,s=t.max;t.random;function i(r){return 1==r.length?"0"+r:""+r}function o(r,e){(function(r){return"string"==typeof r&&-1!=r.indexOf(".")&&1===parseFloat(r)})(r)&&(r="100%");var n=function(r){return"string"==typeof r&&-1!=r.indexOf("%")}(r);return r=a(e,s(0,parseFloat(r))),n&&(r=parseInt(r*e,10)/100),t.abs(r-e)<1e-6?1:r%e/parseFloat(e)}var f,h,l,u=(h="[\\s|\\(]+("+(f="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+f+")[,|\\s]+("+f+")\\s*\\)?",l="[\\s|\\(]+("+f+")[,|\\s]+("+f+")[,|\\s]+("+f+")[,|\\s]+("+f+")\\s*\\)?",{rgb:new RegExp("rgb"+h),rgba:new RegExp("rgba"+l),hsl:new RegExp("hsl"+h),hsla:new RegExp("hsla"+l),hsv:new RegExp("hsv"+h),hsva:new RegExp("hsva"+l),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex3s:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6s:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8s:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function g(r){return parseInt(r,16)}return{bound01:o,rgbToRgb:function(r,e,t){return{r:255*o(r,255),g:255*o(e,255),b:255*o(t,255)}},rgbToHsl:function(r,e,t){r=o(r,255),e=o(e,255),t=o(t,255);var n,i,f=s(r,e,t),h=a(r,e,t),l=(f+h)/2;if(f==h)n=i=0;else{var u=f-h;switch(i=l>.5?u/(2-f-h):u/(f+h),f){case r:n=(e-t)/u+(e<t?6:0);break;case e:n=(t-r)/u+2;break;case t:n=(r-e)/u+4}n/=6}return{h:n,s:i,l:l}},hslToRgb:function(r,e,t){var n,a,s;function i(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+(e-r)*(2/3-t)*6:r}if(r=o(r,360),e=o(e,100),t=o(t,100),0===e)n=a=s=t;else{var f=t<.5?t*(1+e):t+e-t*e,h=2*t-f;n=i(h,f,r+1/3),a=i(h,f,r),s=i(h,f,r-1/3)}return{r:255*n,g:255*a,b:255*s}},rgbToHsv:function(r,e,t){r=o(r,255),e=o(e,255),t=o(t,255);var n,i,f=s(r,e,t),h=a(r,e,t),l=f,u=f-h;if(i=0===f?0:u/f,f==h)n=0;else{switch(f){case r:n=(e-t)/u+(e<t?6:0);break;case e:n=(t-r)/u+2;break;case t:n=(r-e)/u+4}n/=6}return{h:n,s:i,v:l}},hsvToRgb:function(r,e,n){r=6*o(r,360),e=o(e,100),n=o(n,100);var a=t.floor(r),s=r-a,i=n*(1-e),f=n*(1-s*e),h=n*(1-(1-s)*e),l=a%6;return{r:255*[n,f,i,i,h,n][l],g:255*[h,n,n,f,i,i][l],b:255*[i,i,h,n,n,f][l]}},rgbToHex:function(r,e,t,a){var s=[i(n(r).toString(16)),i(n(e).toString(16)),i(n(t).toString(16))];if(a&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1))return s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0);return s.join("")},rgbaToHex:function(r,e,t,a){return[i((s=a,Math.round(255*parseFloat(s)).toString(16))),i(n(r).toString(16)),i(n(e).toString(16)),i(n(t).toString(16))].join("");var s},hexToRgb:function(r){var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null},strToRgb:function(t){t=r.trim(t).toLowerCase();var n,a=!1;if(e[t])t=e[t],a=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(n=u.rgb.exec(t))return{r:n[1],g:n[2],b:n[3]};if(n=u.rgba.exec(t))return{r:n[1],g:n[2],b:n[3],a:n[4]};if(n=u.hsl.exec(t))return{h:n[1],s:n[2],l:n[3]};if(n=u.hsla.exec(t))return{h:n[1],s:n[2],l:n[3],a:n[4]};if(n=u.hsv.exec(t))return{h:n[1],s:n[2],v:n[3]};if(n=u.hsva.exec(t))return{h:n[1],s:n[2],v:n[3],a:n[4]};if((n=u.hex8.exec(t))||(n=u.hex8s.exec(t)))return{a:(s=n[1],g(s)/255),r:g(n[2]),g:g(n[3]),b:g(n[4]),format:a?"name":"hex8"};var s;if((n=u.hex6.exec(t))||(n=u.hex6s.exec(t)))return{r:g(n[1]),g:g(n[2]),b:g(n[3]),format:a?"name":"hex"};if((n=u.hex3.exec(t))||(n=u.hex3s.exec(t)))return{r:g(n[1]+""+n[1]),g:g(n[2]+""+n[2]),b:g(n[3]+""+n[3]),format:a?"name":"hex"};return!1}}}),r("skylark-graphics-colors/Color",["skylark-langx-types","skylark-langx-klass","./colors","./_names","./_hexNames","./_conversion"],function(r,e,t,n,a,s){var i=Math,o=i.round,f=i.min,h=i.max,l=i.random;function u(r){return f(1,h(0,r))}var g=e({init:function(e,t){t=t||{},r.isString(e)&&(e=s.hexToRgb(e)),this._r=e.r,this._g=e.g,this._b=e.b,this._a=r.isDefined(e.a)?e.a:1,this._roundA=o(1e3*this._a)/1e3,this._format=t.format||e.format,this._gradientType=t.gradientType,this._r<1&&(this._r=o(this._r)),this._g<1&&(this._g=o(this._g)),this._b<1&&(this._b=o(this._b))},isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},setAlpha:function(r){return this._a=function(r){r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1);return r}(r),this._roundA=o(1e3*this._a)/1e3,this},toHsv:function(){var r=s.rgbToHsv(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=s.rgbToHsv(this._r,this._g,this._b),e=o(360*r.h),t=o(100*r.s),n=o(100*r.v);return 1==this._a?"hsv("+e+", "+t+"%, "+n+"%)":"hsva("+e+", "+t+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var r=s.rgbToHsl(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=s.rgbToHsl(this._r,this._g,this._b),e=o(360*r.h),t=o(100*r.s),n=o(100*r.l);return 1==this._a?"hsl("+e+", "+t+"%, "+n+"%)":"hsla("+e+", "+t+"%, "+n+"%, "+this._roundA+")"},toHex:function(r){return s.rgbToHex(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(){return s.rgbaToHex(this._r,this._g,this._b,this._a)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:o(this._r),g:o(this._g),b:o(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+o(this._r)+", "+o(this._g)+", "+o(this._b)+")":"rgba("+o(this._r)+", "+o(this._g)+", "+o(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:o(100*s.bound01(this._r,255))+"%",g:o(100*s.bound01(this._g,255))+"%",b:o(100*s.bound01(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+o(100*s.bound01(this._r,255))+"%, "+o(100*s.bound01(this._g,255))+"%, "+o(100*s.bound01(this._b,255))+"%)":"rgba("+o(100*s.bound01(this._r,255))+"%, "+o(100*s.bound01(this._g,255))+"%, "+o(100*s.bound01(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(a[s.rgbToHex(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var e="#"+s.rgbaToHex(this._r,this._g,this._b,this._a),t=e,n=this._gradientType?"GradientType = 1, ":"";if(r){var a=g(r);t=a.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+t+")"},toNumber:function(){return this._r<<16^this._g<<8^this._b<<0},toString:function(r){var e=!!r;r=r||this._format;var t=!1,n=this._a<1&&this._a>=0,a=!e&&n&&("hex"===r||"hex6"===r||"hex3"===r||"name"===r);return a?"name"===r&&0===this._a?this.toName():this.toRgbString():("rgb"===r&&(t=this.toRgbString()),"prgb"===r&&(t=this.toPercentageRgbString()),"hex"!==r&&"hex6"!==r||(t=this.toHexString()),"hex3"===r&&(t=this.toHexString(!0)),"hex8"===r&&(t=this.toHex8String()),"name"===r&&(t=this.toName()),"hsl"===r&&(t=this.toHslString()),"hsv"===r&&(t=this.toHsvString()),t||this.toHexString())},lighten:function(r){r=0===r?0:r||10;var e=this.toHsl();return e.l+=r/100,e.l=u(e.l),g.fromHsl(e)},brighten:function(r){r=0===r?0:r||10;var e=this.toRgb();return e.r=h(0,f(255,e.r-o(-r/100*255))),e.g=h(0,f(255,e.g-o(-r/100*255))),e.b=h(0,f(255,e.b-o(-r/100*255))),new g(e)},darken:function(r){r=0===r?0:r||10;var e=this.toHsl();return e.l-=r/100,e.l=u(e.l),g.fromHsl(e)},desaturate:function(r){r=0===r?0:r||10;var e=this.toHsl();return e.s-=r/100,e.s=u(e.s),g.fromHsl(e)},saturate:function(r){r=0===r?0:r||10;var e=this.toHsl();return e.s+=r/100,e.s=u(e.s),g.fromHsl(e)},greyscale:function(){return this.desaturate(100)},spin:function(r){var e=this.toHsl(),t=(o(e.h)+r)%360;return e.h=t<0?360+t:t,g.fromHsl(e)},analogous:function(r,e){r=r||6,e=e||30;var t=this.toHsl(),n=360/e,a=[this];for(t.h=(t.h-(n*r>>1)+720)%360;--r;)t.h=(t.h+n)%360,a.push(g.fromHsl(t));return a},complement:function(){var r=this.toHsl();return r.h=(r.h+180)%360,g.fromHsl(r)},monochromatic:function(r){r=r||6;for(var e=this.toHsv(),t=e.h,n=e.s,a=e.v,s=[],i=1/r;r--;)s.push(g.fromHsv({h:t,s:n,v:a})),a=(a+i)%1;return s},splitcomplement:function(){var r=this.toHsl(),e=r.h;return[this,g.fromHsl({h:(e+72)%360,s:r.s,l:r.l}),g.fromHsl({h:(e+216)%360,s:r.s,l:r.l})]},triad:function(){var r=this.toHsl(),e=r.h;return[this,g.fromHsl({h:(e+120)%360,s:r.s,l:r.l}),g.fromHsl({h:(e+240)%360,s:r.s,l:r.l})]},tetrad:function(){var r=this.toHsl(),e=r.h;return[this,g.fromHsl({h:(e+90)%360,s:r.s,l:r.l}),g.fromHsl({h:(e+180)%360,s:r.s,l:r.l}),g.fromHsl({h:(e+270)%360,s:r.s,l:r.l})]},mix:function(r,e){e=0===e?0:e||50;var t,n=this.toRgb(),a=r.toRgb(),s=e/100,i=2*s-1,o=a.a-n.a,f=1-(t=((t=i*o==-1?i:(i+o)/(1+i*o))+1)/2),h={r:a.r*t+n.r*f,g:a.g*t+n.g*f,b:a.b*t+n.b*f,a:a.a*s+n.a*(1-s)};return new g(h)},isValid:function(){return!0}});function c(r){return r<=1&&(r=100*r+"%"),r}return g.equals=function(r,e){return!(!r||!e)&&(r=g.parse(r),e=g.parse(e),r.toRgbString()==e.toRgbString())},g.random=function(){return g.fromRatio({r:l(),g:l(),b:l()})},g.fromRgba=function(r,e,t,n){return new g({r:r,g:e,b:t,a:n})},g.fromRgb=function(r,e,t){return new g({r:r,g:e,b:t})},g.fromHsl=function(r,e,t,n){var a=s.hslToRgb(r,e,t);return new g(a)},g.fromHsv=function(r,e,t,n){var a=s.hsvToRgb(r,e,t);return new g(a)},g.parse=function(r){if(r instanceof g)return r;var e={r:0,g:0,b:0},t=1,n=!1,a=!1;return"string"==typeof r&&(r=s.strToRgb(r)),"object"==typeof r&&(r.hasOwnProperty("r")&&r.hasOwnProperty("g")&&r.hasOwnProperty("b")?(e=s.rgbToRgb(r.r,r.g,r.b),n=!0,a="%"===String(r.r).substr(-1)?"prgb":"rgb"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("v")?(r.s=c(r.s),r.v=c(r.v),e=s.hsvToRgb(r.h,r.s,r.v),n=!0,a="hsv"):r.hasOwnProperty("h")&&r.hasOwnProperty("s")&&r.hasOwnProperty("l")&&(r.s=c(r.s),r.l=c(r.l),e=s.hslToRgb(r.h,r.s,r.l),n=!0,a="hsl"),r.hasOwnProperty("a")&&(t=r.a)),new g({ok:n,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t},{format:r.format||a})},t.Color=g}),r("skylark-graphics-colors/named",["./colors","./Color","./_names"],function(r,e,t){var n={};for(var a in t)n[a]=r.parse(t[a]);return colors.named=n}),r("skylark-graphics-colors/main",["./colors","./Color","./named"],function(r){return r}),r("skylark-graphics-colors",["skylark-graphics-colors/main"],function(r){return r})}(t),!n){var i=require("skylark-langx-ns");a?module.exports=i:e.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-graphics-colors.js.map