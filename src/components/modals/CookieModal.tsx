// React
import React, { MouseEventHandler, useState } from "react";
import Modal from 'react-modal';

/**
 *  Componente Item para mostrar información de un proyecto, usuario, etc. y posibles botones para editar, borrar, etc.
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

Modal.setAppElement("#root");

function closeModal() {
    document.querySelector('.ReactModal__Overlay')?.classList.add("!hidden");
    document.querySelector('.ReactModal__Content')?.classList.remove("ReactModal__Content--after-open");
}

export function CookieModal(props: { isOpen: boolean }) {
    const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

    const handleClickAccept = () => {
        setCookiesAccepted(true);
        localStorage.setItem('cookiesAccepted', 'true');
    };

    const handleClickReject = () => {
        setCookiesAccepted(false);
        localStorage.setItem('cookiesAccepted', 'false');
    };

    return (
        <Modal isOpen={props.isOpen} style={{ content: { all: "unset" } }}>
            <label htmlFor="modalbox" className="modal modalcontainer" id="cookiemodal">
                <label className="modal-box bg-white dark:bg-[#202124]" htmlFor="">
                    <div className="flex-1 flex flex-wrap items-center justify-between p-7 gap-7">
                        <div className="flex-1 flex flex-col gap-5 sm:min-w-[400px] !max-w-[800px]">
                            <p className="text-2xl leading-none w-fit">We Use Cookies</p>
                            <p className="leading-normal text-black dark:text-white">
                                We use cookies and similar technologies to help personalize
                                content, tailor and measure ads, and provide a better expe-
                                rience. By clicking accept, you agree to this, as outlined in our <a href="raef" target="_blank" className="hover:underline"><b className="text-black dark:text-white">Cookie Policy</b></a>.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-4 w-full sm:w-fit">
                            <div className="flex-1 sm:flex-none btn btn-primary !bg-green-700 hover:!bg-green-800 min-w-fit" onClick={() => {handleClickAccept(); closeModal()}}>Accept Cookies</div>
                            <div className="flex-1 sm:flex-none btn btn-primary !bg-red-700 hover:!bg-red-800 min-w-fit" onClick={() => {handleClickReject(); closeModal()}}>Reject Cookies</div>
                        </div>
                    </div>
                </label>
            </label>
        </Modal>
    )
}