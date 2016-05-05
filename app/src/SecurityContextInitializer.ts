import {SecurityContext} from './SecurityContext';
import {ISecurityContextInitializer} from './ISecurityContextInitializer';

import {SecurityContextTokenInitializer} from './SecurityContextTokenInitializer';

export abstract class SecurityContextInitializer
{
    public static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer :{ new(...args): T }, ...args): T
    {
        let securityContextInitializer = new typeOfSecurityContextInitializer(args);
        let castedSecurityContextInitializer = <T>securityContextInitializer;
        return castedSecurityContextInitializer;
    }
    
    public static InitializeWithTokens(tokens: any[]): SecurityContext
    {
        let securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer, tokens);
        SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext.Current;
    }
    
    public static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext
    {
        let securityContextTokenInitializer = SecurityContextInitializer.Create(SecurityContextTokenInitializer, encodedTokens);
        SecurityContext.Current.Init(securityContextTokenInitializer);
        return SecurityContext.Current;
    }
}