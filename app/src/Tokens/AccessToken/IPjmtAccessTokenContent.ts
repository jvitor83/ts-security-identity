import {IAccessTokenContent} from './IAccessTokenContent';
//import {IPermissao} from '../../Identity/IPermissao';

export interface IPjmtAccessTokenContent extends IAccessTokenContent
{
    client_id: string;
    //permissoes: Array<{ key: string, value: string | string[]; }>
}
