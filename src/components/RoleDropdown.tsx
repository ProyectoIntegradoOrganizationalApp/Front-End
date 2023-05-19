// React
import React, { useState } from "react";
import { DropdownElement } from "../domain/UI/DropdownElement.interface";

/**
 *  Componente de Dropdown para seleccionar entre diferentes elementos
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function openDropdown() {
    document.getElementById("dropdown")?.classList.remove("!invisible", "!opacity-0");
}

function closeDropdown() {
    document.getElementById("dropdown")?.classList.add("!invisible", "!opacity-0");
}

export function RoleDropdown(props: { elements: DropdownElement[] }) {
    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end">
                <div tabIndex={0} className="btn btn-primary flex items-center justify-between !text-left !px-5 gap-7 !outline-none leading-none h-fit min-h-0" onClick={(event: React.MouseEvent<HTMLElement>) => { openDropdown()}}>
                    <p className="dark:text-white w-fit py-3" id="selectedElement">Reader {/* Cambiar por rol bd */}</p>
                    <i className="fa-solid fa-play text-black dark:text-white rotate-90 scale-75"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-slate-600 w-52" id="dropdown">
                    {
                        props.elements.map((element, index) =>
                            <li key={index} onClick={(event: React.MouseEvent<HTMLElement>) => { closeDropdown(); }}>
                                <a className="btn btn-primary text-white justify-start !px-3 !rounded-none leading-none h-fit min-h-0">{element.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}