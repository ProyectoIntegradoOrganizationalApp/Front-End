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
import { useModal } from '../../../../hooks/useModal';

export function Friends() {
    
    const { openModal } = useModal();
    const [tab, setTab] = useState<string>("All");

    const { send } = useWebsocket("ws://localhost:9001");

    const { friendData, userData, error, loading, addFriend, removeFriend, fetchUsers } = useFriendApi(true);

    useEffect(() => {
        document.title = 'Friends | Teamer 2023';
    }, [])

    useEffect(() => {
        if ( error && error?.error) {
            toast.error(error?.message)
        }

        if ( error && !error?.error) {
            toast.success(error?.message);
        }
    }, [error?.error]);

    return (
        <div className="h-full bg-gray-200 dark:bg-[#202124] w-full rounded-xl flex flex-wrap content-start">
            {/* <div className="h-full flex-1 bg-gray-200 dark:bg-[#202124] min-[1085px]:rounded-l-xl p-4 flex flex-col gap-10 max-[835px]:hidden">
                <DirectMessages />
            </div> */}
            <div className="h-full flex-[4.65] bg-gray-300 dark:bg-[#28292d] min-w-fit rounded-r-xl flex flex-col">
                <div className="bg-gray-200 dark:bg-[#202124] w-full py-3 pr-5 min-[1085px]:rounded-tr-xl max-[500px]:px-3 max-[835px]:px-5 flex justify-between items-center gap-2">
                    <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-user-group" title="Friends" links={[
                        { name: "All" }, { name: "Online" }, { name: "Pending" }
                    ]} />
                    
                </div>
                <div className="m-4 max-[500px]:m-2 flex flex-col gap-4 max-[500px]:gap-2">
                    <Searcher
                        bg="bg-white dark:bg-[#202124]"
                        placeholder="Search friend..."
                        cb={fetchUsers}
                    />

                    <div className="flex flex-col gap-3">
                        { userData && userData.map((user, index) => {
                            return (
                                <MainItem
                                        key={index}
                                        item={{
                                            name: user.name,
                                            icon: user.photo
                                        }}
                                    >

                                        <AddButton 
                                            cb={() => {
                                                addFriend(user.id)
                                            }}
                                        />
                                    </MainItem>
                            )
                        })}
                        { friendData && friendData.map((friend, index) => {
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
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
