// React
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../application/customHooks/useLocalStorage";
import { AlertInterface } from "../../domain/AlertInterface.interface";
import { Alert } from "./Alert";
import { useAlert } from "../../application/customHooks/useAlert";

/**
 *  Componente de Alert para informar al usuario
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function AlertContainer() {
    const { removeAllAlerts } = useAlert();
    const [ alerts, setAlerts ] = useState<AlertInterface[]>([]);

    const { getItem } = useLocalStorage();
    let alertss: AlertInterface[] = [];

    useEffect(() => {
        removeAllAlerts();
        const getItems = getItem("alerts");
        if (getItems) {
            alertss = JSON.parse(getItems);
            setAlerts(alertss);
        }
    }, [alerts]);
    console.log("NEWALTER: " + alerts)
    return (
        <div>
            {
                alerts.map((element, index) => {
                    console.log(element)
                    return <Alert key={index} state={element.atts.state} title={element.atts.title} description={element.atts.description}/>
                })
            }
        </div>
    )
}