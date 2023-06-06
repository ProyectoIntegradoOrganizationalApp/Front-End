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
import { UserAchievementInfo } from '../../../../domain/achievement/UserAchievementInfo.interface';

export function Achievements() {

    const [tab, setTab] = useState<string>("All");
    const [selectedElement, selectElement] = useState<string>("Order By");

    const API = import.meta.env.VITE_API_URL;

    /** Datos del Usuario */
    const userData: Profile = useOutletContext();

    /** Datos de los achievements en general */
    const { data, error, loading } = useAchievementsApi(true);

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
                                url: "",
                                name: "All"
                            },
                            {
                                url: "",
                                name: "Projects"
                            },
                            {
                                url: "",
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
                <div className="flex flex-col gap-6 bg-white dark:bg-slate-700 w-full h-full rounded-xl p-4">
                    { data && tab === "All" ? (
                        data.map( ach => {
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
                                        number: ach.percentage
                                    }}
                                />
                            )
                        })
                    ): data && tab === "Projects" ? (
                        //.filter antes del map para filtar las categorías
                        data.filter(( elem: UserAchievementInfo ) => elem.category === 'project' )
                            .map( ach => {    
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
                                            number: ach.percentage
                                        }}
                                    />
                                )
                            })
                    ): data && tab === "Friends" ? (
                        data.filter(( elem: UserAchievementInfo ) => elem.category === 'friend' )
                            .map( ach => {
                                return(
                                    <AchievementItem
                                        key={ach.id}
                                        tab={tab}
                                        orderBy={selectedElement}
                                        icon={ach.icon}
                                        title={ach.title}
                                        description={ach.description}
                                        percentage={{
                                            type: "progress",
                                            number: ach.percentage
                                        }}
                                    />
                                )
                            })
                    ): (
                        <h1>Soon</h1>
                    )}
                </div>
            </div>
        </div>
    )
}