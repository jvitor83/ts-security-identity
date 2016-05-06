System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParsed;
    return {
        setters:[],
        execute: function() {
            exports_1("default",TokenParsed);
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
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0Esb0JBQWUsV0FBVyxFQUFDO1lBRTNCO2dCQUVJLHFCQUFtQixNQUFhLEVBQVMsT0FBYyxFQUFTLFNBQWdCO29CQUE3RCxXQUFNLEdBQU4sTUFBTSxDQUFPO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBQVMsY0FBUyxHQUFULFNBQVMsQ0FBTztnQkFFaEYsQ0FBQztnQkFFRCxzQkFBVyxtQ0FBVTt5QkFBckI7d0JBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuQyxDQUFDOzs7bUJBQUE7Z0JBQ00sa0NBQVksR0FBbkI7b0JBQ0ksTUFBTSxDQUFJLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLENBQUM7Z0JBRUQsc0JBQVcsb0NBQVc7eUJBQXRCO3dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsQ0FBQzs7O21CQUFBO2dCQUNNLG1DQUFhLEdBQXBCO29CQUNJLE1BQU0sQ0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDO2dCQUMvQixDQUFDO2dCQUNMLGtCQUFDO1lBQUQsQ0FuQkEsQUFtQkMsSUFBQSIsImZpbGUiOiJzcmMvVG9rZW5zL1BhcnNlcnMvVG9rZW5QYXJzZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVRva2VuUGFyc2VkIGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IElUb2tlbkhlYWRlciBmcm9tICcuLi9JVG9rZW5IZWFkZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5QYXJzZWQ7XHJcblxyXG5jbGFzcyBUb2tlblBhcnNlZCBpbXBsZW1lbnRzIElUb2tlblBhcnNlZFxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVhZGVyOnN0cmluZywgcHVibGljIGNvbnRlbnQ6c3RyaW5nLCBwdWJsaWMgc2lnbmF0dXJlOnN0cmluZykge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZ2V0IGhlYWRlckpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGhlYWRlck9iamVjdDxUIGV4dGVuZHMgSVRva2VuSGVhZGVyPigpIDogVCB7XHJcbiAgICAgICAgcmV0dXJuIDxUPnRoaXMuaGVhZGVySlNPTjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBjb250ZW50SlNPTigpIDogYW55IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbnRlbnRPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmNvbnRlbnRKU09OO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
