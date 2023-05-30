import axios, { AxiosResponse } from 'axios';

import { RequestParams } from '../../domain/RequestParams.interface';

/**
 * Hook para generalizar las peticiones y no repetir tanto código.
 * @param props 
 */
export const useAxios = ( props: RequestParams ): Promise<AxiosResponse> => {
    return axios.request(props);
}

