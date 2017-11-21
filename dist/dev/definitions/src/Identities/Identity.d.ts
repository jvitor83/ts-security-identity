import { IIdentity } from './IIdentity';
export declare class Identity implements IIdentity {
    private isAuthenticated;
    protected _Claims: Array<{
        key: string;
        value: any;
    }>;
    readonly Claims: Array<{
        key: string;
        value: any;
    }>;
    constructor(Claims?: Array<{
        key: string;
        value: any;
    }> | any, isAuthenticated?: boolean);
    find<T>(key: string): Array<T>;
    findFirst<T>(key: string): T;
    has(key: string): boolean;
    readonly Name: string;
    readonly IsAuthenticated: boolean;
}
