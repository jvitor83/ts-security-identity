import {ITokenParsed} from './ITokenParsed';
import {ITokenHeader} from '../ITokenHeader';

// export default TokenParsed;

export class TokenParsed implements ITokenParsed {
  constructor(public header: string, public content: string, public signature: string) {

  }

  public get headerJSON(): any {
    return JSON.parse(this.header);
  }

  public headerObject<T extends ITokenHeader>(): T {
    return <T>this.headerJSON;
  }

  public get contentJSON(): any {
    return JSON.parse(this.content);
  }

  public contentObject<T extends ITokenHeader>(): T {
    return <T>this.contentJSON;
  }
}
