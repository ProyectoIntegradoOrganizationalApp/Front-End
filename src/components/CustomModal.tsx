// React
import React, { MouseEventHandler } from "react";
import Modal from 'react-modal';

import { ModalInterface } from "../domain/UI/ModalInterface.interface";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

Modal.setAppElement("#root");

export function CustomModal(props: { isOpen: boolean, closeModal: () => void, atts: ModalInterface | null }) {
    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.closeModal} style={{ content: { all: "unset" } }}>
            <label htmlFor="modalbox" className="modal modalcontainer">
                <label className={`modal-box relative flex flex-col ${props.atts?.type == "settings" ? "bg-white dark:bg-slate-700" : "bg-white dark:bg-slate-800"}`} htmlFor="">
                    <i onClick={props.closeModal} className="scale-150 absolute top-8 right-8 fa-solid fa-xmark text-black dark:text-white hover:text-black/50 dark:hover:text-white/50 transition-all cursor-pointer"></i>
                    {
                        props.atts?.type == "settings" &&
                        <>
                            <div className="flex flex-col w-1/5 bg-white dark:bg-slate-800 p-7">
                                {
                                    props.atts?.sidebarElements?.map((element, index) => {
                                        return (
                                            <div key={index} className="py-3 flex gap-4">
                                                <i className={element.icon}></i>
                                                <p className="leading-none text-base">{element.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="flex flex-col w-4/5 p-7">
                                <h3 className="text-base">Congratulations random Internet user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            </div>
                        </>
                    } {
                        props.atts?.type == "crud" &&
                        <>
                            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-slate-800 p-7 border-b-2 border-gray-300 dark:border-white/20">
                                <div className="flex gap-4">
                                    <p className="leading-none text-2xl">{props.atts.title}</p>
                                </div>
                            </div>
                            <div className="flex flex-col bg-transparent p-7 gap-5">
                                <div className="flex flex-wrap gap-5">
                                {
                                    props.atts?.content?.map((element, index) => {
                                        if (element.discriminator == "crud" && element.tag == "input") {
                                            return (
                                                <input type={element.type} name={element.name} placeholder={element.placeholder} minLength={element.min ? element.min : undefined} maxLength={element.max ? element.max : undefined} className={`flex-1 input input-bordered border-none bg-gray-200 dark:bg-slate-700 ${element.width == "full" ? "w-full basis-full" : element.width == "half" ? "w-6/12" : ""}`} required={element.required ? true : undefined}/>
                                            )
                                        } else if (element.discriminator == "crud" && element.tag == "textarea") {
                                            return (
                                                <textarea name={element.name} placeholder={element.placeholder} minLength={element.min ? element.min : undefined} maxLength={element.max ? element.max : undefined} className={`flex-1 input input-bordered border-none max-h-28 min-h-28 resize-none bg-gray-200 dark:bg-slate-700 ${element.width == "full" ? "w-full basis-full" : element.width == "half" ? "w-6/12" : ""}`} required={element.required ? true : undefined}/>
                                            )
                                        }
                                    })
                                }
                                </div>
                                <div className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-800">{props.atts.submitText}</div>
                            </div>
                        </>
                    }
                </label>
            </label>
        </Modal>
    )
}