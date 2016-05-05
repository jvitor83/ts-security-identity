/// <reference path='../../../../typings/main.d.ts' />

import {TokenParser} from '../../../src/Tokens/Parsers/TokenParser';
import {IPjmtIdentityTokenContent} from '../../../src/Tokens/IdentityToken/IPjmtIdentityTokenContent';

describe('IdentityTokenParser', () => {
    let token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL3BqbXRzdHMvIiwiYXVkIjoiMjM4MCIsImV4cCI6MTQ2MTg4MjkzNSwibmJmIjoxNDYxODgyNjM1LCJub25jZSI6IjEyMjMwMjA2NTU5NDkyMDgiLCJpYXQiOjE0NjE4ODI2MzUsImF0X2hhc2giOiIzeV9iSi1oZEZiMjE3VHNpQUVpVnZ3IiwiY19oYXNoIjoibGhMRDFOaTNkcms0aEJKYXBQRUpaQSIsInNpZCI6IjNkMGQzNWYxNGFjYWQ3MzEyM2E2Y2FmMGU5NTY5NGIzIiwic3ViIjoiMTY4NDMiLCJhdXRoX3RpbWUiOjE0NjExNjQ5MzIsImlkcCI6Imlkc3J2IiwiYW1yIjpbInBhc3N3b3JkIl19.hS9vFGcUq6j3CBRsUDm2RG0zwyNbdRijN1L_f7EmX4d5o8Wxh9RaWxPmYUSAGt211lrnp1W0zm7HfWqOu3szJnhCWKfX_P9CYuc-3NyWXxL9iMZM07lzweunJeYrWM99KCWT9il_ptR3cvNBEZPBBHBmzQ5EPbHqMga35U3U0rHTuC1134qvDFE-2YoGyNXxP5KD-pyVlx0hPXOsfv9xYfKr9C31eEMqyyavZWpmiH8Ywz1vlJTMdX6Y9Gm7599Ojqe66mRAaDX7_rf8kecgvkSZD0uozHPGIX-Y8ORPS83AHXTOFOAXoO3hvxnJJ6iN1oVJSzWVsI59VFbvMIawCw";

  // beforeEach(() => {
  // });

  it('should parse a token', () => {
    
    let tokenParser = new TokenParser(token);
    let tokenParsed = tokenParser.Parse();
    
    //let idp = tokenDecoded.cabecalhoObject.typ;
    let sid = tokenParsed.conteudoObject<IPjmtIdentityTokenContent>().sid;
    
    expect(sid).toBe("3d0d35f14acad73123a6caf0e95694b3");
    
    });
});
