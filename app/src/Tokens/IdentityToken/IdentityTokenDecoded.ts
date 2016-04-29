import {TokenDecoded} from '../TokenDecoded';
import {IIdentityTokenContent} from './IIdentityTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class IdentityTokenDecoded extends TokenDecoded 
{
    public get conteudoObject() : IIdentityTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
