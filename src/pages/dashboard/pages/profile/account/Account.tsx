// React
import { useState } from 'react';

import { useOutletContext } from 'react-router-dom';

import { MyAccount } from './account/MyAccount';
import { Security } from './account/Security';
import { Preferences } from './account/Preferences';

import { Account as IAccount } from '../../../../../domain/account/Account.interface';

import { Profile } from '../../../../../domain/profile/Profile.interface';
import { useAccountApi } from '../../../../../adapters/api/useAccountApi';

/**
 * Componente Account, que representa la ruta /account en la cual podremos
 * ver y configurar nuestra cuenta
 * @returns React.FC
 */
export const Account: React.FC = () => {

    const [tab, setTab] = useState<string>("account");

    const context: Profile = useOutletContext();

    const { data, loading, error, updateUser } = useAccountApi(true);

    /**
     *  Función que se le pasa al componente a modo de Callback
     *  para que actualice los datos.
     * 
     *  @param data 
     */
    const update = (data: IAccount) => {
        data.iduser = context.user.id;
        console.log(data)
        updateUser(data);
    }

    return (
        <div className="w-full flex flex-wrap gap-4 max-[500px]:gap-2">
            <div className="bg-gray-200 dark:bg-[#202124] min-[1085px]:rounded-xl relative flex-1 flex flex-col items-center gap-8 py-8 min-w-[260px]">
                <div className="flex flex-col items-center gap-5 px-4">
                    {data && data.photo ? (
                        <img src={data.photo} />
                    ) : (
                        <div className="bg-green-600 w-28 aspect-square rounded-full">

                        </div>
                    )}
                    {data && data.name && (
                        <p className="text-xl leading-none text-black dark:text-white">
                            {data.name}
                        </p>
                    )}

                </div>
                <ul className="w-full flex flex-col justify-around select-none">
                    <li onClick={() => setTab("account")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "account" ? "bg-white dark:bg-[#28292d] text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-[#28292d]/60 text-black dark:text-white"}`}><i className="fa-solid fa-house w-4"></i>My Account</li>
                    <li onClick={() => setTab("security")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "security" ? "bg-white dark:bg-[#28292d] text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-[#28292d]/60 text-black dark:text-white"}`}><i className="fa-solid fa-key w-4"></i>Security</li>
                    <li onClick={() => setTab("preferences")} className={`cursor-pointer flex gap-4 items-center p-3.5 px-[1.7rem] ${tab == "preferences" ? "bg-white dark:bg-[#28292d] text-black dark:text-white" : "hover:bg-gray-300 dark:hover:bg-[#28292d]/60 text-black dark:text-white"}`}><i className="fa-solid fa-envelope w-4"></i>Preferences</li>
                </ul>
            </div>
            <div className="bg-gray-200 dark:bg-[#202124] flex-[4] h-full min-[500px]:rounded-xl flex flex-col w-full p-8">
                <p className="capitalize text-2xl text-black dark:text-white leading-none max-[811px]:hidden">{tab} Settings</p>
                {tab == "account" ? (
                    <MyAccount
                        data={data}
                        update={update}
                    />
                ) : tab == "security" ? (
                    <Security />
                ) : tab == "preferences" ? (
                    <Preferences />
                ) : <></>

                }
            </div>
        </div>
    )
}