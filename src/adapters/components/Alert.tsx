// React
import React from "react";

/**
 *  Componente de Alert para informar al usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function closeAlert(event: React.MouseEvent<HTMLElement>) {
    console.log('a')
}

export function Alert(props: { state: string, title: string, description?: string }) {
    return (
        <>
            <div className="bg-slate-900 rounded-xl absolute w-fit h-fit p-6 px-5 flex gap-5 items-start justify-between">
                {
                    props.state == "info" &&
                    <i className="fa-sharp fa-solid fa-circle-info text-blue-400 text-3xl"></i>
                } {
                    props.state == "success" &&
                    <i className="fa-sharp fa-solid fa-circle-check text-green-700 text-3xl"></i>
                } {
                    props.state == "warning" &&
                    <i className="fa-solid fa-triangle-exclamation text-yellow-600 text-3xl"></i>
                } {
                    props.state == "error" &&
                    <i className="fa-sharp fa-solid fa-circle-xmark text-red-600 text-3xl"></i>
                }
                <div className="flex flex-col gap-2.5 max-w-160 w-160">
                    <p className="text-white text-base leading-none">{props.title}</p>
                    <p className="text-white/50 text-sm leading-normal">{props.description}</p>
                </div>
                <i className="fa-solid fa-xmark text-white cursor-pointer" onClick={closeAlert}></i>
            </div>
        </>
    )
}