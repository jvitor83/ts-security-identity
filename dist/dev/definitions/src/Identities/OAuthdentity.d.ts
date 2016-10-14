import { Identity } from './Identity';
export declare class OAuthIdentity extends Identity {
    constructor(Claims?: Array<{
        key: string;
        value: any;
    }> | any);
    IsAuthenticated: boolean;
}
