import ITokenParsed from './ITokenParsed';
export default TokenParser;
declare class TokenParser {
    token: string;
    static TOKEN_SEPARATOR: string;
    constructor(token: string);
    Parse<T extends ITokenParsed>(): T;
}
