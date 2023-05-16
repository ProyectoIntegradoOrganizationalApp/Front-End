// React
import React, { MouseEventHandler } from "react";
import { SettingInterface } from "../../../domain/SettingInterface.interface";
import { InputModalInterface } from "../../../domain/InputModalInterface";

/**
 *  Componente Setting para modal
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function ModalContent(props: {content: SettingInterface | InputModalInterface}) {
    return (
        <>
            <div></div>
        </>
    )
}