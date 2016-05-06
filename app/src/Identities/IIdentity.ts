//import {IPermissaoObjeto} from './IPermissao';

export default IIdentity;

interface IIdentity
{
    //new(Claims: Array<{ key: string, value: any }>);
    
    Claims: Array<{ key: string, value: any }>;
    
    Name: string;
    
}