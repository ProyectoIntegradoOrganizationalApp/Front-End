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
export function AchievementsList( props: { data: Profile | undefined } ) {
    let obtained: Array<UserAchievement> = [];
    let notObtained: Array<UserAchievement> = [];

    if( props.data?.achievements ) {
        obtained = props.data.achievements.filter( elem => elem.progress == 100);
        notObtained = props.data?.achievements
            .filter(elem => elem.progress < 100)
            .sort( (elem1, elem2) => {
                return elem2.progress - elem1.progress;
            }
        );
    }
    
    return (
        <div className="w-full flex flex-col items-center gap-4">
            <h1 className="text-2xl">Completed</h1>
            { obtained.map( achievement => {
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
            <div className="divider"/>
            <h1 className="text-2xl">Uncompleted</h1>
            { notObtained.map( achievement => {
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
    )
}