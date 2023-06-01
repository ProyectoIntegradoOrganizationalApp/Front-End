// React 
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

// Components
import { AchievementsInfo } from './components/AchievementsInfo';
import { AchievementItem } from './components/AchievementItem';
import { Tabs } from '../../../../components/Tabs';
import { Dropdown } from '../../../../components/Dropdown';

// Modelos
import { Profile } from '../../../../domain/profile/Profile.interface';
import { useAchievementsApi } from '../../../../adapters/api/useAchievementsApi';

export function Achievements() {

    const [tab, setTab] = useState<string>("all");
    const [selectedElement, selectElement] = useState<string>("Order By");

    const API = import.meta.env.VITE_API_URL;

    /** Datos del Usuario */
    const userData: Profile = useOutletContext();

    return (
        <div className="w-full flex flex-wrap gap-4 max-[500px]:gap-2">
            <AchievementsInfo
                data={userData}
            />
            <div className="bg-gray-200 dark:bg-slate-800 flex-1 basis-[820px] h-full min-[500px]:rounded-xl flex flex-col w-full p-4 pt-0">
                <div className="py-3 flex flex-wrap-reverse justify-between items-center gap-2">
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
                    <div className="max-[499px]:flex-1">
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
                </div>
                <div className="bg-white dark:bg-slate-700 w-full h-full rounded-xl p-4">
                    { userData?.achievements && tab === "all" ? (
                        userData?.achievements.map( ach => {
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

                    ) : userData?.achievements && tab === "projects" ? (
                        //.filter antes del map para filtar las categorías
                        userData?.achievements.map( ach => {    
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
                    ) : (
                        <h1>Soon</h1>
                    )}
                </div>
            </div>
        </div>
    )
}