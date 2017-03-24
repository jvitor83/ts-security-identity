import {ITokenContent} from '../ITokenContent';

// export default IAccessTokenContent;

export interface IAccessTokenContent extends ITokenContent {
  scope: string[];
}
