// React
import React, { MouseEventHandler, useEffect } from "react";
import { Alert } from "./Alert";
import ReactDOM from "react-dom";
import { useAlert } from "../../application/customHooks/useAlert";
import { useLocalStorage } from "../../application/customHooks/useLocalStorage";

/**
 *  Componente Share para compartir el enlace del proyecto y que se una people
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function Share(props: { link: string }) {
    const { addAlert } = useAlert();

    return (
        <>
            <div onClick={(event: React.MouseEvent<HTMLElement>) => {
                addAlert("1", {
                    state: "success",
                    title: "Copied to clipboard!",
                    description: "Paste to your friend (ctrl+v)"
                })
            }} className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-slate-800 hover:bg-slate-900"><i className="fa-solid fa-paste text-white"></i></div>
        </>
    )
}