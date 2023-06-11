// React
import React from "react";

import { AchievementItem } from "./AchievementItem";

import { Profile } from "../../../../../domain/profile/Profile.interface";
import { UserAchievement } from "../../../../../domain/user/UserAchievement.interface";

/**
 *  Componente de Achievements List para ver los 6 últimos logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsList(props: { data: Profile | undefined }) {
    let obtained: Array<UserAchievement> = [];
    let notObtained: Array<UserAchievement> = [];

    if (props.data?.achievements) {
        obtained = props.data.achievements.filter(elem => elem.progress == 100);
        notObtained = props.data?.achievements
            .filter(elem => elem.progress < 100)
            .sort((elem1, elem2) => {
                return elem2.progress - elem1.progress;
            }
            );
    }

    return (
        <div id="scrollbar" className="w-full flex flex-col items-center py-4 gap-6 bg-white dark:bg-[#28292d] rounded-xl flex-1 px-4 max-[500px]:px-2 max-h-auto">
            <h1 className="text-xl text-black dark:text-white leading-none">Completed</h1>
            {obtained.length > 0 &&
                <div className="w-full flex flex-col gap-3">
                    {obtained.map(achievement => {
                        return (
                            <AchievementItem
                                key={achievement.id}
                                icon={achievement.icon}
                                title={achievement.title}
                                description={achievement.description}
                                percentage={{
                                    type: "progress",
                                    number: parseFloat(achievement.percentage)
                                }}
                            />
                        )
                    })}
                </div>
            }
            <div className="divider my-0 h-fit"/>
            <h1 className="text-xl text-black dark:text-white leading-none">Uncompleted</h1>
            {notObtained.length == 0 &&
                <div className="w-full flex flex-col gap-3">
                    {notObtained.map(achievement => {
                        return (
                            <AchievementItem
                                key={achievement.id}
                                icon={achievement.icon}
                                title={achievement.title}
                                description={achievement.description}
                                percentage={{
                                    type: "progress",
                                    number: parseFloat(achievement.percentage)
                                }}
                            />
                        )
                    })}
                </div>
            }
        </div>
    )
}