System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TokenParsed;
    return {
        setters:[],
        execute: function() {
            class TokenParsed {
                constructor(header, content, signature) {
                    this.header = header;
                    this.content = content;
                    this.signature = signature;
                }
                get headerJSON() {
                    return JSON.parse(this.header);
                }
                headerObject() {
                    return this.headerJSON;
                }
                get contentJSON() {
                    return JSON.parse(this.content);
                }
                contentObject() {
                    return this.contentJSON;
                }
            }
            exports_1("TokenParsed", TokenParsed);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9Ub2tlbnMvUGFyc2Vycy9Ub2tlblBhcnNlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7Z0JBRUksWUFBbUIsTUFBYSxFQUFTLE9BQWMsRUFBUyxTQUFnQjtvQkFBN0QsV0FBTSxHQUFOLE1BQU0sQ0FBTztvQkFBUyxZQUFPLEdBQVAsT0FBTyxDQUFPO29CQUFTLGNBQVMsR0FBVCxTQUFTLENBQU87Z0JBRWhGLENBQUM7Z0JBRUQsSUFBVyxVQUFVO29CQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ00sWUFBWTtvQkFDZixNQUFNLENBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxJQUFXLFdBQVc7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDTSxhQUFhO29CQUNoQixNQUFNLENBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztnQkFDL0IsQ0FBQztZQUNMLENBQUM7WUFuQkQscUNBbUJDLENBQUEiLCJmaWxlIjoic3JjL1Rva2Vucy9QYXJzZXJzL1Rva2VuUGFyc2VkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9rZW5QYXJzZWR9IGZyb20gJy4vSVRva2VuUGFyc2VkJztcclxuaW1wb3J0IHtJVG9rZW5IZWFkZXJ9IGZyb20gJy4uL0lUb2tlbkhlYWRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5QYXJzZWQgaW1wbGVtZW50cyBJVG9rZW5QYXJzZWRcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlYWRlcjpzdHJpbmcsIHB1YmxpYyBjb250ZW50OnN0cmluZywgcHVibGljIHNpZ25hdHVyZTpzdHJpbmcpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGdldCBoZWFkZXJKU09OKCkgOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuaGVhZGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBoZWFkZXJPYmplY3Q8VCBleHRlbmRzIElUb2tlbkhlYWRlcj4oKSA6IFQge1xyXG4gICAgICAgIHJldHVybiA8VD50aGlzLmhlYWRlckpTT047XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgY29udGVudEpTT04oKSA6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBjb250ZW50T2JqZWN0PFQgZXh0ZW5kcyBJVG9rZW5IZWFkZXI+KCkgOiBUIHtcclxuICAgICAgICByZXR1cm4gPFQ+dGhpcy5jb250ZW50SlNPTjtcclxuICAgIH1cclxufVxyXG4iXX0=
