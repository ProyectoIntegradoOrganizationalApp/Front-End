// React
import React, { MouseEventHandler, useEffect } from "react";
import { toast } from "react-toastify";

/**
 *  Componente Share para compartir el enlace del proyecto y que se una people
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function getLink() {
    toast.success('Copied to clipboard!');
}

export function Share(props: { link: string }) {
    return (
        <>
            <div onClick={(event: React.MouseEvent<HTMLElement>) => { getLink() }} className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-gray-200 hover:bg-gray-300 dark:bg-[#202124] dark:hover:bg-[#18181a]"><i className="fa-solid fa-paste text-black dark:text-white"></i></div>
        </>
    )
}