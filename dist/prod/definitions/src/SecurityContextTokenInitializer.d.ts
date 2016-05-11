import { SecurityContext } from './SecurityContext';
export declare class SecurityContextTokenInitializer implements SecurityContextTokenInitializer {
    tokens: any[];
    constructor(tokens: any[]);
    Initialize(securityContext: SecurityContext): void;
}
