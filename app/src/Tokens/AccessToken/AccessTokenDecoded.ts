import {TokenDecoded} from '../TokenDecoded';
import {IAccessTokenContent} from './IAccessTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class AccessTokenDecoded extends TokenDecoded 
{
    public get conteudoObject() : IAccessTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
