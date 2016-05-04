import {Identity} from './Identity';
import {IPermissaoObjeto} from './IPermissao';

export class PjmtIdentity extends Identity
{
    constructor(Claims: Array<{ key: string, value: any }>) 
    {
        super(Claims);
    }
    
    public get Nome() : string 
    {
        return this.Name;
    }
        
    public get Cpf() : string 
    {
        let valor = this.findFirst<string>('cpf');
        return valor;
    }
    
    public get Email() : string 
    {
        let valor = this.findFirst<string>('email');
        return valor;
    }
    
    public get IDLotacao() : string 
    {
        let valor = this.findFirst<string>('id_lotacao');
        return valor;
    }
    
    public get Matricula() : string 
    {
        let valor = this.findFirst<string>('matricula');
        return valor;
    }
    
    public get ClientID() : string 
    {
        let valor = this.findFirst<string>('client_id');
        return valor;
    }
    
    
    public get Permissoes() : Array<IPermissaoObjeto> 
    {
        let permissoes = new Array<IPermissaoObjeto>();
        
        let claimsFiltered = this.Claims.filter((claim) => 
        {
            let index = claim.key.indexOf('permissao|');
            if(index > -1)
            {
                return true;
            }
            else
            {
                return false;
            }
        });
        
        //TODO: 
        
        return permissoes;
    }
    
    permissoes: IPermissaoObjeto[];
}