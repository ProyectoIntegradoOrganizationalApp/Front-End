import { useContext } from "react";

import { ProfileContext } from "../../context/ProfileContext";
import { Profile } from "../../domain/Profile.interface";

export const useProfile = () => {

     const { profileData, setProfileData } = useContext(ProfileContext);

    /**
     * Añadimos los datos al estado del contexto
     * @param data 
     */
    const setData = ( data: Profile ) => {
        setProfileData(data);
    }

    /**
     * Eliminamos los datos del estado del contexto
     * @param profileData 
     */
    const removeData = () => {
        setProfileData(null);
    }

    /**
     * Devolvemos los datos del contexto y las funciones para 
     * alterar esos datos.
     */
    return { profileData, setData, removeData };

}