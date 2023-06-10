// React
import { useState } from 'react';
import { Profile } from '../../../../../../domain/profile/Profile.interface';
import React from 'react';
import { Account } from '../../../../../../domain/account/Account.interface';
import { SaveImage } from '../../../../../../components/image-kit/SaveImage';

interface MyAccountProps {
    data: Account | undefined,
    update: ( acc: Account ) => void
}

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */
export const MyAccount: React.FC<MyAccountProps> = ({ data, update }) => {

    const [tab, setTab] = useState<string>("account");

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [prefix, setPrefix] = useState<string>('');
    const [phone_number, setPhoneNumber] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');

    /**
     *  Carga inicial de datos
     */
    React.useEffect(() => {
        if ( data ) {
            setEmail(data.email);
            setName(data.name);
            setLastName(data.lastname);
            setPrefix(data.phone.slice(0, 3));
            setPhoneNumber(data.phone.slice(3));
            setPhoto(data.photo)
        }
    }, [data?.iduser]);

    /**
     *  Función que recoge los datos del formulario y ejecuta
     *  la función del hook de account para actualizar.
     * 
     */
    const handleUpdate = () => {
        const acc: Account = {
            email: email,
            iduser: "",
            name: name,
            lastname: last_name,
            phone: phone_number,
            photo: photo
        }

        update(acc);
    }

    const photoUpdate = ( url: string ) => {
        setPhoto(url);
    }

    return (
        <div className="flex-1 flex flex-col justify-between min-[811px]:mt-9 gap-5">
            <div id="scrollbar" className="flex-1 flex flex-wrap items-start content-start gap-5 text-black dark:text-white">
                <div className="flex-1 basis-full flex flex-col gap-2 h-fit">
                    <SaveImage 
                        cb={photoUpdate}
                    />
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" name="avatar" accept=".png, .jpeg, .jpg" className="file-input !outline-none bg-gray-300 dark:bg-slate-700 !border-none w-full h-fit" />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        name="firstname"
                        placeholder="Enter first name"
                        minLength={3}
                        maxLength={20}
                        className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4`}
                        required={true}
                        value={name}
                        onChange={event => {
                            setName(event.target.value);
                        }}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Enter last name"
                        minLength={3}
                        maxLength={20}
                        className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4`}
                        required={true}
                        value={last_name}
                        onChange={event => {
                            setLastName(event.target.value);
                        }}
                    />
                </div>
                <div className="flex-1 basis-full flex max-[740px]:flex-col gap-5 h-fit">
                    <div className="flex-1 flex flex-col gap-2">
                        <label htmlFor="email">Phone number</label>
                        <div className="flex gap-5">
                            <input
                                type="text"
                                className="input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4 w-16 h-fit"
                                minLength={3}
                                maxLength={3}
                                value={prefix}
                                onChange={event => {
                                    setPrefix(event.target.value);
                                }}
                                required
                            />
                            <input
                                type="number"
                                minLength={9}
                                maxLength={9}
                                placeholder="Enter phone number"
                                value={phone_number}
                                onChange={event => {
                                    setPhoneNumber(event.target.value);
                                }}
                                className="flex-1 input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4 h-fit"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex-[2] flex flex-col gap-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            minLength={10}
                            maxLength={80}
                            className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4`}
                            required={true}
                            value={email}
                            onChange={event => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <button 
                    className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-800"
                    onClick={() => handleUpdate()}
                >
                    Update
                </button>
                <button className="btn btn-primary w-fit">
                    Cancel
                </button>
            </div>
        </div>
    )
}