import {IPrincipal} from './Identities/IPrincipal';
import {Principal} from './Identities/Principal';
import {Identity} from './Identities/Identity';
import {ISecurityContextInitializer} from './ISecurityContextInitializer';

// export default SecurityContext;

export class SecurityContext {
  private static _current: SecurityContext = null;

  private _Principal: IPrincipal = null;

  public static get Current(): SecurityContext {
    if (SecurityContext._current === null) {
      SecurityContext._current = new SecurityContext();
    }
    return SecurityContext._current;
  }

  public static Reset() {
    SecurityContext._current = null;
  }

  constructor() {
    const identity = new Identity();
    this.Principal = new Principal(identity);
  }

  public get Principal(): IPrincipal {
    return this._Principal;
  }

  public set Principal(value: IPrincipal) {
    this._Principal = value;
  }

  public Init(securityContextInitializer: ISecurityContextInitializer) {
    securityContextInitializer.Initialize(this);
  }
}
