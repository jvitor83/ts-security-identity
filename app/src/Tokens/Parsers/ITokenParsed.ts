import {ITokenHeader} from '../ITokenHeader';
import {ITokenContent} from '../ITokenContent';

//export default ITokenParsed;

export interface ITokenParsed
{
    header: string;
    headerJSON: any;
    headerObject<T extends ITokenHeader>(): T;
    
    content: string;
    contentJSON: any;
    contentObject<T extends ITokenContent>(): T;
    
    signature: string;
}
