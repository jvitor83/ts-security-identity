import {IPermissaoObjeto} from './IPermissao';

export interface IIdentity
{
    isAuthenticated :boolean,
    
    nome: string,
    cpf: string;
    email: string;
    id_lotacao: number;
    matricula: number;
    
    client_id: number;
    permissoes: IPermissaoObjeto[];
}