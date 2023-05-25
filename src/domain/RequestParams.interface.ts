import { AxiosHeaders } from "axios";

export interface RequestParams {
    url: string,
    method: string,
    headers: AxiosHeaders,
    data?: any,
}