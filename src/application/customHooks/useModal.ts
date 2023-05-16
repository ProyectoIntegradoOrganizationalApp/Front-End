import { useContext } from "react";
import { ModalInterface } from "../../domain/ModalInterface.interface";
import { SettingInterface } from "../../domain/SettingInterface.interface";
import { SideElementsModal } from "../../domain/SideElementsModal.interface";
import { ModalContext } from "../../context/ModalContext";

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