import {IIdentity} from './IIdentity';
import {Identity} from './Identity';

// export default IdentityFactory;

export abstract class IdentityFactory {

  private static isIIdentity<T extends IIdentity>(valor: IIdentity | {
    new(Claims: Array<{key: string, value: any}>): T
  }): valor is IIdentity {
    return (<IIdentity>valor).Claims !== undefined;
  }

  public static Create<T extends IIdentity>(userOrUserType?: T | {
    new(Claims: Array<{key: string, value: any}>): T
  }, tokens?: any[]): T {
    tokens = tokens instanceof Array ? tokens : [tokens];

    const keyValuePairArray = IdentityFactory.GenerateKeyValuePair(tokens);

    let identity: IIdentity = null;
    if (userOrUserType == null) {
      identity = new Identity(keyValuePairArray);
    } else {
      if (IdentityFactory.isIIdentity(userOrUserType)) {
        identity = userOrUserType;

        keyValuePairArray.forEach((keyValuePair) => {
          identity.Claims.push(keyValuePair);
        });
      } else {
        identity = new userOrUserType(keyValuePairArray);
      }
    }

    return <T>identity;
  }

  private static GenerateKeyValuePair(tokens: any[]): Array<{key: string, value: any}> {
    tokens = tokens instanceof Array ? tokens : [tokens];

    const keyValuePairArray: Array<{key: string, value: any}> = new Array<{key: string, value: any}>();

    tokens.forEach((token) => {
      for (const chave of Object.keys(token)) {
        if (token.hasOwnProperty(chave)) {
          const valor = token[chave];
          const novoItem = {
            key: chave,
            value: valor
          };

          if (token instanceof Array) {
            keyValuePairArray.push(valor);
          } else {
            keyValuePairArray.push(novoItem);
          }
        }
      }
    });

    return keyValuePairArray;
  }
}

