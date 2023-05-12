import { useContext } from "react";

import { ProfileContext } from "../../context/ProfileContext";
import { useAuth } from "./useAuth";

export const useProfile = () => {

    const { user } = useAuth();
    const { profileData, setProfileData } = useContext(ProfileContext);

    

}