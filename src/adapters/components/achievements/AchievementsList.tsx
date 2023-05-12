// React
import React from "react";

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
                <div className="bg-slate-700 w-full py-2 px-4 rounded-xl relative">
                    <div className={"absolute top-0 left-0 h-full rounded-l-xl z-1 bg-slate-600 w-5/12 " + {/* width (w-6/12 == 50%) */ }}></div>
                    <div className="relative z-2 flex flex-wrap justify-between items-center">
                        <div className="flex items-center gap-4">
                            {/* Achievement Icon */}
                            <div className="w-14 aspect-square rounded-full bg-green-700"></div>

                            <div className="flex flex-col gap-2">
                                <p className="text-white text-base leading-none">First Steps</p>
                                <p className="text-white/50 text-sm leading-none">Finish 5 tasks</p>
                            </div>
                        </div>
                        <p className="text-white text-xl leading-none">40%</p>
                    </div>
                </div>

                <div className="bg-slate-700 w-full py-2 px-4 rounded-xl relative">
                    <div className={"absolute top-0 left-0 h-full rounded-l-xl z-1 bg-slate-600 w-8/12 " + {/* width (w-6/12 == 50%) */ }}></div>
                    <div className="relative z-2 flex flex-wrap justify-between items-center">
                        <div className="flex items-center gap-4">
                            {/* Achievement Icon */}
                            <div className="w-14 aspect-square rounded-full bg-yellow-700"></div>

                            <div className="flex flex-col gap-2">
                                <p className="text-white text-base leading-none">First Steps</p>
                                <p className="text-white/50 text-sm leading-none">Finish 5 tasks</p>
                            </div>
                        </div>
                        <p className="text-white text-xl leading-none">40%</p>
                    </div>
                </div>
                {/* EndForeach */}
            </div>
        </>
    )
}