import {IIdentity} from './IIdentity';

// export default IPrincipal;

export class IPrincipal {

  Identity: IIdentity;

  IsAuthenticated: boolean;
  AuthenticationType: string;
}
