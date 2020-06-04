/**
 * skylark-graphics-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx-strings","./Color"],function(e,a){var r,s,n,h=(s="[\\s|\\(]+("+(r="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",{rgb:new RegExp("rgb"+s),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+s),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+s),hsva:new RegExp("hsva"+n),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function x(e){return parseInt(e,16)}return a.parse=function(a){a=e.trim(a).toLowerCase();var r,s,n=!1;if(names[a])a=names[a],n=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};return(r=h.rgb.exec(a))?{r:r[1],g:r[2],b:r[3]}:(r=h.rgba.exec(a))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=h.hsl.exec(a))?{h:r[1],s:r[2],l:r[3]}:(r=h.hsla.exec(a))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=h.hsv.exec(a))?{h:r[1],s:r[2],v:r[3]}:(r=h.hsva.exec(a))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=h.hex8.exec(a))?{a:(s=r[1],x(s)/255),r:x(r[2]),g:x(r[3]),b:x(r[4]),format:n?"name":"hex8"}:(r=h.hex6.exec(a))?{r:x(r[1]),g:x(r[2]),b:x(r[3]),format:n?"name":"hex"}:!!(r=h.hex3.exec(a))&&{r:x(r[1]+""+r[1]),g:x(r[2]+""+r[2]),b:x(r[3]+""+r[3]),format:n?"name":"hex"}}});
//# sourceMappingURL=sourcemaps/parse.js.map
