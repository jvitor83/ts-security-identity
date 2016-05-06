import {IIdentity} from './IIdentity';

//export default Identity;

export class Identity implements IIdentity
{
    private _Claims : Array<{ key: string, value: any }>;
    public get Claims() : Array<{ key: string, value: any }> 
    {
        return this._Claims;
    }
    
    constructor(Claims: Array<{ key: string, value: any }>) 
    {
        this._Claims = Claims;
    }
    
    find<T>(key:string): Array<T>
    {
        let itensFiltrados = this.Claims.filter((item) => item.key === key);
        let valoresFiltrados = itensFiltrados.map((item) => item.value);
        return valoresFiltrados;
    }
    
    findFirst<T>(key:string):T
    {
        let valoresFiltrados = this.find<T>(key);
        let item = valoresFiltrados[0];
        return item;
    }
    
    has(key:string):boolean
    {
        let itensFiltrados = this.Claims.filter((item) => item.key === key);
        if(itensFiltrados !== null)
        {
            if(itensFiltrados.length > -1)
            {
                return true;
            }
        }
        return false;
    }
    
    public get Name() : string 
    {
        let name = this.findFirst<string>('name');
        return name;
    }
}