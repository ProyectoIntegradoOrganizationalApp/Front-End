import { useEffect, useState } from "react";

import { NavLink, useLocation } from "react-router-dom"

import { toast } from "react-toastify";

import { useNotificationApi } from "../../../adapters/api/useNotificationApi";

import { useNavigate } from "react-router-dom";

import { useModal } from "../../../hooks/useModal";
import { MainItem } from "../../../components/list-items/MainItem";
import { State } from "../../../components/State";
import AddButton from "../../../components/buttons/AddButton";
import RemoveButton from "../../../components/buttons/RemoveButton";

import { Profile } from "../../../domain/profile/Profile.interface";

interface ProfileBadgeProps {
    profile: Profile | undefined,
    logout: () => void,
}

export const ProfileBadge: React.FC<ProfileBadgeProps> = ({ profile, logout }) => {
    // Con esto haciendo un .pathname() puedes sacar si es / y renderizar una cosa u otra
    let location = useLocation();

    const { openModal } = useModal();

    const { data, error, loading, triggerRequest, refreshData } = useNotificationApi(true);

    const navigate = useNavigate();

    useEffect(() => {
        // Mensaje de error
        if( error && error.error ) {
            toast.error(error.message)
        }

        // Mensaje de información
        if( error && !error.error ) {
            toast.info(error?.message)
        }
        
    }, [error?.error])

    return (
        <div className="w-full relative">
            {/* Account */}
            <div className={'dropdown dropdown-top h-fit hover:bg-grey flex'} >
                <button className="btn !p-0 !bg-transparent border-none flex flex-nowrap justify-start items-center gap-2.5 normal-case flex-1 !h-[unset] !min-h-[unset]">
                    { profile && (
                        <img 
                            src={profile.user.photo}
                            className="!w-11 !aspect-square object-cover !h-[unset] !min-h-[unset]" 
                        />
                    )}
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
                    <div id="scrollbar" className="flex flex-col bg-white dark:bg-slate-800 p-7 max-[500px]:p-4 gap-2 max-h-[1000px]">
                        { data && (
                            <>
                                <h1>Friends</h1>
                                {  data.friends.map(( noti, index ) => {
                                        return(
                                            <div className="[&_div]:bg-gray-200 [&_div]:dark:bg-slate-900 [&_div]:items-start [&_div]:p-1.5">
                                                <MainItem 
                                                    item={{
                                                        name: noti.title,
                                                        description: noti.message
                                                    }} 
                                                    descriptionBottom={true} 
                                                >
                                                    <AddButton 
                                                        cb={() => {
                                                            triggerRequest({
                                                                type: "friend",
                                                                userId: noti.idUser,
                                                                action: "accept"
                                                            });

                                                            data.friends.splice(index, index + 1);
                                                            
                                                        }}
                                                    />

                                                    <RemoveButton
                                                        cb={() => {
                                                            triggerRequest({
                                                                type: "friend",
                                                                userId: noti.idUser,
                                                                action: "deny"
                                                            });
                                                            
                                                            data.friends.splice(index, index + 1);
                                                        }}
                                                    />
                                                </MainItem> 
                                            </div>
                                        )
                                    })
                                }
                                <h1>Projects</h1>
                                {  data.projects.map(( noti, index ) => {
                                        return(
                                            <div className="[&_div]:bg-gray-200 [&_div]:dark:bg-slate-900 [&_div]:items-start [&_div]:p-1.5">
                                                <MainItem 
                                                    item={{
                                                        name: noti.title,
                                                        description: noti.message
                                                    }} 
                                                    descriptionBottom={true} 
                                                >
                                                    <AddButton 
                                                        cb={() => {
                                                            triggerRequest({
                                                                type: "Project",
                                                                userId: noti.idUser,
                                                                projectId: noti.idProject,
                                                                action: "accept"
                                                            })

                                                            data.friends.splice(index, index + 1);
                                                        }}
                                                    />

                                                    <RemoveButton
                                                        cb={() => {
                                                            triggerRequest({
                                                                type: "Project",
                                                                userId: noti.idUser,
                                                                projectId: noti.idProject,
                                                                action: "deny"
                                                            });

                                                            data.friends.splice(index, index + 1);
                                                        }}
                                                    />
                                                </MainItem> 
                                            </div>
                                        )
                                    })
                                
                                }
                            </>
                            
                        )}
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