//import {IPermissaoObjeto} from './IPermissao';

    export interface IIdentity
    {
        //new(Claims: Array<{ key: string, value: any }>);
        
        Claims: Array<{ key: string, value: any }>;
        
        Name: string;
        
    }