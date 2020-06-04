/**
 * skylark-graphics-color - The skylark color utility library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./Color"],function(e){var s,n,g;n="[\\s|\\(]+("+(s="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+s+")[,|\\s]+("+s+")\\s*\\)?",g="[\\s|\\(]+("+s+")[,|\\s]+("+s+")[,|\\s]+("+s+")[,|\\s]+("+s+")\\s*\\)?",new RegExp("rgb"+n),new RegExp("rgba"+g),new RegExp("hsl"+n),new RegExp("hsla"+g),new RegExp("hsv"+n),new RegExp("hsva"+g);return e.parse=parse});
//# sourceMappingURL=sourcemaps/parse.js.map
