import { useState } from "react";

import { ApiError } from '../../domain/ApiError.interface';

export const useProfileApi = () => {

    const [data, setData] = useState<{}>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);



}