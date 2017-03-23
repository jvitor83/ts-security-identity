import {SecurityContext} from './SecurityContext';
import {ISecurityContextInitializer} from './ISecurityContextInitializer';
import {TokenParser} from './Tokens/Parsers/TokenParser';
import {IdentityFactory} from './Identities/IdentityFactory';
import {Identity} from './Identities/Identity';

// export default SecurityContextEncodedTokenInitializer;

export class SecurityContextEncodedTokenInitializer implements ISecurityContextInitializer {
  constructor(public encodedTokens: string[]) {

  }

  public Initialize(securityContext: SecurityContext) {
    const decodedTokensContent = this.encodedTokens.map((encodedToken) => {
      const tokenParser = new TokenParser(encodedToken);
      const tokenParsed = tokenParser.Parse();
      return tokenParsed.contentJSON;
    });
    securityContext.Principal.Identity = IdentityFactory.Create(Identity, decodedTokensContent);
  }
}
