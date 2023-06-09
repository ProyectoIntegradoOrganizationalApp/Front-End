// React
import { useEffect, useState } from 'react';

// Hooks
import { useUser } from '../../../../hooks/useUser';
import { useFriendApi } from '../../../../adapters/api/useFriendApi';

// Componentes
import { Tabs } from '../../../../components/Tabs';
import { Searcher } from '../../../../components/Searcher';
import { DirectMessages } from './components/DirectMessages';
import { MainItem } from '../../../../components/list-items/MainItem';
import RemoveButton from '../../../../components/buttons/RemoveButton';
import AddButton from '../../../../components/buttons/AddButton';

import { toast } from "react-toastify";
import MessageButton from '../../../../components/buttons/MessageButton';
import { useWebsocket } from '../../../../adapters/useWebsocket';

export function Friends() {

    const [tab, setTab] = useState<string>("all");

    const { send } = useWebsocket("ws://localhost:9001");

    const { friendData, userData, error, loading, addFriend, removeFriend, fetchUsers } = useFriendApi(true);

    useEffect(() => {
        if( error?.error ) {
            toast.error(error?.message)
        }

        if( !error?.error ) {
            toast.info(error?.message);
        }
    }, [error?.error]);

    return (
        <div className="h-full bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex flex-wrap content-start">
            <div className="h-full flex-1 bg-gray-200 dark:bg-slate-800 min-[1085px]:rounded-l-xl p-4 flex flex-col gap-10 max-[835px]:hidden">
                <DirectMessages />
            </div>
            <div className="h-full flex-[4.65] bg-gray-300 dark:bg-slate-700 min-w-fit rounded-r-xl flex flex-col">
                <div className="bg-gray-200 dark:bg-slate-800 w-full py-3 pr-5 min-[1085px]:rounded-tr-xl max-[500px]:px-3 max-[835px]:px-5 flex justify-between items-center gap-2">
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-user-group" title="Friends" links={[
                        {
                            url: "all",
                            name: "All"
                        },
                        {
                            url: "online",
                            name: "Online"
                        },
                        {
                            url: "pending",
                            name: "Pending"
                        }
                    ]} />
                    <i className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all"></i>
                </div>
                <div className="m-4 max-[500px]:m-2 flex flex-col gap-4 max-[500px]:gap-2 max-[500px]:gap-2">
                    <Searcher 
                        bg="bg-white dark:bg-slate-800" 
                        placeholder="Search users..." 
                        cb={fetchUsers}
                    />

                    { userData && userData.length > 0 && (
                        userData.map( user => {
                            return (
                                <MainItem
                                    key={user.id}
                                    item={{
                                        name: user.name+" "+user.lastname,
                                        description: "Level "+user.level, 
                                        icon: user.photo
                                    }}
                                >
                                    <AddButton 
                                        cb={() => {
                                            addFriend(user.id);
                                        }}
                                    /> 
                                </MainItem>
                            )
                        })
                    )}

                    <div className="flex flex-col gap-3">
                        { friendData && (
                            friendData.map( (friend, index) => {
                                return (
                                    <MainItem
                                        key={index}
                                        item={{
                                            name: friend.name, 
                                            icon: friend.photo
                                        }}
                                    >

                                        <MessageButton 
                                            cb={() => {
                                                // Crear mensaje
                                                // Redirigir al mensaje
                                            }}
                                        />
                                        
                                        <RemoveButton 
                                            cb={() => {
                                                removeFriend(friend.idfriend);
                                            }}
                                        /> 
                                    </MainItem>
                                )
                            })
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}