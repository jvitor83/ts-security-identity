import {Identity} from './Identity';

export class OAuthIdentity extends Identity {
  constructor(Claims?: Array<{key: string, value: any}> | any) {
    super(Claims);
  }

  public get IsAuthenticated(): boolean {
    const value = this.AccessToken;
    return value != null;
  }

  public get AccessToken(): string {
    return this.findFirst<string>('access_token');
  }
}
