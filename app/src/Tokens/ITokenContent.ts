import {IToken} from './IToken';

export interface ITokenContent extends IToken
{
    iss: string;
    aud: string;
    exp: number;
    nbf: number;
    sub: string;
    auth_time: number;
    idp: string;
    amr: string[];
}
