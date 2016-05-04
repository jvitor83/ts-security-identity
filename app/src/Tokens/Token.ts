import {IToken} from './IToken';

export class Token extends Array<{ key: string, value: any }> implements IToken
{
    // get claims(): Array<{ key: string, value: any }>
    // {
    //     let qualquer = (<any>this);
    //     let retorno:Array<{ key: string, value: any }> = qualquer; 
    //     return retorno;
    // }
    
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
    
    find(key:string): Array<any>
    {
        let itensFiltrados = this.filter((item) => item.key == key);
        let valoresFiltrados = itensFiltrados.map((item) => item.value);
        return valoresFiltrados;
    }
    
    findFirst<T>(key:string):T
    {
        let itensFiltrados = this.filter((item) => item.key == key);
        
        let item = itensFiltrados[0];
        
        return item.value;
    }
    
}