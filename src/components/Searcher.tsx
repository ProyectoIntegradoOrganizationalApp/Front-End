// React
import React, { ChangeEvent, MouseEventHandler } from "react";

/**
 *  Componente Searcher para buscar un target
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function search(evt: ChangeEvent) {
    const target = (evt.target as HTMLInputElement).value;
}

export function Searcher(props: { bg: string, placeholder: string }) {
    return (
        <>
            <input onChange={evt => search(evt)} placeholder={props.placeholder} className={"w-full h-fit px-4 py-3 rounded-xl outline-none text-white " + props.bg}/>
        </>
    )
}