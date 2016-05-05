import {ITokenParsed} from './ITokenParsed';
import {ITokenHeader} from '../ITokenHeader';

export class TokenParsed implements ITokenParsed
{
    constructor(public cabecalho:string, public conteudo:string, public assinatura:string) {
        
    }
    
    public get cabecalhoJSON() : any {
        return JSON.parse(this.cabecalho);
    }
    public cabecalhoObject<T extends ITokenHeader>() : T {
        return <T>this.cabecalhoJSON;
    }
    
    public get conteudoJSON() : any {
        return JSON.parse(this.conteudo);
    }
    public conteudoObject<T extends ITokenHeader>() : T {
        return <T>this.conteudoJSON;
    }
}
