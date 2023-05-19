// React
import { useContext } from "react";

// Interfaces
import { ModalInterface } from "../domain/UI/ModalInterface.interface";
import { SettingInterface } from "../domain/UI/SettingInterface.interface";
import { SideElementsModal } from "../domain/SideElementsModal.interface";
import { ModalContext } from "../domain/context/ModalContext";

export const useModal = () => {
    const { modal, setModal } = useContext(ModalContext);

    const openModal = (modal: ModalInterface) => {
        setModal(modal);
    }

    const closeModal = (modal: ModalInterface) => {
        setModal(modal);
    }

    return { openModal, closeModal };
}