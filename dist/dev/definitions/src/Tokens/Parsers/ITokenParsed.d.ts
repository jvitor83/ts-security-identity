import { ITokenHeader } from '../ITokenHeader';
import { ITokenContent } from '../ITokenContent';
export interface ITokenParsed {
    header: string;
    headerJSON: any;
    content: string;
    contentJSON: any;
    signature: string;
    headerObject<T extends ITokenHeader>(): T;
    contentObject<T extends ITokenContent>(): T;
}
