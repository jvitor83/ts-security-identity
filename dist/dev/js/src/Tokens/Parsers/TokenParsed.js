System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParsed;
    return {
        setters:[],
        execute: function() {
            //export default TokenParsed;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0EsNkJBQTZCO1lBRTdCO2dCQUVJLHFCQUFtQixNQUFhLEVBQVMsT0FBYyxFQUFTLFNBQWdCO29CQUE3RCxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTztnQkFFaEYsQ0FBQztnQkFFRCxzQkFBVyxtQ0FBVTt5QkFBckI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuQyxDQUFDOzs7bUJBQUE7Z0JBQ00sa0NBQVksR0FBbkI7b0JBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsc0JBQVcsb0NBQVc7eUJBQXRCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsQ0FBQzs7O21CQUFBO2dCQUNNLG1DQUFhLEdBQXBCO29CQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvQixDQUFDO2dCQUNMLGtCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtZQW5CRCxxQ0FtQkMsQ0FBQSIsImZpbGUiOiJzcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lUb2tlblBhcnNlZH0gZnJvbSAnLi9JVG9rZW5QYXJzZWQnO1xyXG5pbXBvcnQge0lUb2tlbkhlYWRlcn0gZnJvbSAnLi4vSVRva2VuSGVhZGVyJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZWQgaW1wbGVtZW50cyBJVG9rZW5QYXJzZWRcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlYWRlcjpzdHJpbmcsIHB1YmxpYyBjb250ZW50OnN0cmluZywgcHVibGljIHNpZ25hdHVyZTpzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBoZWFkZXJKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuaGVhZGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoZWFkZXJPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmhlYWRlckpTT047XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgY29udGVudEpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb250ZW50T2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5jb250ZW50SlNPTjtcclxuICAgIH1cclxufVxyXG4iXX0=
