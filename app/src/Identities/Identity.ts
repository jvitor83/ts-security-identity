import {IIdentity} from './IIdentity';

// export default Identity;

export class Identity implements IIdentity {
  protected _Claims: Array<{key: string, value: any}>;
  public get Claims(): Array<{key: string, value: any}> {
    return this._Claims;
  }

  constructor(Claims?: Array<{key: string, value: any}> | any, private isAuthenticated = true) {
    if (Claims != null) {
      if (Array.isArray(Claims)) {
        this._Claims = Claims;
      } else if (typeof Claims === 'object') {
        const arrayClaims = new Array<{key: string, value: any}>();
        for (const claim of Object.keys(Claims)) {
          arrayClaims.push({key: claim, value: Claims[claim]});
        }
        this._Claims = arrayClaims;
      }
    } else {
      this.isAuthenticated = false;
      this._Claims = new Array<{key: string, value: any}>();
    }
  }

  find<T>(key: string): Array<T> {
    const itensFiltrados = this.Claims.filter((item) => item.key === key);
    return itensFiltrados.map((item) => item.value);
  }

  findFirst<T>(key: string): T {
    const valoresFiltrados = this.find<T>(key);
    return valoresFiltrados[0];
  }

  has(key: string): boolean {
    return this.Claims.some((item) => item.key === key);
  }

  public get Name(): string {
    return this.findFirst<string>('name');
  }

  public get IsAuthenticated(): boolean {
    return this.isAuthenticated;
    // let containsAccessToken = this.Claims.some(claim => claim.key === 'access_token');
    // return containsAccessToken;
  }
}
