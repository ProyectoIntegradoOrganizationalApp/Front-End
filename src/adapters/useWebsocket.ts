import React from "react";

import { useAuth } from "../hooks/useAuth";

export const useWebsocket = ( ip: string ) => {

    const { user } = useAuth();

    const ws = null;
    let send = null;

    React.useEffect(() => {
        let token = `Bearer ${user?._token}`
        const ws = new WebSocket(ip, user?._token);

        ws.onopen = ( event: Event ) => {
            console.log(event)
        }

        ws.onmessage = ( event: Event ) => {
            console.log(event)
        }

        ws.onerror = ( err ) => {
            console.log(err)
        }

        send = ( msg: string ) => {
            ws.send(msg);
        }

        return () => {
            ws.close();
        }

    }, []);
    
    return { send };

}