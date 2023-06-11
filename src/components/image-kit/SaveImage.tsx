import { useRef } from "react";

import { IKContext, IKUpload } from "imagekitio-react"

export const SaveImage: React.FC<{cb: (url: string) => void}> = ({ cb }) => {

    const uploadRef = useRef(null);

    const AUTH = import.meta.env.VITE_IMG_AUTH_URL;

    const onError = ( err: any ) => {
        
    }

    const onSuccess = ( res: any ) => {
        cb(res.url);
    }

    return (
        <IKContext 
            publicKey="public_Wje+b0V49RLNB0eCk9+me5s6uwQ="
            urlEndpoint="https://ik.imagekit.io/iqaq9l86z/"
            authenticationEndpoint="http://localhost:3001/auth"
        >
            <IKUpload
                onError={onError}
                onSuccess={onSuccess}
                inputRef={uploadRef}
                style={{display: "none"}}
            />

            { uploadRef && (
                <button
                    className="file-input"
                    onClick={() => {
                        uploadRef.current.click()
                    }}
                >
                    Upload Image
                </button>
            )}

        </IKContext>
    )
}