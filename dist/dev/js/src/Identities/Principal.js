System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal;
    return {
        setters:[],
        execute: function() {
            class Principal {
                constructor(Identity, AuthenticationType = "Generic") {
                    this.Identity = Identity;
                    this.AuthenticationType = AuthenticationType;
                }
                get IsAuthenticated() {
                    if (this.Identity != null) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
            exports_1("Principal", Principal);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBSUk7Z0JBRUksWUFBbUIsUUFBb0IsRUFBUyxrQkFBa0IsR0FBVyxTQUFTO29CQUFuRSxhQUFRLEdBQVIsUUFBUSxDQUFZO29CQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7Z0JBR3RGLENBQUM7Z0JBRUQsSUFBVyxlQUFlO29CQUV0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUMxQixDQUFDO3dCQUNHLE1BQU0sQ0FBQyxJQUFJLENBQUM7b0JBQ2hCLENBQUM7b0JBQ0QsSUFBSSxDQUNKLENBQUM7d0JBQ0csTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDakIsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQWxCRCxpQ0FrQkMsQ0FBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9QcmluY2lwYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lQcmluY2lwYWx9IGZyb20gJy4vSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7SUlkZW50aXR5fSBmcm9tICcuL0lJZGVudGl0eSc7XHJcblxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBQcmluY2lwYWwgaW1wbGVtZW50cyBJUHJpbmNpcGFsXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3RydWN0b3IocHVibGljIElkZW50aXR5PyA6SUlkZW50aXR5LCBwdWJsaWMgQXV0aGVudGljYXRpb25UeXBlIDpzdHJpbmcgPSBcIkdlbmVyaWNcIikgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIGdldCBJc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuSWRlbnRpdHkgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9Il19
