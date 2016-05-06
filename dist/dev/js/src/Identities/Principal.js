"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Principal;
var Principal = (function () {
    function Principal(Identity, AuthenticationType) {
        if (AuthenticationType === void 0) { AuthenticationType = "Generic"; }
        this.Identity = Identity;
        this.AuthenticationType = AuthenticationType;
    }
    Object.defineProperty(Principal.prototype, "IsAuthenticated", {
        get: function () {
            if (this.Identity != null) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Principal;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9JZGVudGl0aWVzL1ByaW5jaXBhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBR0E7a0JBQWUsU0FBUyxDQUFDO0FBRXpCO0lBRUksbUJBQW1CLFFBQW9CLEVBQVMsa0JBQXNDO1FBQTdDLGtDQUE2QyxHQUE3Qyw4QkFBNkM7UUFBbkUsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUFTLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7SUFHdEYsQ0FBQztJQUVELHNCQUFXLHNDQUFlO2FBQTFCO1lBRUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FDMUIsQ0FBQztnQkFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFDRCxJQUFJLENBQ0osQ0FBQztnQkFDRyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUNMLGdCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQSIsImZpbGUiOiJzcmMvSWRlbnRpdGllcy9QcmluY2lwYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVByaW5jaXBhbCBmcm9tICcuL0lQcmluY2lwYWwnO1xyXG5pbXBvcnQgSUlkZW50aXR5IGZyb20gJy4vSUlkZW50aXR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaW5jaXBhbDtcclxuXHJcbmNsYXNzIFByaW5jaXBhbCBpbXBsZW1lbnRzIElQcmluY2lwYWxcclxue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIElkZW50aXR5PyA6SUlkZW50aXR5LCBwdWJsaWMgQXV0aGVudGljYXRpb25UeXBlIDpzdHJpbmcgPSBcIkdlbmVyaWNcIikgXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXQgSXNBdXRoZW50aWNhdGVkKCk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZiAodGhpcy5JZGVudGl0eSAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=
