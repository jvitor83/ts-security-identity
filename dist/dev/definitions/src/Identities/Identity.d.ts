import IIdentity from './IIdentity';
export default Identity;
declare class Identity implements IIdentity {
    private _Claims;
    Claims: Array<{
        key: string;
        value: any;
    }>;
    constructor(Claims: Array<{
        key: string;
        value: any;
    }>);
    find<T>(key: string): Array<T>;
    findFirst<T>(key: string): T;
    has(key: string): boolean;
    Name: string;
}
