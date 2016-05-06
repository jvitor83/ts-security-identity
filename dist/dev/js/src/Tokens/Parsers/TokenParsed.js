System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParsed;
    return {
        setters:[],
        execute: function() {
            TokenParsed = (function () {
                function TokenParsed(header, content, signature) {
                    this.header = header;
                    this.content = content;
                    this.signature = signature;
                }
                Object.defineProperty(TokenParsed.prototype, "headerJSON", {
                    get: function () {
                        return JSON.parse(this.header);
                    },
                    enumerable: true,
                    configurable: true
                });
                TokenParsed.prototype.headerObject = function () {
                    return this.headerJSON;
                };
                Object.defineProperty(TokenParsed.prototype, "contentJSON", {
                    get: function () {
                        return JSON.parse(this.content);
                    },
                    enumerable: true,
                    configurable: true
                });
                TokenParsed.prototype.contentObject = function () {
                    return this.contentJSON;
                };
                return TokenParsed;
            }());
            exports_1("TokenParsed", TokenParsed);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Z0JBRUkscUJBQW1CLE1BQWEsRUFBUyxPQUFjLEVBQVMsU0FBZ0I7b0JBQTdELFdBQU0sR0FBTixNQUFNLENBQU87b0JBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBTztvQkFBUyxjQUFTLEdBQVQsU0FBUyxDQUFPO2dCQUVoRixDQUFDO2dCQUVELHNCQUFXLG1DQUFVO3lCQUFyQjt3QkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ25DLENBQUM7OzttQkFBQTtnQkFDTSxrQ0FBWSxHQUFuQjtvQkFDSSxNQUFNLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxzQkFBVyxvQ0FBVzt5QkFBdEI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxDQUFDOzs7bUJBQUE7Z0JBQ00sbUNBQWEsR0FBcEI7b0JBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQy9CLENBQUM7Z0JBQ0wsa0JBQUM7WUFBRCxDQW5CQSxBQW1CQyxJQUFBO1lBbkJELHFDQW1CQyxDQUFBIiwiZmlsZSI6InNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SVRva2VuUGFyc2VkfSBmcm9tICcuL0lUb2tlblBhcnNlZCc7XHJcbmltcG9ydCB7SVRva2VuSGVhZGVyfSBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRva2VuUGFyc2VkIGltcGxlbWVudHMgSVRva2VuUGFyc2VkXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWFkZXI6c3RyaW5nLCBwdWJsaWMgY29udGVudDpzdHJpbmcsIHB1YmxpYyBzaWduYXR1cmU6c3RyaW5nKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgaGVhZGVySlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaGVhZGVyT2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5oZWFkZXJKU09OO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGNvbnRlbnRKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY29udGVudE9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuY29udGVudEpTT047XHJcbiAgICB9XHJcbn1cclxuIl19
