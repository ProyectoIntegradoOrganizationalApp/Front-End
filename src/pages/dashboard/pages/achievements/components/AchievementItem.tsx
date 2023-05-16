// React
import React from "react";
import { AchievementPercentage } from "../../domain/AchievementPercentage.interface";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementItem(props: { tab?: string, orderBy?: string, icon: string, title: string, description: string, percentage: AchievementPercentage }) {
    return (
        <>
            {
                props.percentage.type == "basic" &&
                <div className="bg-slate-700 w-full py-3 px-4 rounded-xl relative">
                    <div className={"absolute top-0 left-0 h-full rounded-l-xl z-1 bg-slate-600 w-5/12 " + {/* width (w-6/12 == 50%) (si llega al final, rounded-xl) */ }}></div>
                    <div className="relative z-2 flex flex-wrap justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16">
                                <img src={props.icon}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-white text-base leading-none">{props.title}</p>
                                <p className="text-white/50 text-sm leading-none">{props.description}</p>
                            </div>
                        </div>
                        <p className="text-white text-base leading-none">{props.percentage.number + "%"}</p>
                    </div>
                </div>
            } {
                props.percentage.type == "progress" &&
                <div className="bg-slate-800 w-full py-3 px-4 rounded-xl relative">
                    <div className="relative z-2 flex flex-wrap justify-between items-center">
                        <div className="flex items-center gap-4">
                            {/* Achievement Icon */}
                            <div className="w-10 h-10">
                                <img src={props.icon}/>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-white text-base leading-none">{props.title}</p>
                                <p className="text-white/50 text-sm leading-none">{props.description}</p>
                            </div>
                        </div>
                        <div className={"text-white leading-none flex items-end flex-col gap-2 w-5/12 " + {/* width (w-6/12 == 50%) (si llega al final, rounded-xl) */ }}>
                            <p className="text-base">{props.percentage.number + "%"}</p>
                            <progress className="progress progress-primary w-full left-0 !rounded-full bg-slate-700" value={props.percentage.number} max="100"></progress>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}