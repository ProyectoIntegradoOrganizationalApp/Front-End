// React
import React, { useState } from "react";
import { DropdownElement } from "../domain/UI/DropdownElement.interface";

/**
 *  Componente de Dropdown para seleccionar entre diferentes elementos
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

function openDropdown(event: React.MouseEvent<HTMLElement>, broElement: HTMLElement) {
    broElement.classList.remove("!invisible", "!opacity-0");
}

function closeDropdown(event: React.MouseEvent<HTMLElement>, parentElement: HTMLElement) {
    parentElement.classList.add("!invisible", "!opacity-0");
}

export function Dropdown(props: { selectedElement?: string, selectElement?: Function, elements: DropdownElement[] }) {
    return (
        <>
            <div className="dropdown dropdown-bottom dropdown-end w-full">
                <div tabIndex={0} className="btn btn-primary flex flex-nowrap items-center justify-between !bg-white dark:!bg-slate-600 !text-left !px-5 gap-7 !outline-none leading-none h-fit min-h-0" onClick={(event: React.MouseEvent<HTMLElement>) => {
                    const siblingElement = event.currentTarget.nextElementSibling as HTMLElement;
                    if (siblingElement) {
                        openDropdown(event, siblingElement);
                    }
                }}>
                    <p className="text-black dark:text-white w-fit py-3" id="selectedElement">{props.selectedElement}</p>
                    <i className="fa-solid fa-play text-black dark:text-white rotate-90 scale-75"></i>
                </div>
                <ul tabIndex={0} className="dropdown-content menu p-2 mt-1 shadow bg-white dark:bg-slate-600 w-52" id="dropdown">
                    {
                        props.elements.map((element, index) =>
                            <li key={index} onClick={(event: React.MouseEvent<HTMLElement>) => {
                                const parentElement = event.currentTarget.parentNode as HTMLElement;
                                if (parentElement) {
                                    closeDropdown(event, parentElement);
                                    props.selectElement ? props.selectElement(element.name) : undefined
                                }
                            }}>
                                <a className="!bg-white hover:!bg-gray-200 dark:hover:!bg-slate-500 dark:!bg-slate-600 !text-black dark:!text-white justify-start !px-3 !rounded-none leading-none h-fit min-h-0">{element.name}</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}