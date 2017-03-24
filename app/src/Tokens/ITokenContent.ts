//import {IToken} from './IToken';

// export default ITokenContent;

export interface ITokenContent {
  iss: string;
  aud: string;
  exp: number;
  nbf: number;
  sub: string;
  auth_time: number;
  idp: string;
  amr: string[];
}
