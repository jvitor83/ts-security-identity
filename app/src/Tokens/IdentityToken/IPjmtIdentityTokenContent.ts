import {IIdentityTokenContent} from './IIdentityTokenContent';

export interface IPjmtIdentityTokenContent extends IIdentityTokenContent
{
    name: string;
    email: string;
    id_lotacao: string;
    matricula: string;
    cpf: string;
}