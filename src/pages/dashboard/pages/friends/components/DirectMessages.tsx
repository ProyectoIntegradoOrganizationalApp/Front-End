// React
import React, { MouseEventHandler, useEffect } from "react";

import { User } from "../../../../../components/User";

import { useLocation } from "react-router-dom";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function DirectMessages(props: { selected?: string }) {
    const location = useLocation();

    useEffect(() => {
        document.title = 'Friend - ' + props.selected + ' | Teamer 2023';
    }, [props.selected])

    return (
        <>
            <div className="h-full max-[839.50px]:h-[unset] flex flex-col gap-[1.1rem]">
                <div className="min-[839.50px]:mt-1.5 flex justify-between">
                    <p className="text-black dark:text-white text-base">Direct Messages</p>
                    <i id="dropdownArrow" className="fa-solid fa-play text-black dark:text-white -translate-x-[0.220rem] transition-all rotate-90 scale-75 min-[839.50px]:hidden"></i>
                </div>
                <div id="directMessages" className="overflow-y-hidden max-[839.50px]:hidden">
                    <div className="w-full h-[0.1rem] bg-gray-400 dark:bg-[#414149] mb-4"></div>
                    <div id="scrollbar" className="flex flex-col gap-1 max-h-full max-[839.50px]:max-h-[200px]">
  
                        <User dm={true} selected={location.pathname.includes("Firebloh")} picture="nose" name="Firebloh" state="connected" />
                            
                    </div>
                </div>
            </div>
        </>
    )
}