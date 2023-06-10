// React
import Modal from 'react-modal';

import CrudProjectForm from "../forms/CrudProjectForm";
import CrudConfirmation from '../forms/CrudConfirmation';
import { NotificationsModal } from './components/NotificationsModal';
import CrudBoardForm from '../forms/CrudBoardForm';

import { ModalInterface } from "../../domain/UI/ModalInterface.interface";

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
                <label className={`modal-box relative flex flex-col overflow-hidden ${props.atts?.type == "settings" ? "bg-slate-700" : props.atts?.type.includes("crud") ? "bg-white dark:bg-slate-800" : "!w-fit"}`} htmlFor="">
                    <div onClick={props.closeModal} className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-transparent text-xl absolute top-6 right-5 hover:!bg-transparent">
                        <i className="fa-solid fa-xmark scale-150 text-black dark:text-white hover:text-black/50 dark:hover:text-white/50 transition-all"></i>
                    </div>

                    {  props.atts?.type === "settings" ? (
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
                    ) : props.atts?.type === "crudProject" ? (
                        <CrudProjectForm
                            title={props?.atts.title}
                            submitText={props.atts.submitText}
                            close={props.closeModal}
                            submit={props.atts.submitAction}
                        />
                    ) : props.atts?.type === "confirmation" ? (
                        <CrudConfirmation
                            action={props?.atts.action}
                            target={props.atts.target}
                            submitText={props.atts.submitText}
                            close={props.closeModal}
                            submit={props.atts.submitAction}
                        />
                    ) : props.atts?.type == "notifications" ? (
                        <NotificationsModal content={props.atts.content}/>
                    ) : props.atts?.type === "crudBoard" ? (
                        <CrudBoardForm
                            title={props?.atts.title}
                            submitText={props.atts.submitText}
                            close={props.closeModal}
                            submit={props.atts.submitAction}
                        />
                    ) : (
                        <>
                            <h1>Error</h1>
                        </>
                    )}
                </label>
            </label>
        </Modal>
    )
}