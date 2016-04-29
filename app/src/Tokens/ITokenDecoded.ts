import {ITokenHeader} from './ITokenHeader';
import {ITokenContent} from './ITokenContent';

export interface ITokenDecoded
{
    cabecalho: string;
    cabecalhoJSON: any;
    cabecalhoObject: ITokenHeader;
    
    conteudo: string;
    conteudoJSON: any;
    conteudoObject: ITokenContent;
    
    assinatura: string;
}
