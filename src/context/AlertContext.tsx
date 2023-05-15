import { ReactNode, createContext } from 'react';
import { AlertInterface, AlertComponent } from "../domain/AlertInterface.interface";

interface AlertContext {
    alerts: AlertInterface[],
    setAlerts: (alerts: AlertInterface[]) => void
}

export const AlertContext = createContext<AlertContext>({
    alerts: [],
    setAlerts: () => {}
});