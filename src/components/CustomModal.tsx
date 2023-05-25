// React
import React, { MouseEventHandler } from "react";
import Modal from 'react-modal';

import { ModalInterface } from "../domain/UI/ModalInterface.interface";
import { useProjectsApi } from "../adapters/api/useProjectsApi";
import CrudProjectForm from "./forms/CrudProjectForm";

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

Modal.setAppElement("#root");

export function CustomModal(props: { isOpen: boolean, closeModal: () => void, atts: ModalInterface | null }) {

    return (
        <Modal 
            isOpen={props.isOpen} 
            onRequestClose={props.closeModal} 
            style={{ content: { all: "unset" } }}
        >
            <label htmlFor="modalbox" className="modal modalcontainer">
                <label className={`modal-box relative flex flex-col ${props.atts?.type == "settings" ? "bg-slate-700" : "bg-slate-800"}`} htmlFor="">
                    <div onClick={props.closeModal} className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-transparent text-xl absolute top-6 right-5 hover:!bg-transparent">
                        <i className="fa-solid fa-xmark text-white hover:text-white/50 transition-all"></i>
                    </div>

                    { props.atts?.type == "settings" ?  (
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
                    ): props.atts?.type == "crudProject" ? (
                        <CrudProjectForm
                            title={props?.atts.title}
                            submitText={props.atts.submitText}
                            close={props.closeModal}
                        />
                    ): (
                        <>
                            <h1>Error</h1>
                        </>
                    )}
                    
                </label>
            </label>
        </Modal>
    )
}