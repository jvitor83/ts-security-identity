import {SecurityContext} from './SecurityContext';
//import {ISecurityContextInitializer} from './ISecurityContextInitializer';

import {SecurityContextTokenInitializer} from './SecurityContextTokenInitializer';
import {SecurityContextEncodedTokenInitializer} from './SecurityContextEncodedTokenInitializer';

//export default SecurityContextInitializer;

export abstract class SecurityContextInitializer
{
    // public static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer :{ new(...args): T }, ...args): T
    // {
    //     let securityContextInitializer = new typeOfSecurityContextInitializer(args);
    //     let castedSecurityContextInitializer = <T>securityContextInitializer;
    //     return castedSecurityContextInitializer;
    // }
    
    public static InitializeWithTokens(tokens: any[]): SecurityContext
    {
        let securityContextInitializer = new SecurityContextTokenInitializer(tokens);
        //let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer, tokens);
        SecurityContext.Current.Init(securityContextInitializer);
        return SecurityContext.Current;
    }
    
    public static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext
    {
        let securityContextInitializer = new SecurityContextEncodedTokenInitializer(encodedTokens);
        //let securityContextInitializer = SecurityContextInitializer.Create(SecurityContextEncodedTokenInitializer, encodedTokens);
        SecurityContext.Current.Init(securityContextInitializer);
        return SecurityContext.Current;
    }
}
