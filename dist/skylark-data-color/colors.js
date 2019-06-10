/**
 * skylark-data-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark","skylark-langx/langx"],function(e,r){var a=e.colors=e.colors||{},f=/^[\s,#]+/,n=/\s+$/,t=Math,o=t.round,l=t.min,s=t.max,i=(t.random,a.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"});a.hexNames=function(e){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[e[a]]=a);return r}(i);function d(e,r,a){return{r:255*g(e,255),g:255*g(r,255),b:255*g(a,255)}}function c(e,r,a){var f,n,t;function o(e,r,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(r-e)*a:a<.5?r:a<2/3?e+(r-e)*(2/3-a)*6:e}if(e=g(e,360),r=g(r,100),a=g(a,100),0===r)f=n=t=a;else{var l=a<.5?a*(1+r):a+r-a*r,s=2*a-l;f=o(s,l,e+1/3),n=o(s,l,e),t=o(s,l,e-1/3)}return{r:255*f,g:255*n,b:255*t}}function b(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function g(e,r){h(e)&&(e="100%");var a=p(e);return e=l(r,s(0,parseFloat(e))),a&&(e=parseInt(e*r,10)/100),t.abs(e-r)<1e-6?1:e%r/parseFloat(r)}function u(e){return parseInt(e,16)}function h(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function p(e){return"string"==typeof e&&-1!=e.indexOf("%")}function m(e){return 1==e.length?"0"+e:""+e}function y(e){return e<=1&&(e=100*e+"%"),e}function v(e){return u(e)/255}var k,w,x,A=(w="[\\s|\\(]+("+(k="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+k+")[,|\\s]+("+k+")\\s*\\)?",x="[\\s|\\(]+("+k+")[,|\\s]+("+k+")[,|\\s]+("+k+")[,|\\s]+("+k+")\\s*\\)?",{rgb:new RegExp("rgb"+w),rgba:new RegExp("rgba"+x),hsl:new RegExp("hsl"+w),hsla:new RegExp("hsla"+x),hsv:new RegExp("hsv"+w),hsva:new RegExp("hsva"+x),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function F(e){e=e.replace(f,"").replace(n,"").toLowerCase();var r,a=!1;if(i[e])e=i[e],a=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(r=A.rgb.exec(e))?{r:r[1],g:r[2],b:r[3]}:(r=A.rgba.exec(e))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=A.hsl.exec(e))?{h:r[1],s:r[2],l:r[3]}:(r=A.hsla.exec(e))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=A.hsv.exec(e))?{h:r[1],s:r[2],v:r[3]}:(r=A.hsva.exec(e))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=A.hex8.exec(e))?{a:v(r[1]),r:u(r[2]),g:u(r[3]),b:u(r[4]),format:a?"name":"hex8"}:(r=A.hex6.exec(e))?{r:u(r[1]),g:u(r[2]),b:u(r[3]),format:a?"name":"hex"}:!!(r=A.hex3.exec(e))&&{r:u(r[1]+""+r[1]),g:u(r[2]+""+r[2]),b:u(r[3]+""+r[3]),format:a?"name":"hex"}}return r.mixin(a,{inputToRGB:function(e){var r={r:0,g:0,b:0},a=1,f=!1,n=!1;return"string"==typeof e&&(e=F(e)),"object"==typeof e&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(r=d(e.r,e.g,e.b),f=!0,n="%"===String(e.r).substr(-1)?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=y(e.s),e.v=y(e.v),r=function(e,r,a){e=6*g(e,360),r=g(r,100),a=g(a,100);var f=t.floor(e),n=e-f,o=a*(1-r),l=a*(1-n*r),s=a*(1-(1-n)*r),i=f%6;return{r:255*[a,l,o,o,s,a][i],g:255*[s,a,a,l,o,o][i],b:255*[o,o,s,a,a,l][i]}}(e.h,e.s,e.v),f=!0,n="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=y(e.s),e.l=y(e.l),r=c(e.h,e.s,e.l),f=!0,n="hsl"),e.hasOwnProperty("a")&&(a=e.a)),a=b(a),{ok:f,format:e.format||n,r:l(255,s(r.r,0)),g:l(255,s(r.g,0)),b:l(255,s(r.b,0)),a:a}},rgbToRgb:d,rgbToHsl:function(e,r,a){e=g(e,255),r=g(r,255),a=g(a,255);var f,n,t=s(e,r,a),o=l(e,r,a),i=(t+o)/2;if(t==o)f=n=0;else{var d=t-o;switch(n=i>.5?d/(2-t-o):d/(t+o),t){case e:f=(r-a)/d+(r<a?6:0);break;case r:f=(a-e)/d+2;break;case a:f=(e-r)/d+4}f/=6}return{h:f,s:n,l:i}},hslToRgb:c,rgbToHsv:function(e,r,a){e=g(e,255),r=g(r,255),a=g(a,255);var f,n,t=s(e,r,a),o=l(e,r,a),i=t,d=t-o;if(n=0===t?0:d/t,t==o)f=0;else{switch(t){case e:f=(r-a)/d+(r<a?6:0);break;case r:f=(a-e)/d+2;break;case a:f=(e-r)/d+4}f/=6}return{h:f,s:n,v:i}},rgbToHex:function(e,r,a,f){var n=[m(o(e).toString(16)),m(o(r).toString(16)),m(o(a).toString(16))];return f&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")},rgbaToHex:function(e,r,a,f){var n;return[m((n=f,Math.round(255*parseFloat(n)).toString(16))),m(o(e).toString(16)),m(o(r).toString(16)),m(o(a).toString(16))].join("")},boundAlpha:b,bound01:g,clamp01:function(e){return l(1,s(0,e))},parseIntFromHex:u,isOnePointZero:h,isPercentage:p,pad2:m,convertToPercentage:y,convertHexToDecimal:v,stringInputToObject:F}),a});
//# sourceMappingURL=sourcemaps/colors.js.map