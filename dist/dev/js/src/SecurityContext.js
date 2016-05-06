System.register(['./Identities/Principal'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Principal_1;
    var SecurityContext;
    return {
        setters:[
            function (Principal_1_1) {
                Principal_1 = Principal_1_1;
            }],
        execute: function() {
            class SecurityContext {
                constructor() {
                    this._Principal = {
                        IsAuthenticated: false,
                        Identity: null
                    };
                    this.Principal = new Principal_1.Principal();
                }
                static get Current() {
                    if (SecurityContext._current === null) {
                        SecurityContext._current = new SecurityContext();
                    }
                    return SecurityContext._current;
                }
                static Reset() {
                    SecurityContext._current = null;
                }
                get Principal() {
                    return this._Principal;
                }
                set Principal(value) {
                    this._Principal = value;
                }
                Init(securityContextInitializer) {
                    securityContextInitializer.Initialize(this);
                }
            }
            SecurityContext._current = null;
            exports_1("SecurityContext", SecurityContext);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFLSTtnQkFrQkk7b0JBS1EsZUFBVSxHQUNsQjt3QkFDSSxlQUFlLEVBQUUsS0FBSzt3QkFDdEIsUUFBUSxFQUFFLElBQUk7cUJBQ2pCLENBQUM7b0JBUEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztnQkFDckMsQ0FBQztnQkFqQkQsV0FBa0IsT0FBTztvQkFFckIsRUFBRSxDQUFBLENBQUMsZUFBZSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FDckMsQ0FBQzt3QkFDRyxlQUFlLENBQUMsUUFBUSxHQUFJLElBQUksZUFBZSxFQUFFLENBQUM7b0JBQ3RELENBQUM7b0JBQ0QsTUFBTSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3BDLENBQUM7Z0JBRUQsT0FBYyxLQUFLO29CQUVmLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNwQyxDQUFDO2dCQWFELElBQVcsU0FBUztvQkFFaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsSUFBVyxTQUFTLENBQUMsS0FBaUI7b0JBRWxDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixDQUFDO2dCQUVNLElBQUksQ0FBQywwQkFBdUQ7b0JBRS9ELDBCQUEwQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztZQUNMLENBQUM7WUF6Q2tCLHdCQUFRLEdBQW9CLElBQUksQ0FBQztZQUZwRCw2Q0EyQ0MsQ0FBQSIsImZpbGUiOiJzcmMvU2VjdXJpdHlDb250ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJUHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvSVByaW5jaXBhbCc7XHJcbmltcG9ydCB7UHJpbmNpcGFsfSBmcm9tICcuL0lkZW50aXRpZXMvUHJpbmNpcGFsJztcclxuaW1wb3J0IHtJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJ9IGZyb20gJy4vSVNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyJztcclxuXHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNlY3VyaXR5Q29udGV4dCBcclxuICAgIHtcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBfY3VycmVudDogU2VjdXJpdHlDb250ZXh0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXQgQ3VycmVudCgpOiBTZWN1cml0eUNvbnRleHQgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPT09IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudCA9ICBuZXcgU2VjdXJpdHlDb250ZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFNlY3VyaXR5Q29udGV4dC5fY3VycmVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBSZXNldCgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBTZWN1cml0eUNvbnRleHQuX2N1cnJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuUHJpbmNpcGFsID0gbmV3IFByaW5jaXBhbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfUHJpbmNpcGFsOiBJUHJpbmNpcGFsID0gPGFueT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIElzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIElkZW50aXR5OiBudWxsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIGdldCBQcmluY2lwYWwoKTogSVByaW5jaXBhbCBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9QcmluY2lwYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgc2V0IFByaW5jaXBhbCh2YWx1ZTogSVByaW5jaXBhbCkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLl9QcmluY2lwYWwgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBJbml0KHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyIDpJU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5Jbml0aWFsaXplKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0=
