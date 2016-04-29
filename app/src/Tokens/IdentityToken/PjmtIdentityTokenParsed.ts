import {IdentityTokenParsed} from './IdentityTokenParsed';
import {IPjmtIdentityTokenContent} from './IPjmtIdentityTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class PjmtIdentityTokenParsed extends IdentityTokenParsed 
{
    public get conteudoObject() : IPjmtIdentityTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
