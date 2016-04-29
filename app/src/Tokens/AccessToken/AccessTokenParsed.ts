import {TokenParsed} from '../TokenParsed';
import {IAccessTokenContent} from './IAccessTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class AccessTokenParsed extends TokenParsed 
{
    public get conteudoObject() : IAccessTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
