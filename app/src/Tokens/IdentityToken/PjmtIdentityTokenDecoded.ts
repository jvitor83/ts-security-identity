import {IdentityTokenDecoded} from './IdentityTokenDecoded';
import {IPjmtIdentityTokenContent} from './IPjmtIdentityTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class PjmtIdentityTokenDecoded extends IdentityTokenDecoded 
{
    public get conteudoObject() : IPjmtIdentityTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
