import {IIdentity} from './IIdentity';

//export default Identity;

export class Identity implements IIdentity
{ 
    protected _Claims : Array<{ key: string, value: any }>;
    public get Claims() : Array<{ key: string, value: any }> 
    {
        return this._Claims;
    }
    
    constructor(Claims?: Array<{ key: string, value: any }> | any, private isAuthenticated = true) 
    {
        if(Claims != null)
        {
            if(Array.isArray(Claims))
            {
                this._Claims = Claims; 
            }
            else if(typeof Claims === 'object')
            {
                let arrayClaims = new Array<{ key: string, value: any }>();
                for(let claim in Claims) 
                {
                    arrayClaims.push( { key : claim, value : Claims[claim] } );
                }
                this._Claims = arrayClaims;
            }
        }
        else
        {
            this.isAuthenticated = false;
            let arrayClaims = new Array<{ key: string, value: any }>();
            this._Claims = arrayClaims;
        }

        
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
        let containItem = this.Claims.some((item) => item.key === key);
        return containItem;
    }
    
    public get Name() : string 
    {
        let name = this.findFirst<string>('name');
        return name;
    }

    public get IsAuthenticated() : boolean
    {
        return this.isAuthenticated;
        // let containsAccessToken = this.Claims.some(claim => claim.key === 'access_token');
        // return containsAccessToken;
    }
}