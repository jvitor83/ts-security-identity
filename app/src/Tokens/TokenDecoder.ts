import {TokenDecoded} from './TokenDecoded';
import {ITokenDecoded} from './ITokenDecoded';
import {Base64} from '../Utils/Base64';

export class TokenDecoder<T extends TokenDecoded>
{
    static TOKEN_SEPARATOR :string = ".";
    
    public constructor(public token :string) {
        
    }
    
    public Decode<T>(tokenDecodedType: {new(cabecalho:string, conteudo:string, assinatura:string): T }):T
    {
        let accessTokenSplitted = this.token.split(TokenDecoder.TOKEN_SEPARATOR);
        
        let encodedHeader = accessTokenSplitted[0];
        let encodedContent = accessTokenSplitted[1];
        let encodedSignature = accessTokenSplitted[2];
        
        let header = Base64.Decode(encodedHeader);
        let content = Base64.Decode(encodedContent);
        let signature = Base64.Decode(encodedSignature);
        
        let tokenDecodedInstance = new tokenDecodedType(header, content, signature);
        let tokenDecoded:T = tokenDecodedInstance;
        
        console.log(tokenDecoded);
        
        return tokenDecoded;
    }
}
