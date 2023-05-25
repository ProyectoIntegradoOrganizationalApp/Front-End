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
                        <Searcher bg="bg-white dark:bg-slate-800" placeholder="Search friends..." />
                        <div className="flex flex-col gap-3">
                            <Item title="Firebloh" description="sometimes world feels like on fire..." tools={[
                                {
                                    type: "button",
                                    action: "message",
                                    icon: "fa-solid fa-message",
                                    target: "message/idFriend"
                                },
                                {
                                    type: "button",
                                    action: "remove",
                                    icon: "fa-solid fa-trash",
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