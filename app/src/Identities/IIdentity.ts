// import {IPermissaoObjeto} from './IPermissao';
// export default IIdentity;

export interface IIdentity {
  // new(Claims: Array<{ key: string, value: any }>);
  Claims: Array<{key: string, value: any}>;

  Name: string;

  IsAuthenticated: boolean;
}
