declare module "Identities/IIdentity" {
    export interface IIdentity {
        Claims: Array<{
            key: string;
            value: any;
        }>;
        Name: string;
    }
}
declare module "Identities/IPrincipal" {
    import { IIdentity } from "Identities/IIdentity";
    export class IPrincipal {
        Identity: IIdentity;
        IsAuthenticated: boolean;
        AuthenticationType: string;
    }
}
declare module "Identities/Principal" {
    import { IPrincipal } from "Identities/IPrincipal";
    import { IIdentity } from "Identities/IIdentity";
    export class Principal implements IPrincipal {
        Identity: IIdentity;
        AuthenticationType: string;
        constructor(Identity?: IIdentity, AuthenticationType?: string);
        IsAuthenticated: boolean;
    }
}
declare module "SecurityContext" {
    import { IPrincipal } from "Identities/IPrincipal";
    import { ISecurityContextInitializer } from "ISecurityContextInitializer";
    export class SecurityContext {
        private static _current;
        static Current: SecurityContext;
        static Reset(): void;
        constructor();
        private _Principal;
        Principal: IPrincipal;
        Init(securityContextInitializer: ISecurityContextInitializer): void;
    }
}
declare module "ISecurityContextInitializer" {
    import { SecurityContext } from "SecurityContext";
    export interface ISecurityContextInitializer {
        Initialize(securityContext: SecurityContext): any;
    }
}
declare module "Tokens/IToken" {
    export interface IToken {
    }
}
declare module "Tokens/ITokenHeader" {
    import { IToken } from "Tokens/IToken";
    export interface ITokenHeader extends IToken {
        typ: string;
        alg: string;
        kid: string;
        x5t: string;
    }
}
declare module "Tokens/ITokenContent" {
    import { IToken } from "Tokens/IToken";
    export interface ITokenContent extends IToken {
        iss: string;
        aud: string;
        exp: number;
        nbf: number;
        sub: string;
        auth_time: number;
        idp: string;
        amr: string[];
    }
}
declare module "Tokens/Parsers/ITokenParsed" {
    import { ITokenHeader } from "Tokens/ITokenHeader";
    import { ITokenContent } from "Tokens/ITokenContent";
    export interface ITokenParsed {
        header: string;
        headerJSON: any;
        headerObject<T extends ITokenHeader>(): T;
        content: string;
        contentJSON: any;
        contentObject<T extends ITokenContent>(): T;
        signature: string;
    }
}
declare module "Tokens/Parsers/TokenParsed" {
    import { ITokenParsed } from "Tokens/Parsers/ITokenParsed";
    import { ITokenHeader } from "Tokens/ITokenHeader";
    export class TokenParsed implements ITokenParsed {
        header: string;
        content: string;
        signature: string;
        constructor(header: string, content: string, signature: string);
        headerJSON: any;
        headerObject<T extends ITokenHeader>(): T;
        contentJSON: any;
        contentObject<T extends ITokenHeader>(): T;
    }
}
declare module "Utils/Base64" {
    export class Base64 {
        static chars: string;
        constructor();
        static Encode(value: string): string;
        static Decode(value: string): string;
    }
}
declare module "Tokens/Parsers/TokenParser" {
    import { ITokenParsed } from "Tokens/Parsers/ITokenParsed";
    export class TokenParser {
        token: string;
        static TOKEN_SEPARATOR: string;
        constructor(token: string);
        Parse<T extends ITokenParsed>(): T;
    }
}
declare module "Identities/Identity" {
    import { IIdentity } from "Identities/IIdentity";
    export class Identity implements IIdentity {
        private _Claims;
        Claims: Array<{
            key: string;
            value: any;
        }>;
        constructor(Claims: Array<{
            key: string;
            value: any;
        }>);
        find<T>(key: string): Array<T>;
        findFirst<T>(key: string): T;
        has(key: string): boolean;
        Name: string;
    }
}
declare module "Identities/IdentityFactory" {
    import { IIdentity } from "Identities/IIdentity";
    export abstract class IdentityFactory {
        private static isIIdentity<T>(valor);
        static Create<T extends IIdentity>(userOrUserType?: T | {
            new (Claims: Array<{
                key: string;
                value: any;
            }>): T;
        }, tokens?: any[]): T;
        private static GenerateKeyValuePair(tokens);
    }
}
declare module "SecurityContextEncodedTokenInitializer" {
    import { SecurityContext } from "SecurityContext";
    import { ISecurityContextInitializer } from "ISecurityContextInitializer";
    export class SecurityContextEncodedTokenInitializer implements ISecurityContextInitializer {
        encodedTokens: string[];
        constructor(encodedTokens: string[]);
        Initialize(securityContext: SecurityContext): void;
    }
}
declare module "SecurityContextTokenInitializer" {
    import { SecurityContext } from "SecurityContext";
    export class SecurityContextTokenInitializer implements SecurityContextTokenInitializer {
        tokens: any[];
        constructor(tokens: any[]);
        Initialize(securityContext: SecurityContext): void;
    }
}
declare module "SecurityContextInitializer" {
    import { SecurityContext } from "SecurityContext";
    import { ISecurityContextInitializer } from "ISecurityContextInitializer";
    export abstract class SecurityContextInitializer {
        static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer: {
            new (...args): T;
        }, ...args: any[]): T;
        static InitializeWithTokens(tokens: any[]): SecurityContext;
        static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext;
    }
}
declare module "Tokens/IdentityToken/IIdentityTokenContent" {
    import { ITokenContent } from "Tokens/ITokenContent";
    export interface IIdentityTokenContent extends ITokenContent {
        nonce: string;
        iat: number;
        at_hash: string;
        c_hash: string;
        sid: string;
    }
}
declare module "Tokens/AccessToken/IAccessTokenContent" {
    import { ITokenContent } from "Tokens/ITokenContent";
    export interface IAccessTokenContent extends ITokenContent {
        scope: string[];
    }
}
