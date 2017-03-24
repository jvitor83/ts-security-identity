// export default Base64;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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bnQiOlsiLy8gZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2U2NCB7XHJcbiAgc3RhdGljIGNoYXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcclxuXHJcbiAgcHVibGljIHN0YXRpYyBFbmNvZGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpO1xyXG4gICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgZm9yIChcclxuICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJcclxuICAgICAgbGV0IGJsb2NrLCBjaGFyQ29kZSwgaWR4ID0gMCwgbWFwID0gdGhpcy5jaGFycztcclxuICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxyXG4gICAgICAvLyAgIGNoYW5nZSB0aGUgbWFwcGluZyB0YWJsZSB0byBcIj1cIlxyXG4gICAgICAvLyAgIGNoZWNrIGlmIGQgaGFzIG5vIGZyYWN0aW9uYWwgZGlnaXRzXHJcbiAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XHJcbiAgICAgIC8vIFwiOCAtIGlkeCAlIDEgKiA4XCIgZ2VuZXJhdGVzIHRoZSBzZXF1ZW5jZSAyLCA0LCA2LCA4XHJcbiAgICAgIG91dHB1dCArPSBtYXAuY2hhckF0KDYzICYgYmxvY2sgPj4gOCAtIGlkeCAlIDEgKiA4KVxyXG4gICAgKSB7XHJcbiAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaWR4ICs9IDMgLyA0KTtcclxuICAgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignXCJidG9hXCIgZmFpbGVkOiBUaGUgc3RyaW5nIHRvIGJlIGVuY29kZWQgY29udGFpbnMgY2hhcmFjdGVycyBvdXRzaWRlIG9mIHRoZSBMYXRpbjEgcmFuZ2UuJyk7XHJcbiAgICAgIH1cclxuICAgICAgYmxvY2sgPSBibG9jayA8PCA4IHwgY2hhckNvZGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBEZWNvZGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICBjb25zdCBzdHIgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLz0rJC8sICcnKTtcclxuICAgIGlmIChzdHIubGVuZ3RoICUgNCA9PT0gMSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiYXRvYlwiIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC4nKTtcclxuICAgIH1cclxuICAgIGZvciAoXHJcbiAgICAgIC8vIGluaXRpYWxpemUgcmVzdWx0IGFuZCBjb3VudGVyc1xyXG4gICAgICBsZXQgYmMgPSAwLCBicywgYnVmZmVyLCBpZHggPSAwO1xyXG4gICAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcclxuICAgICAgYnVmZmVyID0gc3RyLmNoYXJBdChpZHgrKyk7XHJcbiAgICAgIC8vIGNoYXJhY3RlciBmb3VuZCBpbiB0YWJsZT8gaW5pdGlhbGl6ZSBiaXQgc3RvcmFnZSBhbmQgYWRkIGl0cyBhc2NpaSB2YWx1ZTtcclxuICAgICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxyXG4gICAgICAgIC8vIGFuZCBpZiBub3QgZmlyc3Qgb2YgZWFjaCA0IGNoYXJhY3RlcnMsXHJcbiAgICAgICAgLy8gY29udmVydCB0aGUgZmlyc3QgOCBiaXRzIHRvIG9uZSBhc2NpaSBjaGFyYWN0ZXJcclxuICAgICAgYmMrKyAlIDQpID8gb3V0cHV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMjU1ICYgYnMgPj4gKC0yICogYmMgJiA2KSkgOiAwXHJcbiAgICApIHtcclxuICAgICAgLy8gdHJ5IHRvIGZpbmQgY2hhcmFjdGVyIGluIHRhYmxlICgwLTYzLCBub3QgZm91bmQgPT4gLTEpXHJcbiAgICAgIGJ1ZmZlciA9IHRoaXMuY2hhcnMuaW5kZXhPZihidWZmZXIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==
