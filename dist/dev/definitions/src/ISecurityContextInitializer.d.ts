import SecurityContext from './SecurityContext';
export default ISecurityContextInitializer;
interface ISecurityContextInitializer {
    Initialize(securityContext: SecurityContext): any;
}
