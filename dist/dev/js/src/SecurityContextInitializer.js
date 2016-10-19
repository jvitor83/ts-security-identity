(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", './SecurityContext', './SecurityContextTokenInitializer', './SecurityContextEncodedTokenInitializer'], factory);
    }
})(function (require, exports) {
    "use strict";
    var SecurityContext_1 = require('./SecurityContext');
    //import {ISecurityContextInitializer} from './ISecurityContextInitializer';
    var SecurityContextTokenInitializer_1 = require('./SecurityContextTokenInitializer');
    var SecurityContextEncodedTokenInitializer_1 = require('./SecurityContextEncodedTokenInitializer');
    //export default SecurityContextInitializer;
    var SecurityContextInitializer = (function () {
        function SecurityContextInitializer() {
        }
        // public static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer :{ new(...args): T }, ...args): T
        // {
        //     let securityContextInitializer = new typeOfSecurityContextInitializer(args);
        //     let castedSecurityContextInitializer = <T>securityContextInitializer;
        //     return castedSecurityContextInitializer;
        // }
        SecurityContextInitializer.InitializeWithTokens = function (tokens) {
            var securityContextInitializer = new SecurityContextTokenInitializer_1.SecurityContextTokenInitializer(tokens);
            //let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer, tokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        SecurityContextInitializer.InitializeWithEncodedTokens = function (encodedTokens) {
            var securityContextInitializer = new SecurityContextEncodedTokenInitializer_1.SecurityContextEncodedTokenInitializer(encodedTokens);
            //let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextEncodedTokenInitializer, encodedTokens);
            SecurityContext_1.SecurityContext.Current.Init(securityContextInitializer);
            return SecurityContext_1.SecurityContext.Current;
        };
        return SecurityContextInitializer;
    }());
    exports.SecurityContextInitializer = SecurityContextInitializer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9TZWN1cml0eUNvbnRleHRJbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFBQSxnQ0FBOEIsbUJBQW1CLENBQUMsQ0FBQTtJQUNsRCw0RUFBNEU7SUFFNUUsZ0RBQThDLG1DQUFtQyxDQUFDLENBQUE7SUFDbEYsdURBQXFELDBDQUEwQyxDQUFDLENBQUE7SUFFaEcsNENBQTRDO0lBRTVDO1FBQUE7UUF3QkEsQ0FBQztRQXRCRyxpSUFBaUk7UUFDakksSUFBSTtRQUNKLG1GQUFtRjtRQUNuRiw0RUFBNEU7UUFDNUUsK0NBQStDO1FBQy9DLElBQUk7UUFFVSwrQ0FBb0IsR0FBbEMsVUFBbUMsTUFBYTtZQUU1QyxJQUFJLDBCQUEwQixHQUFHLElBQUksaUVBQStCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0UsOEdBQThHO1lBQzlHLGlDQUFlLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLE9BQU8sQ0FBQztRQUNuQyxDQUFDO1FBRWEsc0RBQTJCLEdBQXpDLFVBQTBDLGFBQXVCO1lBRTdELElBQUksMEJBQTBCLEdBQUcsSUFBSSwrRUFBc0MsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMzRiw0SEFBNEg7WUFDNUgsaUNBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDekQsTUFBTSxDQUFDLGlDQUFlLENBQUMsT0FBTyxDQUFDO1FBQ25DLENBQUM7UUFDTCxpQ0FBQztJQUFELENBeEJBLEFBd0JDLElBQUE7SUF4QnFCLGtDQUEwQiw2QkF3Qi9DLENBQUEiLCJmaWxlIjoic3JjL1NlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWN1cml0eUNvbnRleHR9IGZyb20gJy4vU2VjdXJpdHlDb250ZXh0JztcclxuLy9pbXBvcnQge0lTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcn0gZnJvbSAnLi9JU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXInO1xyXG5cclxuaW1wb3J0IHtTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXInO1xyXG5pbXBvcnQge1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyfSBmcm9tICcuL1NlY3VyaXR5Q29udGV4dEVuY29kZWRUb2tlbkluaXRpYWxpemVyJztcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXJcclxue1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBDcmVhdGU8VCBleHRlbmRzIElTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcj4odHlwZU9mU2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgOnsgbmV3KC4uLmFyZ3MpOiBUIH0sIC4uLmFyZ3MpOiBUXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IHR5cGVPZlNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyKGFyZ3MpO1xyXG4gICAgLy8gICAgIGxldCBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IDxUPnNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyO1xyXG4gICAgLy8gICAgIHJldHVybiBjYXN0ZWRTZWN1cml0eUNvbnRleHRJbml0aWFsaXplcjtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aFRva2Vucyh0b2tlbnM6IGFueVtdKTogU2VjdXJpdHlDb250ZXh0XHJcbiAgICB7XHJcbiAgICAgICAgbGV0IHNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyID0gbmV3IFNlY3VyaXR5Q29udGV4dFRva2VuSW5pdGlhbGl6ZXIodG9rZW5zKTtcclxuICAgICAgICAvL2xldCBzZWN1cml0eUNvbnRleHRJbml0aWFsaXplciA9IFNlY3VyaXR5Q29udGV4dEluaXRpYWxpemVyLkNyZWF0ZShTZWN1cml0eUNvbnRleHRUb2tlbkluaXRpYWxpemVyLCB0b2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHN0YXRpYyBJbml0aWFsaXplV2l0aEVuY29kZWRUb2tlbnMoZW5jb2RlZFRva2Vuczogc3RyaW5nW10pOiBTZWN1cml0eUNvbnRleHRcclxuICAgIHtcclxuICAgICAgICBsZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBuZXcgU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIoZW5jb2RlZFRva2Vucyk7XHJcbiAgICAgICAgLy9sZXQgc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIgPSBTZWN1cml0eUNvbnRleHRJbml0aWFsaXplci5DcmVhdGUoU2VjdXJpdHlDb250ZXh0RW5jb2RlZFRva2VuSW5pdGlhbGl6ZXIsIGVuY29kZWRUb2tlbnMpO1xyXG4gICAgICAgIFNlY3VyaXR5Q29udGV4dC5DdXJyZW50LkluaXQoc2VjdXJpdHlDb250ZXh0SW5pdGlhbGl6ZXIpO1xyXG4gICAgICAgIHJldHVybiBTZWN1cml0eUNvbnRleHQuQ3VycmVudDtcclxuICAgIH1cclxufVxyXG4iXX0=
