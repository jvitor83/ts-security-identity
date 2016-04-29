import {AccessTokenDecoded} from './AccessTokenDecoded';
import {IPjmtAccessTokenContent} from './IPjmtAccessTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class PjmtAccessTokenDecoded extends AccessTokenDecoded 
{
    public get conteudoObject() : IPjmtAccessTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}
