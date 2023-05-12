import { createContext } from 'react';

import { Profile } from '../domain/Profile.interface';

interface ProfileContext {
    profileData: Profile | null,
    setProfileData: (profileData: Profile | null) => void
}

export const ProfileContext = createContext<ProfileContext>({
    profileData: null,
    setProfileData: () => {}
});