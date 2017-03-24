import {ITokenParsed} from './ITokenParsed';
import {TokenParsed} from './TokenParsed';
import {Base64} from '../../Utils/Base64';

// export default TokenParser;

export class TokenParser {
  static TOKEN_SEPARATOR = '.';

  public constructor(public token: string) {

  }

  public Parse<T extends ITokenParsed>(): T {
    const accessTokenSplitted = this.token.split(TokenParser.TOKEN_SEPARATOR);

    const encodedHeader = accessTokenSplitted[0];
    const encodedContent = accessTokenSplitted[1];
    const encodedSignature = accessTokenSplitted[2];

    const header = Base64.Decode(encodedHeader);
    const content = Base64.Decode(encodedContent);
    const signature = Base64.Decode(encodedSignature);

    return <T>new TokenParsed(header, content, signature);
  }
}
