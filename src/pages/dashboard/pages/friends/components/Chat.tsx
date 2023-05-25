// React
import React from "react";
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
                <div className="bg-gray-200 dark:bg-slate-700 py-4 px-6 rounded-3xl rounded-tl-none w-fit mr-auto relative">
                    <p className="text-black dark:text-white leading-7">A qué cine fuiste para ver la peli?</p>
                </div>
                {/* Mine */}
                <div className="bg-gray-300 dark:bg-slate-600 py-4 px-6 rounded-3xl rounded-tr-none w-fit ml-auto relative">
                    <p className="text-black dark:text-white leading-7">Al Kinepolis</p>
                </div>
                {/* Your */}
                <div className="bg-gray-200 dark:bg-slate-700 py-4 px-6 rounded-3xl rounded-tl-none w-fit mr-auto relative">
                    <p className="text-black dark:text-white leading-7">Que bien</p>
                </div>
                {/* Mine */}
                <div className="bg-gray-300 dark:bg-slate-600 py-4 px-6 rounded-3xl rounded-tr-none w-fit ml-auto relative">
                    <p className="text-black dark:text-white leading-7">Sí.</p>
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
                <div className="bg-white dark:bg-slate-800 w-full h-full flex flex-col justify-between gap-7 rounded-xl p-6 max-[575px]:p-4">
                    {getMessages()}

                    <div className="flex bg-gray-200 dark:bg-slate-700 rounded-xl">
                        <input onKeyDown={handleKeywordKeyPress} placeholder="Send a message..." className="sendico w-full h-fit px-4 py-3 rounded-xl outline-none text-black dark:text-white bg-gray-200 dark:bg-slate-700" />
                        <i className="bg-gray-200 dark:bg-slate-700 px-3.5 h-full flex justify-between items-center fa-sharp fa-solid fa-share text-black dark:text-white rounded-r-xl"></i>
                    </div>
                </div>
            } {
                props.friend === undefined &&
                <Navigate to="/friends" />
            }
        </>
    )
}