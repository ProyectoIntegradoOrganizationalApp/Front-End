// React
import React, { MouseEventHandler } from "react";

/**
 *  Componente Share para compartir el enlace del proyecto y que se una people
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function share() {
    console.log('Copied to clipboard!')
    // Notificación de 'Se ha copiado el enlace de invitación'
}

export function Share(props: { link: string }) {
    return (
        <>
            <div onClick={(event: React.MouseEvent<HTMLElement>) => { share() }}
                className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-slate-800 hover:bg-slate-900"><i className="fa-solid fa-share text-white"></i></div>
        </>
    )
}