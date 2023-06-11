import { createContext } from 'react';

import { ModalInterface } from '../domain/UI/ModalInterface.interface';

interface ModalContext {
    modal: ModalInterface | null,
    setModal: (modal: ModalInterface | null) => void
}

export const ModalContext = createContext<ModalContext>({
    modal: null,
    setModal: () => {}
});