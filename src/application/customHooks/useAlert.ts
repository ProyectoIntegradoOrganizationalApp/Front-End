import { ReactNode, useContext } from 'react';
import { AlertContext } from '../../context/AlertContext';
import { useLocalStorage } from './useLocalStorage';
import { AlertInterface, AlertComponent } from "../../domain/AlertInterface.interface";

export const useAlert = () => {
    const { alerts, setAlerts } = useContext(AlertContext);
    const { setItem } = useLocalStorage();

    const removeAllAlerts = () => {
        setAlerts([]);
        setItem("alerts", JSON.stringify(alerts));
    }

    const addAlert = (id: string, alert: AlertComponent) => {
        const newAlerts: AlertInterface[] = [{
            id: id,
            atts: {
                state: alert.state,
                title: alert.title,
                description: alert.description
            }
        }, ...alerts]

        setAlerts(newAlerts);
        setItem("alerts", JSON.stringify(alerts));
        
        setTimeout(() => {
            console.log("removido")
            alerts.shift()
            setAlerts(alerts);
            setItem("alerts", JSON.stringify(alerts));
        }, 5000);
    }

    return { alerts, addAlert, removeAllAlerts };
}