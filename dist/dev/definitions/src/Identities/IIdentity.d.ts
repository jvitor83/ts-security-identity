export default IIdentity;
interface IIdentity {
    Claims: Array<{
        key: string;
        value: any;
    }>;
    Name: string;
}
