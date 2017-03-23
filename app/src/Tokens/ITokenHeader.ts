import {IToken} from './IToken';

// export default ITokenHeader;

export interface ITokenHeader extends {} {
  typ: string;
  alg: string;
  kid: string;
  x5t: string;
}
