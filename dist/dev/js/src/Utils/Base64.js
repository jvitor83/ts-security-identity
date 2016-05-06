System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Base64;
    return {
        setters:[],
        execute: function() {
            exports_1("default",Base64);
            Base64 = (function () {
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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c291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cclxuY2xhc3MgQmFzZTY0XHJcbntcclxuICAgIHN0YXRpYyBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEVuY29kZSh2YWx1ZSA6c3RyaW5nKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxyXG4gICAgICAgIGxldCBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IHRoaXMuY2hhcnM7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxyXG4gICAgICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXHJcbiAgICAgICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xyXG4gICAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XHJcbiAgICAgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcclxuICAgICAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMy80KTtcclxuICAgICAgICAgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2J0b2EnIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgTGF0aW4xIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLz0rJC8sICcnKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXHJcbiAgICAgICAgbGV0IGJjID0gMCwgYnMsIGJ1ZmZlciwgaWR4ID0gMDtcclxuICAgICAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcclxuICAgICAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcclxuICAgICAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XHJcbiAgICAgICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxyXG4gICAgICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG4gICAgfVxyXG59Il19
