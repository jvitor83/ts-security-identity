import { SecurityContext } from './SecurityContext';
export declare abstract class SecurityContextInitializer {
    static InitializeWithTokens(tokens: any[]): SecurityContext;
    static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext;
}
