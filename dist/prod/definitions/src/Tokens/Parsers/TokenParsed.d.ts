import { ITokenParsed } from './ITokenParsed';
import { ITokenHeader } from '../ITokenHeader';
import { ITokenContent } from '../ITokenContent';
export declare class TokenParsed implements ITokenParsed {
    header: string;
    content: string;
    signature: string;
    constructor(header: string, content: string, signature: string);
    readonly headerJSON: any;
    headerObject<T extends ITokenHeader>(): T;
    readonly contentJSON: any;
    contentObject<T extends ITokenContent>(): T;
}
