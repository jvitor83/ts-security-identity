import {IPermissaoObjeto} from './IPermissao';

export interface IIdentity
{
    nome: string,
    cpf: string;
    email: string;
    id_lotacao: number;
    matricula: number;
    
    client_id: number;
    permissoes: IPermissaoObjeto[];
}