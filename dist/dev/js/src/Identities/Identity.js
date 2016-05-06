System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Identity;
    return {
        setters:[],
        execute: function() {
            class Identity {
                constructor(Claims) {
                    this._Claims = Claims;
                }
                get Claims() {
                    return this._Claims;
                }
                find(key) {
                    let itensFiltrados = this.Claims.filter((item) => item.key === key);
                    let valoresFiltrados = itensFiltrados.map((item) => item.value);
                    return valoresFiltrados;
                }
                findFirst(key) {
                    let valoresFiltrados = this.find(key);
                    let item = valoresFiltrados[0];
                    return item;
                }
                has(key) {
                    let itensFiltrados = this.Claims.filter((item) => item.key === key);
                    if (itensFiltrados !== null) {
                        if (itensFiltrados.length > -1) {
                            return true;
                        }
                    }
                    return false;
                }
                get Name() {
                    let name = this.findFirst('name');
                    return name;
                }
            }
            exports_1("Identity", Identity);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL0lkZW50aXR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFFSTtnQkFRSSxZQUFZLE1BQTBDO29CQUVsRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDMUIsQ0FBQztnQkFSRCxJQUFXLE1BQU07b0JBRWIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLENBQUM7Z0JBT0QsSUFBSSxDQUFJLEdBQVU7b0JBRWQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQztvQkFDcEUsSUFBSSxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDO2dCQUM1QixDQUFDO2dCQUVELFNBQVMsQ0FBSSxHQUFVO29CQUVuQixJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUksR0FBRyxDQUFDLENBQUM7b0JBQ3pDLElBQUksSUFBSSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNoQixDQUFDO2dCQUVELEdBQUcsQ0FBQyxHQUFVO29CQUVWLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQ3BFLEVBQUUsQ0FBQSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FDM0IsQ0FBQzt3QkFDRyxFQUFFLENBQUEsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUM7NEJBQ0csTUFBTSxDQUFDLElBQUksQ0FBQzt3QkFDaEIsQ0FBQztvQkFDTCxDQUFDO29CQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2pCLENBQUM7Z0JBRUQsSUFBVyxJQUFJO29CQUVYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQVMsTUFBTSxDQUFDLENBQUM7b0JBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDO1lBN0NELCtCQTZDQyxDQUFBIiwiZmlsZSI6InNyYy9JZGVudGl0aWVzL0lkZW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJSWRlbnRpdHl9IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSWRlbnRpdHkgaW1wbGVtZW50cyBJSWRlbnRpdHlcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIF9DbGFpbXMgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+O1xyXG4gICAgICAgIHB1YmxpYyBnZXQgQ2xhaW1zKCkgOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+IFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX0NsYWltcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3RydWN0b3IoQ2xhaW1zOiBBcnJheTx7IGtleTogc3RyaW5nLCB2YWx1ZTogYW55IH0+KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX0NsYWltcyA9IENsYWltcztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmluZDxUPihrZXk6c3RyaW5nKTogQXJyYXk8VD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBpdGVuc0ZpbHRyYWRvcyA9IHRoaXMuQ2xhaW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5rZXkgPT09IGtleSk7XHJcbiAgICAgICAgICAgIGxldCB2YWxvcmVzRmlsdHJhZG9zID0gaXRlbnNGaWx0cmFkb3MubWFwKChpdGVtKSA9PiBpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbG9yZXNGaWx0cmFkb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGZpbmRGaXJzdDxUPihrZXk6c3RyaW5nKTpUXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgdmFsb3Jlc0ZpbHRyYWRvcyA9IHRoaXMuZmluZDxUPihrZXkpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHZhbG9yZXNGaWx0cmFkb3NbMF07XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBoYXMoa2V5OnN0cmluZyk6Ym9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW5zRmlsdHJhZG9zID0gdGhpcy5DbGFpbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmtleSA9PT0ga2V5KTtcclxuICAgICAgICAgICAgaWYoaXRlbnNGaWx0cmFkb3MgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW5zRmlsdHJhZG9zLmxlbmd0aCA+IC0xKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldCBOYW1lKCkgOiBzdHJpbmcgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMuZmluZEZpcnN0PHN0cmluZz4oJ25hbWUnKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
