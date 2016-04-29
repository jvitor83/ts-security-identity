import {IToken} from './IToken';

export class Token extends Array<{ key: string, value: any }> implements IToken
{
    get claims(): Array<{ key: string, value: any }>
    {
        let qualquer = (<any>this);
        let retorno:Array<{ key: string, value: any }> = qualquer; 
        return retorno;
    }
    
    has(key:string):boolean
    {
        let itensFiltrados = this.filter((item) => item.key == key);
        
        if(itensFiltrados != null)
        {
            if(itensFiltrados.length > -1)
            {
                return true;
            }
        }
        
        return false;
    }
    
    findFirst<T>(key:string):T
    {
        let itensFiltrados = this.filter((item) => item.key == key);
        
        let item = itensFiltrados[0];
        
        return item.value;
        //var itensValores = itensFiltrados.map((item) => item.value);
        //return itensValores;
    }
    
    
    // has(value:string):boolean
    // {
    //     this.claims.indexOf({key:''});
        
        
    //     let has = false;
        
    //     let jsonToken = (<any>this);
        
    //     if (typeof(jsonToken.attribute) !== 'undefined' && jsonToken.attribute !== null) {
    //         has = true;
    //     }
        
    //     return has;
    // }
    
    // find<T>(value:string):T
    // {
    //     let retorno:T = null;
                
    //     let jsonToken = (<any>this);
    //     retorno = jsonToken[value];
        
    //     return retorno;
    // }
}