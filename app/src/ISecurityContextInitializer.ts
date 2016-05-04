import {SecurityContext} from './SecurityContext'

export interface ISecurityContextInitializer
{
    Initialize(securityContext :SecurityContext);
}