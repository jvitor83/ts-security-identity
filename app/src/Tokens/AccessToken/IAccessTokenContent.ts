import ITokenContent from '../ITokenContent';

export default IAccessTokenContent;

interface IAccessTokenContent extends ITokenContent
{
    scope: string[];
}
