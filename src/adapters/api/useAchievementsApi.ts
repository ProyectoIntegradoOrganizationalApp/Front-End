// React
import { useEffect, useState } from "react";

// Axios
import { useAxios } from "./useAxios";
import { AxiosHeaders } from 'axios';

// Hooks / Mappers
import { UserAchievementInfoMapper } from "../mappers/Achievement/UserAchievementInfoMapper";
import { useAuth } from "../../hooks/useAuth";

// Interfaces
import { ApiError } from '../../domain/ApiError.interface';
import { RequestParams } from "../../domain/RequestParams.interface";
import { UserAchievementInfo } from "../../domain/achievement/UserAchievementInfo.interface";
import { UserAchievementInfoDTO } from "../../domain/achievement/UserAchievementInfoDTO.interface";

interface UserAchievementResponse {
    total: number,
    achievements: Array<UserAchievementInfoDTO>
}

/**
 * Hook de conexión con la Base de datos para la vista de Profile.
 * @returns 
 */
export const useAchievementsApi = ( fetch: boolean ) => {

    const { user } = useAuth();

    const [data, setData] = useState<Array<UserAchievementInfo>>();
    const [error, setError] = useState<ApiError>();
    const [loading, setLoading] = useState<boolean>(false);

    /**
     *  Efecto que maneja el ciclo de vida de la API
     */
    useEffect(() => {
        // Para así poder usar el hook sin realizar otra query.
        if( fetch ) {
            fetchAchievementData();
        }
    }, [])

    const API = import.meta.env.VITE_API_URL;

    /**
     *  Función que fetchea los datos de los proyectos, se debe de llamar desde un 
     *  efecto, para que el objeto de usuario ya haya cargado.
     */
    const fetchAchievementData = () => {
        setLoading(true);

        /**
         * Props de la petición
         */
        const props: RequestParams = {
            url: `${API}/profile/${user?.id}/achievements`,
            method: "GET",
            headers: new AxiosHeaders({
                "Content-Type": "application/json",
                Authorization: `Bearer ${user?._token}`
            }),
        }
        
        useAxios(props)
            .then( data => handleData(data.data))
            .catch( err => {
                handleData({error: true, message: err});
            })
            .finally(() => {
                setLoading(false);
            });
    }

    /**
     *  Función que maneja los datos que salen de la API.
     *  @param info 
     */
    const handleData = ( info: UserAchievementResponse | ApiError ) => {

        /**
         * Hay Error
         */
        if( info && "error" in info && info.error ) {
            setError(info);
        }
        
        /**
         * Si no hay error
         */
        if( info && "total" in info ) {
            // Quitamos los errores en caso de que los halla
            setError(undefined);

            console.log(info)
            const data: Array<UserAchievementInfo> = UserAchievementInfoMapper.prototype.mapArrayTo(info.achievements);
            data.sort(( elemA, elemB ) => {
                return elemA.percentage + elemB.percentage;
            })
            setData(data);
        }

        setLoading(false);
    }

    return { data, error, loading };

}