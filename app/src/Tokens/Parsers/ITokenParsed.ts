import {ITokenHeader} from '../ITokenHeader';
import {ITokenContent} from '../ITokenContent';

export interface ITokenParsed
{
    cabecalho: string;
    cabecalhoJSON: any;
    cabecalhoObject: ITokenHeader;
    
    conteudo: string;
    conteudoJSON: any;
    conteudoObject: ITokenContent;
    
    assinatura: string;
}
