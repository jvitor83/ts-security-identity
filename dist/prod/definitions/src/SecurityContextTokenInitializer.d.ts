import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContextTokenInitializer implements ISecurityContextInitializer {
    tokens: any[];
    constructor(tokens: any[]);
    Initialize(securityContext: SecurityContext): void;
}
