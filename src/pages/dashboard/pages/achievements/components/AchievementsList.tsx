// React
import React, { useEffect, useState } from "react";

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

    const [obtained, setObtained] = useState<UserAchievement[]>();
    const [unobtained, setUnobtained] = useState<UserAchievement[]>();

    useEffect(() => {
        if (props.data?.achievements) {

            let obtenidos = []
            let noObtenidos = []

            for ( let achievement of props.data.achievements ) {
    
                if( achievement.completed ) {
                    obtenidos.push(achievement);
                    continue;
                }
    
                if( !achievement.completed ) {
                    noObtenidos.push(achievement);
                }
    
            }

            obtenidos.sort(( ach1, ach2 ) => parseFloat(ach2.percentage) - parseFloat(ach1.percentage))
        
            noObtenidos.sort(( ach1, ach2 ) => parseFloat(ach2.percentage) -  parseFloat(ach1.percentage) );

            setObtained([...obtenidos]);
            setUnobtained([...noObtenidos]);
        }

        

    }, [props.data?.achievements]);

    return (
        <div id="scrollbar" className="w-full flex flex-col items-center py-4 gap-6 bg-white dark:bg-[#28292d] rounded-xl flex-1 px-4 max-[500px]:px-2 max-h-auto">
            <h1 className="text-xl text-black dark:text-white leading-none">Completed</h1>
            { obtained && obtained.length > 0 &&
                <div className="w-full flex flex-col gap-3">
                    { obtained.map(achievement => {
                        return (
                            <AchievementItem
                                key={achievement.id}
                                icon={achievement.icon}
                                title={achievement.title}
                                description={achievement.description}
                                percentage={{
                                    type: "progress",
                                    number: Number(achievement.percentage)
                                }}
                            />
                        )
                    })}
                </div>
            }
            <div className="divider my-0 h-fit"/>
            <h1 className="text-xl text-black dark:text-white leading-none">Uncompleted</h1>
            { unobtained && unobtained.length > 0 && (
                <div className="w-full flex flex-col gap-3">
                    { unobtained.map(achievement => {
                        return (
                            <AchievementItem
                                key={achievement.id}
                                icon={achievement.icon}
                                title={achievement.title}
                                description={achievement.description}
                                percentage={{
                                    type: "progress",
                                    number: Number(achievement.percentage)
                                }}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}