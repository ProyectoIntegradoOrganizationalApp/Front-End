// React
import { useState } from 'react';
import { Profile } from '../../../../../../domain/profile/Profile.interface';
import React from 'react';

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */
export const MyAccount: React.FC<{data: Profile}> = ( data ) => {

    const [tab, setTab] = useState<string>("account");

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [last_name, setLastName] = useState<string>('');
    const [prefix, setPrefix] = useState<string>('+34');
    const [phone_number, setPhoneNumber] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    React.useEffect(() => {
        setEmail(data.data.user.email);
        
    }, [data.data.user.id])

    return (
        <div className="flex-1 flex flex-col justify-between min-[811px]:mt-9 gap-5">
            <div id="scrollbar" className="flex-1 flex flex-wrap items-start content-start gap-5 text-black dark:text-white">
                <div className="flex-1 basis-full flex flex-col gap-2 h-fit">
                    <label htmlFor="avatar">Avatar</label>
                    <input type="file" name="avatar" className="file-input !outline-none bg-gray-300 dark:bg-slate-700 !border-none w-full h-fit" />
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
                <div className="flex-1 basis-full flex flex-col gap-2">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        placeholder="Enter description"
                        maxLength={60}
                        className={`flex-1 input input-bordered border-none bg-gray-300 dark:bg-slate-700 p-4 resize-none`}
                        value={description}
                        onChange={event => {
                            setDescription(event.target.value);
                        }}
                    />
                </div>
            </div>
            <div className="flex justify-between gap-2">
                <button className="btn btn-primary w-fit !bg-green-700 hover:!bg-green-800">
                    Update
                </button>
                <button className="btn btn-primary w-fit">
                    Cancel
                </button>
            </div>
        </div>
    )
}