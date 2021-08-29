/**
 * skylark-graphics-colors - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./color"],function(r){return{readability:function(r,t){var n=r,a=t,e=n.toRgb(),o=a.toRgb(),i=n.getBrightness(),g=a.getBrightness(),s=Math.max(e.r,o.r)-Math.min(e.r,o.r)+Math.max(e.g,o.g)-Math.min(e.g,o.g)+Math.max(e.b,o.b)-Math.min(e.b,o.b);return{brightness:Math.abs(i-g),color:s}},isReadable:function(r,t){var n=n(r,t);return n.brightness>125&&n.color>500},mostReadable:function(t,n){for(var a=null,e=0,o=!1,i=0;i<n.length;i++){var g=g(t,n[i]),s=g.brightness>125&&g.color>500,b=g.brightness/125*3+g.color/500;(s&&!o||s&&o&&b>e||!s&&!o&&b>e)&&(o=s,e=b,a=new r(n[i]))}return a}}});
//# sourceMappingURL=sourcemaps/misc.js.map
