// React
import { useState } from 'react';

// Componentes
import { Tabs } from '../../../../components/Tabs';
import { Searcher } from '../../../../components/Searcher';
import { DirectMessages } from './components/DirectMessages';
import { Item } from '../../../../components/Item';

export function Friends() {

    const [tab, setTab] = useState<string>("all");

    return (
        <>
            <div className="bg-gray-200 dark:bg-slate-800 w-full rounded-xl flex">
                <div className="bg-gray-200 dark:bg-slate-800 w-1/5 rounded-l-xl p-4 flex flex-col gap-10">
                    <DirectMessages />
                </div>
                <div className="bg-gray-300 dark:bg-slate-700 w-4/5 rounded-r-xl flex flex-col">
                    <div className="bg-gray-200 dark:bg-slate-800 w-full py-3 pr-5 flex justify-between items-center gap-2">
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
                            },
                            {
                                url: "blocked",
                                name: "Blocked"
                            }
                        ]} />
                        <i className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all"></i>
                    </div>
                    <div className="m-4 flex flex-col gap-4">
                        <Searcher bg="bg-white dark:bg-slate-800" placeholder="Search friends..." />
                        <div className="flex flex-col gap-3">
                            <Item title="Firebloh" description="sometimes world feels like on fire..." tools={[
                                {
                                    type: "button",
                                    action: "message",
                                    icon: "fa-solid fa-message",
                                    color: "bg-slate-700",
                                    target: "message/idFriend"
                                },
                                {
                                    type: "button",
                                    action: "remove",
                                    icon: "fa-solid fa-trash",
                                    color: "bg-red-700",
                                    target: "remove/idFriend"
                                }
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}