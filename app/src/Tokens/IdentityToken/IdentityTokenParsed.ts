import {TokenParsed} from '../Parsers/TokenParsed';
import {IIdentityTokenContent} from './IIdentityTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class IdentityTokenParsed extends TokenParsed 
{
    public get conteudoObject() : IIdentityTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
