// React
import React, { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

import { State } from "./State";
import { InfoTooltip } from "./InfoTooltip";

/**
 *  Componente User que muestra la picture y el name de este
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function stateColor(state: string) {
    switch (state) {
        case "connected": return "bg-green-700"
        case "disconnected": return "bg-slate-600"
        case "busy": return "bg-red-700"
        default: return "bg-slate-600"
    }
}

export function User(props: { dm: boolean, selected?: boolean, picture: string, name: string, state: string }) {
    return (
        <>
            {
                props.dm == true &&
                <Link to={"/friends/u/" + props.name} className="min-w-[calc(210px)]">
                    {
                        props.selected == true &&
                        <div className="flex items-center gap-4 rounded-xl select-none cursor-pointer py-2 px-2 bg-white dark:bg-[#28292d] transition-all">
                            {/* Picture */}
                            <div className="w-12 aspect-square bg-red-800 rounded-full relative">
                                <div className="absolute -top-0.5 -right-1">
                                    <InfoTooltip position="right" title={props.state.charAt(0).toUpperCase() + props.state.substring(1)} target={
                                        <State color={stateColor(props.state)} />
                                    } />
                                </div>
                            </div>
                            <p className="text-black dark:text-white text-base">{props.name}</p>
                        </div>
                    } {props.selected == false &&
                        <div className="flex items-center gap-4 rounded-xl select-none cursor-pointer py-2 px-2 hover:bg-white dark:hover:bg-[#28292d] transition-all">
                            {/* Picture */}
                            <div className="w-12 aspect-square bg-red-800 rounded-full relative">
                                <div className="absolute -top-0.5 -right-1">
                                    <InfoTooltip position="right" title={props.state.charAt(0).toUpperCase() + props.state.substring(1)} target={
                                        <State color={stateColor(props.state)} />
                                    } />
                                </div>
                            </div>
                            <p className="text-black dark:text-white text-base">{props.name}</p>
                        </div>
                    } {
                        props.selected === undefined &&
                        <div className="flex items-center gap-4 rounded-xl select-none cursor-pointer py-2 px-2 hover:bg-white dark:hover:bg-[#28292d] transition-all">
                            {/* Picture */}
                            <div className="w-12 aspect-square bg-red-800 rounded-full relative">
                                <div className="absolute -top-0.5 -right-1">
                                    <InfoTooltip position="right" title={props.state.charAt(0).toUpperCase() + props.state.substring(1)} target={
                                        <State color={stateColor(props.state)} />
                                    } />
                                </div>
                            </div>
                            <p className="text-black dark:text-white text-base">{props.name}</p>
                        </div>
                    }
                </Link>
            } {
                props.dm == false &&
                <div className="flex items-center gap-4">
                    {/* Picture */}
                    <div className="w-12 aspect-square bg-red-800 rounded-full relative">
                        <div className="absolute -top-0.5 -right-1">
                            <InfoTooltip position="right" title={props.state.charAt(0).toUpperCase() + props.state.substring(1)} target={
                                <State color={stateColor(props.state)} />
                            } />
                        </div>
                    </div>
                    <p className="text-black dark:text-white text-base">{props.name}</p>
                </div>
            }
        </>
    )
}