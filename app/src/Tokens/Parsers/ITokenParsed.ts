import {ITokenHeader} from '../ITokenHeader';
import {ITokenContent} from '../ITokenContent';

export interface ITokenParsed
{
    cabecalho: string;
    cabecalhoJSON: any;
    cabecalhoObject<T extends ITokenHeader>(): T;
    
    conteudo: string;
    conteudoJSON: any;
    conteudoObject<T extends ITokenContent>(): T;
    
    assinatura: string;
}
