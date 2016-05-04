import {ITokenParsed} from './ITokenParsed';
import {ITokenHeader} from '../ITokenHeader';
import {ITokenContent} from '../ITokenContent';
import {Token} from '../Token';
//import * as assign from 'object-assign';
import assign = require('object-assign');

export abstract class TokenParsed implements ITokenParsed
{
    constructor(public cabecalho:string, public conteudo:string, public assinatura:string) {
        
    }
    
    public get cabecalhoJSON() : any {
        return JSON.parse(this.cabecalho);
    }
    public get cabecalhoObject() : ITokenHeader {
        let token = new Token();
        assign(token, this.cabecalhoJSON);
        return <any>token;
    }
    
    
    public get conteudoJSON() : any {
        return JSON.parse(this.conteudo);
    }
    public get conteudoObject() : ITokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}