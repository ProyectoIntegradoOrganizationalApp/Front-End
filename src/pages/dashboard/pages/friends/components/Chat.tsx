// React
import React, { KeyboardEventHandler, MouseEventHandler } from "react";
import { User } from "../../../../../components/User";
import { Friend } from "../pages/friend/Friend";
import { Navigate } from "react-router-dom";

/**
 *  Componente Chat para hablar con friends
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

let friend: string | undefined = "";

function getMessages() {
    // Pedir mensajes con ese amigo (friend)

    if (friend !== undefined) {
        return <>
            <div id="scrollbar" className="flex flex-col gap-4 h-full">
                <div className="bg-slate-700 py-4 px-6 rounded-3xl rounded-tl-none w-fit mr-auto relative">
                    <p className="text-white leading-7">A qué cine fuiste para ver la peli?</p>
                </div>
                {/* Mine */}
                <div className="bg-slate-600 py-4 px-6 rounded-3xl rounded-tr-none w-fit ml-auto relative">
                    <p className="text-white leading-7">Al Kinepolis</p>
                </div>
                {/* Your */}
                <div className="bg-slate-700 py-4 px-6 rounded-3xl rounded-tl-none w-fit mr-auto relative">
                    <p className="text-white leading-7">Que bien</p>
                </div>
                {/* Mine */}
                <div className="bg-slate-600 py-4 px-6 rounded-3xl rounded-tr-none w-fit ml-auto relative">
                    <p className="text-white leading-7">Sí.</p>
                </div>
            </div>
        </>
    } else {
        return <Navigate to="/friends" />
    }
}

function sendMessage(message: string) {
    console.log(message);
    console.log("to: " + friend);
}

const handleKeywordKeyPress = (e: React.KeyboardEvent) => {
    if (e.key == 'Enter') {
        sendMessage((e.target as HTMLInputElement).value);
        (e.target as HTMLInputElement).value = "";
    }
};

export function Chat(props: { friend: string | undefined }) {
    friend = props.friend;

    return (
        <>
            {
                props.friend !== undefined &&
                <div className="bg-slate-800 w-full h-full flex flex-col justify-between gap-7 rounded-xl p-6">
                    {getMessages()}

                    <div className="flex bg-slate-700">
                        <input onKeyDown={handleKeywordKeyPress} placeholder="Send a message..." className="sendico w-full h-fit px-4 py-3 rounded-xl outline-none text-white bg-slate-700" />
                        <i className="bg-slate-700 px-3.5 h-full flex justify-between items-center fa-sharp fa-solid fa-share text-black dark:text-white"></i>
                    </div>
                </div>
            } {
                props.friend === undefined &&
                <Navigate to="/friends" />
            }
        </>
    )
}