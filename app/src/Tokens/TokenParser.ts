import {TokenParsed} from './TokenParsed';
import {ITokenDecoded} from './ITokenDecoded';

export class TokenParser<T extends TokenParsed>
{
    public constructor(public tokenDecoded :ITokenDecoded) {
        
    }
    
    public Parse<T>(tokenParsedType: { new(cabecalho:string, conteudo:string, assinatura:string): T }):T
    {
        let tokenDecodedInstance = new tokenParsedType(this.tokenDecoded.cabecalho, this.tokenDecoded.conteudo, this.tokenDecoded.assinatura);
        let tokenDecoded:T = tokenDecodedInstance;
        
        return tokenDecoded;
    }
}
