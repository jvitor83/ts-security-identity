// export default Base64;
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Base64 = /** @class */ (function () {
        function Base64() {
        }
        Base64.Encode = function (value) {
            var str = String(value);
            var output = '';
            for (
            // initialize result and counter
            var block = void 0, charCode = void 0, idx = 0, map = this.chars; 
            // if the next str index does not exist:
            //   change the mapping table to "="
            //   check if d has no fractional digits
            str.charAt(idx | 0) || (map = '=', idx % 1); 
            // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
            output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new Error('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');
                }
                block = block << 8 | charCode;
            }
            return output;
        };
        Base64.Decode = function (value) {
            var output = '';
            var str = String(value).replace(/=+$/, '');
            if (str.length % 4 === 1) {
                throw new Error('"atob" failed: The string to be decoded is not correctly encoded.');
            }
            for (
            // initialize result and counters
            var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxJQUFBO0lBcERZLHdCQUFNIiwiZmlsZSI6InNyYy9VdGlscy9CYXNlNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgZGVmYXVsdCBCYXNlNjQ7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFzZTY0IHtcclxuICBzdGF0aWMgY2hhcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIEVuY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSk7XHJcbiAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICBmb3IgKFxyXG4gICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxyXG4gICAgICBsZXQgYmxvY2ssIGNoYXJDb2RlLCBpZHggPSAwLCBtYXAgPSB0aGlzLmNoYXJzO1xyXG4gICAgICAvLyBpZiB0aGUgbmV4dCBzdHIgaW5kZXggZG9lcyBub3QgZXhpc3Q6XHJcbiAgICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXHJcbiAgICAgIC8vICAgY2hlY2sgaWYgZCBoYXMgbm8gZnJhY3Rpb25hbCBkaWdpdHNcclxuICAgICAgc3RyLmNoYXJBdChpZHggfCAwKSB8fCAobWFwID0gJz0nLCBpZHggJSAxKTtcclxuICAgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcclxuICAgICAgb3V0cHV0ICs9IG1hcC5jaGFyQXQoNjMgJiBibG9jayA+PiA4IC0gaWR4ICUgMSAqIDgpXHJcbiAgICApIHtcclxuICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMyAvIDQpO1xyXG4gICAgICBpZiAoY2hhckNvZGUgPiAweEZGKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdcImJ0b2FcIiBmYWlsZWQ6IFRoZSBzdHJpbmcgdG8gYmUgZW5jb2RlZCBjb250YWlucyBjaGFyYWN0ZXJzIG91dHNpZGUgb2YgdGhlIExhdGluMSByYW5nZS4nKTtcclxuICAgICAgfVxyXG4gICAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIERlY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgIGNvbnN0IHN0ciA9IFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvPSskLywgJycpO1xyXG4gICAgaWYgKHN0ci5sZW5ndGggJSA0ID09PSAxKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignXCJhdG9iXCIgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGRlY29kZWQgaXMgbm90IGNvcnJlY3RseSBlbmNvZGVkLicpO1xyXG4gICAgfVxyXG4gICAgZm9yIChcclxuICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXHJcbiAgICAgIGxldCBiYyA9IDAsIGJzLCBidWZmZXIsIGlkeCA9IDA7XHJcbiAgICAgIC8vIGdldCBuZXh0IGNoYXJhY3RlclxyXG4gICAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcclxuICAgICAgLy8gY2hhcmFjdGVyIGZvdW5kIGluIHRhYmxlPyBpbml0aWFsaXplIGJpdCBzdG9yYWdlIGFuZCBhZGQgaXRzIGFzY2lpIHZhbHVlO1xyXG4gICAgICB+YnVmZmVyICYmIChicyA9IGJjICUgNCA/IGJzICogNjQgKyBidWZmZXIgOiBidWZmZXIsXHJcbiAgICAgICAgLy8gYW5kIGlmIG5vdCBmaXJzdCBvZiBlYWNoIDQgY2hhcmFjdGVycyxcclxuICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcclxuICAgICkge1xyXG4gICAgICAvLyB0cnkgdG8gZmluZCBjaGFyYWN0ZXIgaW4gdGFibGUgKDAtNjMsIG5vdCBmb3VuZCA9PiAtMSlcclxuICAgICAgYnVmZmVyID0gdGhpcy5jaGFycy5pbmRleE9mKGJ1ZmZlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcbn1cclxuIl19
