// React
import React from "react";

import { AchievementItem } from "./AchievementItem";

import { Profile } from "../../../../../domain/profile/Profile.interface";

/**
 *  Componente de Achievements List para ver los 6 últimos logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsList( props: { data: Profile | undefined } ) {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-4">
                {/* Foreach (Achievement) */}

                { props.data?.achievements.map( achievement => {
                    return (
                        <AchievementItem
                            key={achievement.id} 
                            icon={achievement.icon} 
                            title={achievement.title} 
                            description={achievement.description} 
                            percentage={{
                                type: "basic",
                                number: achievement.progress
                            }}
                        />
                    )
                })}
                
                {/* EndForeach */}
            </div>
        </>
    )
}