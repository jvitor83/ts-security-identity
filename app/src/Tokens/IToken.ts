export interface IToken
{
    claims: Array<{ key: string, value: any }>;
    has(value:string):boolean;
    findFirst<T>(value:string):T;
}