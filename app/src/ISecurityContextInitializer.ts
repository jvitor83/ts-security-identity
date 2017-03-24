import {SecurityContext} from './SecurityContext';

// export default ISecurityContextInitializer;

export interface ISecurityContextInitializer {
  Initialize(securityContext: SecurityContext);
}
