// React 
import { useState, useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';

// Axios
import axios from 'axios';

// Hooks/Context
import { AuthContext } from '../../context/AuthContext';

// Components
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { AchievementItem } from '../components/achievements/AchievementItem';
import { Tabs } from '../components/Tabs';
import { Dropdown } from '../components/Dropdown';

// Modelos
import { User } from '../../domain/User.interface';
import { Profile } from '../../domain/Profile.interface';
import { Achievement } from '../../domain/Achievement.interface';
import { UserAchievement } from '../../domain/UserAchievement.interface';
import { AchievementDTO } from '../../domain/DTO/AchievementDTO.interface';
import { AchievementMapper } from '../../domain/mappers/AchievementMapper';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardBox } from '../components/dashboard/DashboardBox';

interface AchievementResponse {
    total: number,
    achievements: Array<AchievementDTO>
}

export function Achievements() {

    const [tab, setTab] = useState<string>("all");
    const [selectedElement, selectElement] = useState<string>("Order By");

    const [achievements, setAchievements] = useState<Array<Achievement>>();
    const [userAchievements, setUserAchievements] = useState<Array<UserAchievement>>();

    const API = import.meta.env.VITE_API_URL;

    const data: Profile = useOutletContext();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Recogemos los logros de la bbdd
        axios.get<AchievementResponse>(`${API}/achievements`, {
            headers: {
                Authorization: `Bearer ${user?._token}`
            }
        }).then(data => {
            const mappedAchievements: Array<Achievement> = AchievementMapper.prototype.mapArrayTo(data.data.achievements);
            setAchievements(mappedAchievements);
        })
    }, []);

    return (
        <>
            <AchievementsInfo
                data={data}
            />
            <div className="bg-slate-800 w-3/4 rounded-xl p-4 pt-0 flex flex-col">
                <div className="py-3 flex justify-between items-center">
                    <Tabs
                        tab={tab}
                        setTab={setTab}
                        icon="fa-solid fa-medal"
                        title="Achievements"
                        links={[
                            {
                                url: "all",
                                name: "All"
                            },
                            {
                                url: "projects",
                                name: "Projects"
                            },
                            {
                                url: "friends",
                                name: "Friends"
                            },
                        ]}
                    />

                    <Dropdown
                        selectedElement={selectedElement}
                        selectElement={selectElement}
                        elements={[
                            {
                                action: "fe",
                                name: "Older"
                            },
                            {
                                action: "fe",
                                name: "Recently"
                            },
                            {
                                action: "fe",
                                name: "Alphabetical"
                            },
                            {
                                action: "fe",
                                name: "Difficulty"
                            }
                        ]}
                    />
                </div>
                <div className="bg-slate-700 w-full h-full rounded-xl p-4">
                    {achievements && tab === "all" ? (
                        achievements.map(ach => {
                            return (
                                <AchievementItem
                                    key={ach.id}
                                    tab={tab}
                                    orderBy={selectedElement}
                                    icon={ach.icon}
                                    title={ach.title}
                                    description={ach.description}
                                    percentage={{
                                        type: "progress",
                                        number: 0
                                    }}
                                />
                            )
                        })

                    ) : tab === "projects" ? (
                        <h1>Projects</h1>
                    ) : (
                        <h1>Soon</h1>
                    )}
                </div>
            </div>
        </>
    )
}