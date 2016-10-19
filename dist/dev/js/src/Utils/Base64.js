//export default Base64;
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var Base64 = (function () {
        function Base64() {
        }
        Base64.Encode = function (value) {
            var str = String(value);
            var output = '';
            for (var block = void 0, charCode = void 0, idx = 0, map = this.chars; 
            // if the next str index does not exist:
            //   change the mapping table to "="
            //   check if d has no fractional digits
            str.charAt(idx | 0) || (map = '=', idx % 1); 
            // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
            output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                }
                block = block << 8 | charCode;
            }
            return output;
        };
        Base64.Decode = function (value) {
            var output = '';
            var str = String(value).replace(/=+$/, '');
            if (str.length % 4 === 1) {
                throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
            }
            for (var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
            // get next character
            buffer = str.charAt(idx++); 
            // character found in table? initialize bit storage and add its ascii value;
            ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
                // try to find character in table (0-63, not found => -1)
                buffer = this.chars.indexOf(buffer);
            }
            return output;
        };
        Base64.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        return Base64;
    }());
    exports.Base64 = Base64;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9VdGlscy9CYXNlNjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCOzs7Ozs7Ozs7O0lBRXhCO1FBSUk7UUFFQSxDQUFDO1FBRWEsYUFBTSxHQUFwQixVQUFxQixLQUFhO1lBRTlCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7WUFDaEIsR0FBRyxDQUFDLENBRUosSUFBSSxLQUFLLFNBQUEsRUFBRSxRQUFRLFNBQUEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSztZQUM5Qyx3Q0FBd0M7WUFDeEMsb0NBQW9DO1lBQ3BDLHdDQUF3QztZQUN4QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUMzQyxzREFBc0Q7WUFDdEQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDakQsQ0FBQztnQkFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsTUFBTSxJQUFJLEtBQUssQ0FBQywwRkFBMEYsQ0FBQyxDQUFDO2dCQUNoSCxDQUFDO2dCQUNELEtBQUssR0FBRyxLQUFLLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUNsQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDO1FBRWEsYUFBTSxHQUFwQixVQUFxQixLQUFhO1lBRTlCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDekYsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUVKLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQUEsRUFBRSxNQUFNLFNBQUEsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUMvQixxQkFBcUI7WUFDckIsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDMUIsNEVBQTRFO1lBQzVFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxNQUFNLEdBQUcsTUFBTTtnQkFDL0MseUNBQXlDO2dCQUN6QyxrREFBa0Q7Z0JBQ2xELEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3RFLENBQUM7Z0JBQ0gseURBQXlEO2dCQUN6RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNMLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFFbEIsQ0FBQztRQXBETSxZQUFLLEdBQUcsbUVBQW1FLENBQUM7UUFxRHZGLGFBQUM7SUFBRCxDQXZEQSxBQXVEQyxJQUFBO0lBdkRZLGNBQU0sU0F1RGxCLENBQUEiLCJmaWxlIjoic3JjL1V0aWxzL0Jhc2U2NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2U2NFxyXG57XHJcbiAgICBzdGF0aWMgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBFbmNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcclxuICAgICAgICBsZXQgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSB0aGlzLmNoYXJzO1xyXG4gICAgICAgIC8vIGlmIHRoZSBuZXh0IHN0ciBpbmRleCBkb2VzIG5vdCBleGlzdDpcclxuICAgICAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxyXG4gICAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcclxuICAgICAgICBzdHIuY2hhckF0KGlkeCB8IDApIHx8IChtYXAgPSAnPScsIGlkeCAlIDEpO1xyXG4gICAgICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XHJcbiAgICAgICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMvNCk7XHJcbiAgICAgICAgICAgIGlmIChjaGFyQ29kZSA+IDB4RkYpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIididG9hJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlIExhdGluMSByYW5nZS5cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgRGVjb2RlKHZhbHVlIDpzdHJpbmcpOnN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKS5yZXBsYWNlKC89KyQvLCAnJyk7XHJcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIidhdG9iJyBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZGVjb2RlZCBpcyBub3QgY29ycmVjdGx5IGVuY29kZWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKFxyXG4gICAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICAgIGxldCBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDA7XHJcbiAgICAgICAgLy8gZ2V0IG5leHQgY2hhcmFjdGVyXHJcbiAgICAgICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XHJcbiAgICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xyXG4gICAgICAgIH5idWZmZXIgJiYgKGJzID0gYmMgJSA0ID8gYnMgKiA2NCArIGJ1ZmZlciA6IGJ1ZmZlcixcclxuICAgICAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgICAgICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgICAgICAgICAgYnVmZmVyID0gdGhpcy5jaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICAgIH1cclxufSJdfQ==
