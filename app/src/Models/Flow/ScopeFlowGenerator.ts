import {Flow} from './Flow';

export class ResponseTypeFlowGenerator
{
    public static GenerateString(flow: Flow) 
    {
        let scope = null;
        switch (flow)
        {
            case Flow.Authorization_Code:
                scope = "id_token token";
            break;
            case Flow.Authorization_Code:
                scope = "code";
            break;
            case Flow.Hybrid:
            default: 
                scope = "code id_token token";
            break;
        }
        return scope;
    }
}
