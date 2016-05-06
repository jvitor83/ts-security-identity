export interface IIdentity {
    Claims: Array<{
        key: string;
        value: any;
    }>;
    Name: string;
}

import { IIdentity } from './IIdentity';
export declare class IPrincipal {
    Identity: IIdentity;
    IsAuthenticated: boolean;
    AuthenticationType: string;
}

import { IPrincipal } from './IPrincipal';
import { IIdentity } from './IIdentity';
export declare class Principal implements IPrincipal {
    Identity: IIdentity;
    AuthenticationType: string;
    constructor(Identity?: IIdentity, AuthenticationType?: string);
    IsAuthenticated: boolean;
}

/// <reference path="../../typings/main.d.ts" />
import { IPrincipal } from './Identities/IPrincipal';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContext {
    private static _current;
    static Current: SecurityContext;
    static Reset(): void;
    constructor();
    private _Principal;
    Principal: IPrincipal;
    Init(securityContextInitializer: ISecurityContextInitializer): void;
}

import { SecurityContext } from './SecurityContext';
export interface ISecurityContextInitializer {
    Initialize(securityContext: SecurityContext): any;
}

export interface IToken {
}

import { IToken } from './IToken';
export interface ITokenHeader extends IToken {
    typ: string;
    alg: string;
    kid: string;
    x5t: string;
}

import { IToken } from './IToken';
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

import { ITokenHeader } from '../ITokenHeader';
import { ITokenContent } from '../ITokenContent';
export interface ITokenParsed {
    header: string;
    headerJSON: any;
    headerObject<T extends ITokenHeader>(): T;
    content: string;
    contentJSON: any;
    contentObject<T extends ITokenContent>(): T;
    signature: string;
}

import { ITokenParsed } from './ITokenParsed';
import { ITokenHeader } from '../ITokenHeader';
export declare class TokenParsed implements ITokenParsed {
    header: string;
    content: string;
    signature: string;
    constructor(header: string, content: string, signature: string);
    headerJSON: any;
    headerObject<T extends ITokenHeader>(): T;
    contentJSON: any;
    contentObject<T extends ITokenHeader>(): T;
}

export declare class Base64 {
    static chars: string;
    constructor();
    static Encode(value: string): string;
    static Decode(value: string): string;
}

import { ITokenParsed } from './ITokenParsed';
export declare class TokenParser {
    token: string;
    static TOKEN_SEPARATOR: string;
    constructor(token: string);
    Parse<T extends ITokenParsed>(): T;
}

import { IIdentity } from './IIdentity';
export declare class Identity implements IIdentity {
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

import { IIdentity } from './IIdentity';
export declare abstract class IdentityFactory {
    private static isIIdentity<T>(valor);
    static Create<T extends IIdentity>(userOrUserType?: T | {
        new (Claims: Array<{
            key: string;
            value: any;
        }>): T;
    }, tokens?: any[]): T;
    private static GenerateKeyValuePair(tokens);
}

import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContextEncodedTokenInitializer implements ISecurityContextInitializer {
    encodedTokens: string[];
    constructor(encodedTokens: string[]);
    Initialize(securityContext: SecurityContext): void;
}

import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare class SecurityContextTokenInitializer implements ISecurityContextInitializer {
    tokens: any[];
    constructor(tokens: any[]);
    Initialize(securityContext: SecurityContext): void;
}

import { SecurityContext } from './SecurityContext';
import { ISecurityContextInitializer } from './ISecurityContextInitializer';
export declare abstract class SecurityContextInitializer {
    static Create<T extends ISecurityContextInitializer>(typeOfSecurityContextInitializer: {
        new (...args): T;
    }, ...args: any[]): T;
    static InitializeWithTokens(tokens: any[]): SecurityContext;
    static InitializeWithEncodedTokens(encodedTokens: string[]): SecurityContext;
}

import { ITokenContent } from '../ITokenContent';
export interface IAccessTokenContent extends ITokenContent {
    scope: string[];
}

import { ITokenContent } from '../ITokenContent';
export interface IIdentityTokenContent extends ITokenContent {
    nonce: string;
    iat: number;
    at_hash: string;
    c_hash: string;
    sid: string;
}
