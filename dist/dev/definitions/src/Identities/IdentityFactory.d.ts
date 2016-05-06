import { IIdentity } from './IIdentity';
export declare abstract class IdentityFactory {
    private static isIIdentity<T>(valor);
    static Create<T extends IIdentity>(userOrUserType?: T | {
        new (Claims: Array<{
            key: string;
            value: any;
        }>): T;
    }, tokens?: any[]): T;
    private static GenerateKeyValuePair(tokens);
}
