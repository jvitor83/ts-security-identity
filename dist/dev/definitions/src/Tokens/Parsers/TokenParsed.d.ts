import ITokenParsed from './ITokenParsed';
import ITokenHeader from '../ITokenHeader';
export default TokenParsed;
declare class TokenParsed implements ITokenParsed {
    header: string;
    content: string;
    signature: string;
    constructor(header: string, content: string, signature: string);
    headerJSON: any;
    headerObject<T extends ITokenHeader>(): T;
    contentJSON: any;
    contentObject<T extends ITokenHeader>(): T;
}
