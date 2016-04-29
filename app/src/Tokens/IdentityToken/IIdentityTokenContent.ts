import {ITokenContent} from '../ITokenContent';

export interface IIdentityTokenContent extends ITokenContent
{
    nonce: string;
    iat: number;
    at_hash: string;
    c_hash: string;
    sid: string;
}