# ts-security-identity

A lightweight Typescript Security Identity Framework with Platform-Agnostic purposes (slightly based on WIF).

# 1. Getting Started

##  1.1 Installing


```sh
	npm install --save ts-security-identity
```

##  1.2 Initializing

To initialize, is needed to invoke the proper Initialize method.

- With an encoded token: 
```typescript
let encodedAccessToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ...";
let encodedIdentityToken:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ...";
SecurityContextInitializer.InitializeWithEncodedTokens( [ encodedAccessToken, encodedIdentityToken ] );
```

- With an token (any JSON):
```typescript
let token:any = { name: 'João Vitor' };
SecurityContextInitializer.InitializeWithTokens( [ token ] );
```



 ## 2. Authentication
 
 Check if the user is authenticated:
 
 ```typescript
 console.log(SecurityContext.Current.Principal.IsAuthenticated); //false
 SecurityContextInitializer.InitializeWithEncodedTokens( [ "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ..." ] );
 console.log(SecurityContext.Current.Principal.IsAuthenticated); //true
 ```
 
 
 
 ## 3. Identity

  Identity have a property of name Claims with type ``Array<{key:string,value:any}>`` who allow us to check against informations delivered by the tokens.
  
  **Sample:**
```typescript
	let name = SecurityContext.Current.Principal.Identity.Claims.filter((claim) => claim.key === "name")[0].value;
```
  
  - But also, let us tho extend the built-in Identity with aditional static-typed informations:
```typescript
    class CustomizedIdentity extends Identity
    {
        public get ClientId() : string 
        {
            return this.findFirst<string>('client_id');
        }
    }
    
    let customizedIdentity :CustomizedIdentity = new CustomizedIdentity( [{ key: 'client_id', value: '2380' }] );
    SecurityContext.Current.Principal.Identity = customizedIdentity;
```