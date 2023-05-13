// React 
import { useState } from 'react';

// Components
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { AchievementItem } from '../components/achievements/AchievementItem';
import { Tabs } from '../components/Tabs';
import { Dropdown } from '../components/Dropdown';
import { Profile } from '../../domain/Profile.interface';
import { useOutletContext } from 'react-router-dom';


export function Achievements() {

    const [tab, setTab] = useState<string>("all");
    const [selectedElement, selectElement] = useState<string>("Order By");

    const data: Profile = useOutletContext();

    return (
        <>

            <AchievementsInfo data={data}  />
            <div className="bg-slate-800 w-3/4 rounded-xl p-4 pt-0 flex flex-col">
                <div className="py-3 flex justify-between items-center">
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-medal" title="Achievements" links={[
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
                    ]}/>
                    <Dropdown selectedElement={selectedElement} selectElement={selectElement} elements={[
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
                    ]}/>
                </div>
                <div className="bg-slate-700 w-full h-full rounded-xl p-4">
                    {/* Foreach */}
                    <AchievementItem tab={tab} orderBy={selectedElement} icon="idkm" title="First Steps" description="Finish 5 tasks" percentage={{
                        type: "progress",
                        number: 40
                    }} />
                    {/* EndForeach */}
                </div>
            </div>

        </>
    )
}