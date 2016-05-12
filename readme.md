# ts-security-identity

A lightweight Typescript Security Identity Framework with Platform-Agnostic purposes (slightly based on WIF).

# 1. Getting Started

##  1.1 Installing

Install package from using npm
```sh
	npm install --save ts-security-identity
```

##  1.2 Build

Configure your build system to copy the .js files from `ts-security-identity/dist/prod/js/src/**/*.js` to your `dist/vendor/ts-security-identity` folder. 


## 1.3 Configuring

Recommendation to use [SystemJS](https://github.com/systemjs/systemjs) to load the package at runtime. 
```javascript
System.config({ 
  map: {
    'ts-security-identity': 'vendor/ts-security-identity/dist/prod/js/src/'
  },
  packages: {
    'ts-security-identity': {
      main: 'index.js'
    }
  }
 });
```


# 2. Using

##  2.1 Initializing

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


##  2.2 Authentication
 
 Check if the user is authenticated:
 
 ```typescript
 console.log(SecurityContext.Current.Principal.IsAuthenticated); //false
 SecurityContextInitializer.InitializeWithEncodedTokens( [ "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6ImEzck1VZ..." ] );
 console.log(SecurityContext.Current.Principal.IsAuthenticated); //true
 ```
 
 
 
##  2.3  Identity

  Identity have a property named Claims of type ``Array<{key:string,value:any}>`` who allow us to check against informations delivered by the tokens.
  
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
    console.log(customizedIdentity.ClientId); // '2380'
    SecurityContext.Current.Principal.Identity = customizedIdentity;
```