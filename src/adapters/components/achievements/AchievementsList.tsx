// React
import React from "react";
import { AchievementItem } from "./AchievementItem";

/**
 *  Componente de Achievements List para ver los 6 últimos logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementsList() {
    return (
        <>
            <div className="w-full flex flex-col items-center gap-4">
                {/* Foreach (Achievement) */}
                <AchievementItem icon="idkm" title="First Steps" description="Finish 5 tasks" percentage={{
                    type: "basic",
                    number: 40
                }}/>
                {/* EndForeach */}
            </div>
        </>
    )
}