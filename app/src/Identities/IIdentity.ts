export interface IIdentity {
    Claims: Array<{ key: string, value: any }>;

    Name: string;

    IsAuthenticated: boolean;
}
