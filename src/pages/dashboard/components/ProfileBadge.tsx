import { NavLink, useLocation } from "react-router-dom"

import foto from "../../../assets/foto.png";
import { User } from "../../../domain/user/User.interface";
import { useModal } from "../../../hooks/useModal";
import { MainItem } from "../../../components/list-items/MainItem";
import { InfoTooltip } from "../../../components/InfoTooltip";
import { State } from "../../../components/State";

interface ProfileBadgeProps {
    user: User | null,
    logout: () => void,
}

export const ProfileBadge: React.FC<ProfileBadgeProps> = ({ user, logout }) => {
    // Con esto haciendo un .pathname() puedes sacar si es / y renderizar una cosa u otra
    let location = useLocation();

    const { openModal } = useModal();

    // Notifications
    const removeNotification = (event: React.MouseEvent<HTMLButtonElement>) => {
        const notification = event.currentTarget.parentElement?.parentElement?.parentElement;
        notification?.remove();

        // Borrar de la bd
    }

    return (
        <div className="w-full relative">
            {/* Account */}
            <div className={'dropdown dropdown-top h-fit hover:bg-grey flex'} >
                <button className="btn !p-0 !bg-transparent border-none flex flex-nowrap justify-start items-center gap-2.5 normal-case flex-1 !h-[unset] !min-h-[unset]">
                    <img src={foto} className="!w-11 !aspect-square !h-[unset] !min-h-[unset]" />
                </button>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mb-4 p-2 bg-gray-200 dark:bg-[#28292d] w-full !z-[99999999999999] text-black dark:text-white gap-1">
                    <li>
                        <NavLink to="/profile/account" className={`justify-between !rounded-none px-2.5 py-2 text-black dark:text-white ${location.pathname != "/profile/account" ? "hover:bg-gray-300 dark:hover:bg-[#414149] active:!bg-[#414149]" : "bg-white dark:bg-[#414149]"}`}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={logout} className="flex justify-between !rounded-none px-2.5 py-2 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-[#414149] active:!bg-[#414149]">Logout <i className="fa-solid fa-right-from-bracket"></i></button>
                    </li>
                </ul>
            </div>
            {/* Notifications */}
            <button onClick={() => openModal({
                isOpen: true,
                type: "notifications",
                content:
                    <div id="scrollbar" className="flex flex-col bg-white dark:bg-[#202124] p-7 max-[500px]:p-4 gap-2 max-h-[1000px]">
                        {
                            true &&
                            <>
                                {/* FOREACH NOTIFICATION */}
                                <div className="[&_div]:bg-gray-200 [&_div]:dark:bg-[#28292d] [&_div]:items-start [&_div]:p-1.5">
                                    <MainItem item={{
                                        name: "19:45 - Created Task",
                                        description: "Pablo Valderas has created one task in 'ptoelquelolea' project"
                                    }} descriptionBottom={true} children={
                                        <i onClick={removeNotification} className="fa-solid fa-xmark  text-black dark:text-white hover:text-black/50 dark:hover:text-white/50 transition-all cursor-pointer pl-3 pr-1 pt-1.5"></i>
                                    } />
                                </div>
                                {/* ENDFOREACH */}
                            </>
                        } {
                            false &&
                            <div>
                                There are no notifications currently...
                            </div>
                        }
                    </div>
                ,
                submitText: "",
                submitAction: () => { }
            }
            )} className="btn border-none w-fit px-[1.1rem] bg-white/70 hover:bg-white dark:bg-[#414149]/40 dark:hover:bg-[#28292d] absolute right-0 -bottom-0.5">
                <i className="fa-solid fa-bell text-black dark:text-white"></i>
                <div className="absolute -top-0.5 -right-1">
                    <State color="bg-red-700" hide />
                </div>
            </button>
        </div>
    )
}