// React
import React from "react";
import { AchievementPercentage } from "../../../../../domain/achievement/AchievementPercentage.interface";

/**
 *  Componente de Achievement Info para ver el conjunto de Level y List de logros del usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AchievementItem(props: { tab?: string, orderBy?: string, icon: string, title: string, description: string, percentage: AchievementPercentage }) {
    return (
        <>
          { props.percentage.type == "progress" &&
                <div className="bg-gray-200 dark:bg-[#202124] w-full py-3 px-4 rounded-xl relative">
                    <div className="relative z-2 flex max-[745px]:flex-col max-[745px]:items-start justify-between items-center gap-4 max-[745px]:gap-2">
                        <div className="flex items-center gap-4">
                            {/* Achievement Icon */}
                            <div className="w-10 h-10">
                                <img src={props.icon} />
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-black dark:text-white text-base leading-none">{props.title}</p>
                                <p className="text-black dark:text-white/50 text-sm leading-none">{props.description}</p>
                            </div>
                        </div>
                        <div className="text-white leading-none flex items-end max-[745px]:flex-row max-[745px]:items-center flex-col max-[745px]:gap-3 gap-2 max-[745px]:w-full w-5/12">
                            <p className="text-base max-[745px]:order-1 text-black dark:text-white">{props.percentage.number + "%"}</p>
                            <progress className="progressAchievement progress progress-primary w-full left-0 !rounded-full dark:bg-[#28292d]" value={props.percentage.number} max="100"></progress>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

// { Por si acaso
//     props.percentage.type == "basic" &&
//     <div className="bg-white dark:bg-slate-700 w-full py-3 px-4 rounded-xl relative">
//         <div className={"absolute top-0 left-0 h-full rounded-l-xl z-1 bg-gray-300 dark:bg-slate-600 w-5/12 " + {/* width (w-6/12 == 50%) (si llega al final, rounded-xl) */ }}></div>
//         <div className="relative z-2 flex flex-wrap justify-between items-center">
//             <div className="flex-[2] flex items-center gap-4">
//                 <div className="w-10 aspect-square">
//                     <img src={props.icon} />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                     <p className="text-black dark:text-white text-base leading-none">{props.title}</p>
//                     <p className="text-slate-500 dark:text-white/50 text-sm leading-none">{props.description}</p>
//                 </div>
//             </div>
//             <div>
//                 <p className="flex-1 text-black dark:text-white text-base leading-none w-fit">{props.percentage.number + "%"}</p>
//             </div>
//         </div>
//     </div>
// } 