define([
    "skylark-langx-types",
    "skylark-langx-klass",
    "./colors",
    "./_names",
    "./_hexNames",
    "./_conversion"
],function(
    types,
    klass,
    colors,
    names,
    hexNames,
    conversion
) {
    var math = Math,
        mathRound = math.round,
        mathMin = math.min,
        mathMax = math.max,
        mathRandom = math.random;

    // Return a valid alpha value [0,1] with all invalid values being set to 1
    function boundAlpha(a) {
        a = parseFloat(a);

        if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
        }

        return a;
    }

     // Force a number between 0 and 1
    function clamp01(val) {
        return mathMin(1, mathMax(0, val));
    }
         
    var Color = klass({
        init : function(rgb, opts) {
            opts = opts || { };

            //var rgb = inputToRGB(color);
            //
            //this._originalInput = color,
            if (types.isString(rgb)) {
                rgb= conversion.hexToRgb(rgb);
            }
            this._r = rgb.r,
            this._g = rgb.g,
            this._b = rgb.b,
            this._a = types.isDefined(rgb.a) ? rgb.a : 1,

            this._roundA = mathRound(1000 * this._a) / 1000,
            this._format = opts.format || rgb.format;
            this._gradientType = opts.gradientType;

            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1
            // If it was supposed to be 128, this was already taken care of by `inputToRgb`
            if (this._r < 1) { this._r = mathRound(this._r); }
            if (this._g < 1) { this._g = mathRound(this._g); }
            if (this._b < 1) { this._b = mathRound(this._b); }

        },

        /*
         * Return a boolean indicating whether the color's perceived brightness is dark.
         */
        isDark: function() {
            return this.getBrightness() < 128;
        },

        /*
         * Return a boolean indicating whether the color's perceived brightness is light.
         */
        isLight: function() {
            return !this.isDark();
        },

        getOriginalInput: function() {
          return this._originalInput;
        },

        getFormat: function() {
            return this._format;
        },

        /*
         * Returns the alpha value of a color, from 0-1
         */
        getAlpha: function() {
            return this._a;
        },

        /*
         * Returns the perceived brightness of a color, from 0-255.
         */
        getBrightness: function() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
        },

        /*
         * Sets the alpha value on a current color. Accepted range is in between 0-1.
         */
        setAlpha: function(value) {
            this._a = boundAlpha(value);
            this._roundA = mathRound(1000 * this._a) / 1000;
            return this;
        },

        toHsv: function() {
            var hsv = conversion.rgbToHsv(this._r, this._g, this._b);
            return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
        },

        toHsvString: function() {
            var hsv = conversion.rgbToHsv(this._r, this._g, this._b);
            var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v = mathRound(hsv.v * 100);
            return (this._a == 1) ?
              "hsv("  + h + ", " + s + "%, " + v + "%)" :
              "hsva(" + h + ", " + s + "%, " + v + "%, "+ this._roundA + ")";
        },

        toHsl: function() {
            var hsl = conversion.rgbToHsl(this._r, this._g, this._b);
            return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
        },

        toHslString: function() {
            var hsl = conversion.rgbToHsl(this._r, this._g, this._b);
            var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l = mathRound(hsl.l * 100);
            return (this._a == 1) ?
              "hsl("  + h + ", " + s + "%, " + l + "%)" :
              "hsla(" + h + ", " + s + "%, " + l + "%, "+ this._roundA + ")";
        },

        toHex: function(allow3Char) {
            return conversion.rgbToHex(this._r, this._g, this._b, allow3Char);
        },

        toHexString: function(allow3Char) {
            return '#' + this.toHex(allow3Char);
        },

        toHex8: function() {
            return conversion.rgbaToHex(this._r, this._g, this._b, this._a);
        },

        toHex8String: function() {
            return '#' + this.toHex8();
        },

        toRgb: function() {
            return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
        },

        toRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" :
              "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
        },

        toPercentageRgb: function() {
            return { r: mathRound(conversion.bound01(this._r, 255) * 100) + "%", g: mathRound(conversion.bound01(this._g, 255) * 100) + "%", b: mathRound(conversion.bound01(this._b, 255) * 100) + "%", a: this._a };
        },

        toPercentageRgbString: function() {
            return (this._a == 1) ?
              "rgb("  + mathRound(conversion.bound01(this._r, 255) * 100) + "%, " + mathRound(conversion.bound01(this._g, 255) * 100) + "%, " + mathRound(conversion.bound01(this._b, 255) * 100) + "%)" :
              
              "rgba(" + mathRound(conversion.bound01(this._r, 255) * 100) + "%, " + mathRound(conversion.bound01(this._g, 255) * 100) + "%, " + mathRound(conversion.bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
        },

        toName: function() {
            if (this._a === 0) {
                return "transparent";
            }

            if (this._a < 1) {
                return false;
            }

            return hexNames[conversion.rgbToHex(this._r, this._g, this._b, true)] || false;
        },

        toFilter: function(secondColor) {
            var hex8String = '#' + conversion.rgbaToHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";

            if (secondColor) {
                var s = Color(secondColor);
                secondHex8String = s.toHex8String();
            }

            return "progid:DXImageTransform.Microsoft.gradient("+gradientType+"startColorstr="+hex8String+",endColorstr="+secondHex8String+")";
        },

        toNumber : function() {
            return (this._r << 16 ^ this._g << 8 ^ this._b << 0);
        },

        toString: function(format) {
            var formatSet = !!format;
            format = format || this._format;

            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "name");

            if (needsAlphaFormat) {
                // Special case for "transparent", all other non-alpha formats
                // will return rgba when there is transparency.
                if (format === "name" && this._a === 0) {
                    return this.toName();
                }
                return this.toRgbString();
            }
            if (format === "rgb") {
                formattedString = this.toRgbString();
            }
            if (format === "prgb") {
                formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
                formattedString = this.toHexString();
            }
            if (format === "hex3") {
                formattedString = this.toHexString(true);
            }
            if (format === "hex8") {
                formattedString = this.toHex8String();
            }
            if (format === "name") {
                formattedString = this.toName();
            }
            if (format === "hsl") {
                formattedString = this.toHslString();
            }
            if (format === "hsv") {
                formattedString = this.toHsvString();
            }

            return formattedString || this.toHexString();
        },

        // modification methods
        // ----------------------
        // Thanks to less.js for some of the basics here
        // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

        /*
         * Lighten the color a given amount, from 0 to 100. Providing 100 will always return white.
         */
        lighten: function(amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = this.toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return Color.fromHsl(hsl);
        },

        /*
         * Brighten the color a given amount, from 0 to 100
         */
        brighten: function(amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var rgb = this.toRgb();
            rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * - (amount / 100))));
            rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * - (amount / 100))));
            rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * - (amount / 100))));
            return new Color(rgb);
        },

        /*
         * Darken the color a given amount, from 0 to 100. Providing 100 will always return black.
         */
        darken: function(amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = this.toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return Color.fromHsl(hsl);
        },

        /*
         *  Desaturate the color a given amount, from 0 to 100. Providing 100 will is the same as calling greyscale.
         */
        desaturate: function(amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = this.toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return Color.fromHsl(hsl);
        },

        /*
         *  Saturate the color a given amount, from 0 to 100.
         */
        saturate: function(amount) {
            amount = (amount === 0) ? 0 : (amount || 10);
            var hsl = this.toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return Color.fromHsl(hsl);
        },

        /*
         * Completely desaturates a color into greyscale. Same as calling desaturate(100).
         */
        greyscale: function() {
            return this.desaturate(100);
        },

        /*
         * Spin the hue a given amount, from -360 to 360. Calling with 0, 360, or -360 will do nothing (since it sets the hue back to what it was before).
         */
        spin: function(amount) {
            var hsl = this.toHsl();
            var hue = (mathRound(hsl.h) + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return Color.fromHsl(hsl);
        },


        // combination methods

        /*
         * Finds analogous colors the color.
         */
        analogous: function(results, slices) {
            results = results || 6;
            slices = slices || 30;

            var hsl = this.toHsl();
            var part = 360 / slices;
            var ret = [this];

            for (hsl.h = ((hsl.h - (part * results >> 1)) + 720) % 360; --results; ) {
                hsl.h = (hsl.h + part) % 360;
                ret.push(Color.fromHsl(hsl));
            }
            return ret;
        },

        complement: function() {
            var hsl = this.toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return Color.fromHsl(hsl);
        },

        /*
         * Finds monochromatic colors to the color.
         */
        monochromatic: function(results) {
            results = results || 6;
            var hsv = this.toHsv();
            var h = hsv.h, s = hsv.s, v = hsv.v;
            var ret = [];
            var modification = 1 / results;

            while (results--) {
                ret.push(Color.fromHsv({ h: h, s: s, v: v}));
                v = (v + modification) % 1;
            }

            return ret;
        },


        /*
         * Generates a split complements of the color.
         */
        splitcomplement: function() {
            var hsl = this.toHsl();
            var h = hsl.h;
            return [
                this,
                Color.fromHsl({ h: (h + 72) % 360, s: hsl.s, l: hsl.l}),
                Color.fromHsl({ h: (h + 216) % 360, s: hsl.s, l: hsl.l})
            ];
        },

        /*
         * Generates a color triad of the color.
         */
        triad: function() {
            var hsl = this.toHsl();
            var h = hsl.h;
            return [
                this,
                Color.fromHsl({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
                Color.fromHsl({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
            ];
        },

        tetrad: function() {
            var hsl = this.toHsl();
            var h = hsl.h;
            return [
                this,
                Color.fromHsl({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
                Color.fromHsl({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
                Color.fromHsl({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
            ];
        },


        mix : function(color2,amount) {
            amount = (amount === 0) ? 0 : (amount || 50);

            var rgb1 = this.toRgb();
            var rgb2 = color2.toRgb();

            var p = amount / 100;
            var w = p * 2 - 1;
            var a = rgb2.a - rgb1.a;

            var w1;

            if (w * a == -1) {
                w1 = w;
            } else {
                w1 = (w + a) / (1 + w * a);
            }

            w1 = (w1 + 1) / 2;

            var w2 = 1 - w1;

            var rgba = {
                r: rgb2.r * w1 + rgb1.r * w2,
                g: rgb2.g * w1 + rgb1.g * w2,
                b: rgb2.b * w1 + rgb1.b * w2,
                a: rgb2.a * p  + rgb1.a * (1 - p)
            };

            return new Color(rgba);

        },

        isValid : function(){
            return true;
        }
    });

    // `equals`
    // Can be called with any Color input
    Color.equals = function (color1, color2) {
        if (!color1 || !color2) { return false; }
        color1 = Color.parse(color1);
        color2 = Color.parse(color2);

        return color1.toRgbString() == color2.toRgbString();
    };
    

    Color.random = function() {
        return Color.fromRatio({
            r: mathRandom(),
            g: mathRandom(),
            b: mathRandom()
        });
    };

    Color.fromRgba = function(r,g,b,a) {
        return new Color({
            r,
            g,
            b,
            a
        })  
    };

    Color.fromRgb = function(r,g,b) {
        return new Color({
            r,
            g,
            b
        })  
    };

    Color.fromHsl = function(h,s,l,a) {
        var rgb = conversion.hslToRgb(h,s,l)
        return new Color(rgb)  
    };

    Color.fromHsv = function(h,s,v,a) {
        var rgb = conversion.hsvToRgb(h,s,v)
        return new Color(rgb)  
    }; 

    // Replace a decimal with it's percentage value
    function convertToPercentage(n) {
        if (n <= 1) {
            n = (n * 100) + "%";
        }

        return n;
    }

    // Given a string or object, convert that input to RGB
    // Possible string inputs:
    //
    //     "red"
    //     "#f00" or "f00"
    //     "#ff0000" or "ff0000"
    //     "#ff000000" or "ff000000"
    //     "rgb 255 0 0" or "rgb (255, 0, 0)"
    //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
    //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
    //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
    //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
    //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
    //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
    //
    Color.parse = function (color) {
        if (color instanceof Color) {
            return color;
        }

        var rgb = { r: 0, g: 0, b: 0 };
        var a = 1;
        var ok = false;
        var format = false;

        if (typeof color == "string") {
            color = conversion.strToRgb(color);
        }

        if (typeof color == "object") {
            if (color.hasOwnProperty("r") && color.hasOwnProperty("g") && color.hasOwnProperty("b")) {
                rgb = conversion.rgbToRgb(color.r, color.g, color.b);
                ok = true;
                format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("v")) {
                color.s = convertToPercentage(color.s);
                color.v = convertToPercentage(color.v);
                rgb = conversion.hsvToRgb(color.h, color.s, color.v);
                ok = true;
                format = "hsv";
            }
            else if (color.hasOwnProperty("h") && color.hasOwnProperty("s") && color.hasOwnProperty("l")) {
                color.s = convertToPercentage(color.s);
                color.l = convertToPercentage(color.l);
                rgb =  conversion.hslToRgb(color.h, color.s, color.l);
                ok = true;
                format = "hsl";
            }

            if (color.hasOwnProperty("a")) {
                a = color.a;
            }
        }

        return new Color(
            {
                ok: ok,
                r: Math.min(255, Math.max(rgb.r, 0)),
                g: Math.min(255, Math.max(rgb.g, 0)),
                b: Math.min(255, Math.max(rgb.b, 0)),
                a: a
            },
            {
                format: color.format || format,                
            }
        );

    }

    /*
    // If input is an object, force 1 into "1.0" to handle ratios properly
    // String input requires "1.0" as input, so 1 will be treated as 1
    Color.fromRatio = function(color, opts) {
        if (typeof color == "object") {
            var newColor = {};
            for (var i in color) {
                if (color.hasOwnProperty(i)) {
                    if (i === "a") {
                        newColor[i] = color[i];
                    }
                    else {
                        newColor[i] = convertToPercentage(color[i]);
                    }
                }
            }
            color = newColor;
        }

        return new Color(color, opts);
    };
    */
    return colors.Color = Color;
});
