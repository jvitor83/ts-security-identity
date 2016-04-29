import {AccessTokenParsed} from './AccessTokenParsed';
import {IPjmtAccessTokenContent} from './IPjmtAccessTokenContent';
import {Token} from '../Token';
import assign = require('object-assign');

export class PjmtAccessTokenParsed extends AccessTokenParsed 
{
    public get conteudoObject() : IPjmtAccessTokenContent {
        let token = new Token();
        assign(token, this.conteudoJSON);
        return <any>token;
    }
}