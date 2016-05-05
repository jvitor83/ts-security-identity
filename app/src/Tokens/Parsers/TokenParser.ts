import {ITokenParsed} from './ITokenParsed';
import {TokenParsed} from './TokenParsed';
import {Base64} from '../../Utils/Base64';

export class TokenParser
{
    static TOKEN_SEPARATOR :string = ".";
    
    public constructor(public token :string) {
        
    }
    
    public Parse<T extends ITokenParsed>():T
    {
        let accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);
        
        let encodedHeader = accessTokenSplitted[0];
        let encodedContent = accessTokenSplitted[1];
        let encodedSignature = accessTokenSplitted[2];
        
        let header = Base64.Decode(encodedHeader);
        let content = Base64.Decode(encodedContent);
        let signature = Base64.Decode(encodedSignature);
        
        let tokenParsed = new TokenParsed(header, content, signature);
        return <T>tokenParsed;
    }
}
