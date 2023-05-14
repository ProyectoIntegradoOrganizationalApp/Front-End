// React
import React, { MouseEventHandler } from "react";
import { User } from "../User";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function DirectMessages(props: { selected?: string }) {
    return (
        <>
            <div className="flex flex-col gap-6">
                <p className="text-black dark:text-white text-base mt-2">Direct Messages</p>
                <div className="w-full h-0.5 bg-slate-600"></div>
                <div className="flex flex-col gap-1">
                    {/* Foreach (Friends Users DM) */}
                    {
                        props.selected &&
                        <>
                            {/* if(name == selected) {selected = true} */}
                            <User dm={true} selected={location.pathname.includes("Firebloh")} picture="nose" name="Firebloh" state="connected" />
                            <User dm={true} selected={location.pathname.includes("sparejo1311")} picture="nose" name="sparejo1311" state="disconnected" />
                            <User dm={true} selected={location.pathname.includes("maiki69")} picture="nose" name="maiki69" state="busy" />
                        </>
                    } {
                        !props.selected &&
                        <>
                            <User dm={true} picture="nose" name="Firebloh" state="connected" />
                            <User dm={true} picture="nose" name="sparejo1311" state="disconnected" />
                            <User dm={true} picture="nose" name="maiki69" state="busy" />
                        </>
                    }
                    {/* EndForeach */}
                </div>
            </div>
        </>
    )
}