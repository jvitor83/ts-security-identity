System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Base64;
    return {
        setters:[],
        execute: function() {
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
            exports_1("Base64", Base64);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Y2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQmFzZTY0XHJcbntcclxuICAgIHN0YXRpYyBjaGFycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgc3RhdGljIEVuY29kZSh2YWx1ZSA6c3RyaW5nKTpzdHJpbmdcclxuICAgIHtcclxuICAgICAgICBsZXQgc3RyID0gU3RyaW5nKHZhbHVlKTtcclxuICAgICAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICAgICAgZm9yIChcclxuICAgICAgICAvLyBpbml0aWFsaXplIHJlc3VsdCBhbmQgY291bnRlclxyXG4gICAgICAgIGxldCBibG9jaywgY2hhckNvZGUsIGlkeCA9IDAsIG1hcCA9IHRoaXMuY2hhcnM7XHJcbiAgICAgICAgLy8gaWYgdGhlIG5leHQgc3RyIGluZGV4IGRvZXMgbm90IGV4aXN0OlxyXG4gICAgICAgIC8vICAgY2hhbmdlIHRoZSBtYXBwaW5nIHRhYmxlIHRvIFwiPVwiXHJcbiAgICAgICAgLy8gICBjaGVjayBpZiBkIGhhcyBubyBmcmFjdGlvbmFsIGRpZ2l0c1xyXG4gICAgICAgIHN0ci5jaGFyQXQoaWR4IHwgMCkgfHwgKG1hcCA9ICc9JywgaWR4ICUgMSk7XHJcbiAgICAgICAgLy8gXCI4IC0gaWR4ICUgMSAqIDhcIiBnZW5lcmF0ZXMgdGhlIHNlcXVlbmNlIDIsIDQsIDYsIDhcclxuICAgICAgICBvdXRwdXQgKz0gbWFwLmNoYXJBdCg2MyAmIGJsb2NrID4+IDggLSBpZHggJSAxICogOClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY2hhckNvZGUgPSBzdHIuY2hhckNvZGVBdChpZHggKz0gMy80KTtcclxuICAgICAgICAgICAgaWYgKGNoYXJDb2RlID4gMHhGRikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2J0b2EnIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBlbmNvZGVkIGNvbnRhaW5zIGNoYXJhY3RlcnMgb3V0c2lkZSBvZiB0aGUgTGF0aW4xIHJhbmdlLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBibG9jayA9IGJsb2NrIDw8IDggfCBjaGFyQ29kZTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBEZWNvZGUodmFsdWUgOnN0cmluZyk6c3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgICAgIGxldCBzdHIgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoLz0rJC8sICcnKTtcclxuICAgICAgICBpZiAoc3RyLmxlbmd0aCAlIDQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiJ2F0b2InIGZhaWxlZDogVGhlIHN0cmluZyB0byBiZSBkZWNvZGVkIGlzIG5vdCBjb3JyZWN0bHkgZW5jb2RlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoXHJcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSByZXN1bHQgYW5kIGNvdW50ZXJzXHJcbiAgICAgICAgbGV0IGJjID0gMCwgYnMsIGJ1ZmZlciwgaWR4ID0gMDtcclxuICAgICAgICAvLyBnZXQgbmV4dCBjaGFyYWN0ZXJcclxuICAgICAgICBidWZmZXIgPSBzdHIuY2hhckF0KGlkeCsrKTtcclxuICAgICAgICAvLyBjaGFyYWN0ZXIgZm91bmQgaW4gdGFibGU/IGluaXRpYWxpemUgYml0IHN0b3JhZ2UgYW5kIGFkZCBpdHMgYXNjaWkgdmFsdWU7XHJcbiAgICAgICAgfmJ1ZmZlciAmJiAoYnMgPSBiYyAlIDQgPyBicyAqIDY0ICsgYnVmZmVyIDogYnVmZmVyLFxyXG4gICAgICAgICAgICAvLyBhbmQgaWYgbm90IGZpcnN0IG9mIGVhY2ggNCBjaGFyYWN0ZXJzLFxyXG4gICAgICAgICAgICAvLyBjb252ZXJ0IHRoZSBmaXJzdCA4IGJpdHMgdG8gb25lIGFzY2lpIGNoYXJhY3RlclxyXG4gICAgICAgICAgICBiYysrICUgNCkgPyBvdXRwdXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgyNTUgJiBicyA+PiAoLTIgKiBiYyAmIDYpKSA6IDBcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIC8vIHRyeSB0byBmaW5kIGNoYXJhY3RlciBpbiB0YWJsZSAoMC02Mywgbm90IGZvdW5kID0+IC0xKVxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmNoYXJzLmluZGV4T2YoYnVmZmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcblxyXG4gICAgfVxyXG59Il19
