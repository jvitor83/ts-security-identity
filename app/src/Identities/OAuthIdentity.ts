import {Identity} from './Identity';


export class OAuthIdentity extends Identity
{
    constructor(Claims?: Array<{ key: string, value: any }> | any) 
    {
        super(Claims);
    }

    public get IsAuthenticated() : boolean
    {
        let value = this.AccessToken;
        let hasValue = value != null;
        return hasValue;
    }

    public get AccessToken() : string 
    {
        let value = this.findFirst<string>('access_token');
        return value;
    }
}