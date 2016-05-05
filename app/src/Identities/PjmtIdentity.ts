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
        let permissoes = this.Claims.map((claim) => 
        {
            let key = claim.key;
            let data = claim.value;
            let match = /^permissao\|(.*?)(:(.*))?$/g.exec(key);
            
            let sistemaId = match[1];
		    //let isObjeto = match[2] != null;
            let chave = match[3] || "*"; 
            
            
            data = data instanceof Array ? data : [data];
            
            let valor :Array<any> = data;
		
            let retorno :IPermissaoObjeto = 
            {
                id_sistema: sistemaId,
                objeto: chave,
                permissoes: valor
            };
            
            return retorno;
        });
        
        return permissoes;
    }
    
}