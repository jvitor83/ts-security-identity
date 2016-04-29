///<reference path='../../typings/main.d.ts'/>
import {TokenDecoder} from './Tokens/TokenDecoder';
import {PjmtAccessTokenParsed} from './Tokens/AccessToken/PjmtAccessTokenParsed';
import {PjmtIdentityTokenParsed} from './Tokens/IdentityToken/PjmtIdentityTokenParsed';
import {TokenParser} from './Tokens/TokenParser';
import {IdentityFactory} from './Identity/IdentityFactory';
import {IIdentity} from './Identity/IIdentity';




// export namespace PJMT.Security
// {
export class SecurityContext {
    private static _current: SecurityContext = null;

    public static get Current(): SecurityContext {
        if(SecurityContext._current === null){
            SecurityContext._current =  new SecurityContext();
        }
        return SecurityContext._current;
    }

    public static Reset()
    {
        SecurityContext._current = null;
    }

    private _User: IIdentity = <any>
    {
        nome: 'Anônimo',
        isAuthenticated: false
    }

    public get User(): IIdentity {
        return this._User;
    }

    public set User(value: IIdentity) {
        this._User = value;
    }

    public Init(accessToken: string, identityToken?: string) {

        let accessTokenDecoder = new TokenDecoder(accessToken);
        let accessTokenDecoded = accessTokenDecoder.Decode();

        let accessTokenParser = new TokenParser(accessTokenDecoded);
        let accessTokenParsed: PjmtAccessTokenParsed = accessTokenParser.Parse(PjmtAccessTokenParsed);

        //if is informed the identity token, then should use this as well
        let identityTokenParsed: PjmtIdentityTokenParsed = null;
        if (identityToken != null) {
            let identityTokenDecoder = new TokenDecoder(identityToken);
            let identityTokenDecoded = identityTokenDecoder.Decode();

            let identityTokenParser = new TokenParser(identityTokenDecoded);
            identityTokenParsed = identityTokenParser.Parse(PjmtIdentityTokenParsed);
        }

        let accessTokenContent = accessTokenParsed.conteudoObject;
        let identityTokenContent = identityTokenParsed.conteudoObject;

        let user = this.User;
        let userCreated = IdentityFactory.Create(user, accessTokenContent, identityTokenContent);
        
        this.User = userCreated;

    }

}
//}
