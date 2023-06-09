// React
import React from "react";

interface SearcherProps {
    bg: string,
    placeholder: string,
    cb: ( value: string ) => void
}

/**
 *  Componente Searcher para buscar un target
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export const Searcher: React.FC<SearcherProps> = ({ bg, placeholder, cb }) => {
    return (
        <input 
            onChange={evt => cb(evt.target.value)} 
            placeholder={placeholder} 
            className={"w-full min-w-[200px] h-fit px-4 py-2.5 rounded-xl outline-none text-black dark:text-white " + bg}
        />
    )
}