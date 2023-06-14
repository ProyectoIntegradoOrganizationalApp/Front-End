import { useRef } from "react";

import { IKContext, IKUpload } from "imagekitio-react"

export const SaveImage: React.FC<{cb: (url: string) => void, title?: string, blue?: boolean}> = ({ cb, title, blue }) => {

    const uploadRef = useRef<HTMLInputElement>(null);

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
                    className={`file-input transition-all ${blue ? "bg-blue-700 text-white" : "bg-gray-300"} ${blue ? "bg-blue-700" : "dark:bg-[#28292d]"} ${blue ? "hover:bg-blue-800" : "hover:bg-gray-400"} ${blue ? "hover:bg-blue-800" : "dark:hover:bg-[#272729]"}`}
                    onClick={() => {
                        if( uploadRef.current ){
                            uploadRef.current.click()
                        }
                        
                    }}
                >
                    { title && title } 
                    { !title && "Upload Image" }
                </button>
            )}

        </IKContext>
    )
}