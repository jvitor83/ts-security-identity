import { ITokenContent } from '../ITokenContent';
export interface IAccessTokenContent extends ITokenContent {
    scope: string[];
}
