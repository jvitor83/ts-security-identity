import { Identity } from './Identity';
export declare class OAuthIdentity extends Identity {
    constructor(Claims?: Array<{
        key: string;
        value: any;
    }> | any);
    readonly IsAuthenticated: boolean;
    readonly AccessToken: string;
}
