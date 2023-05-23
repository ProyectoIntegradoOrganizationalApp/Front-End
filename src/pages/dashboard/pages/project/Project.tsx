import { useState } from 'react';
import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';
import { Link } from 'react-router-dom';
import { Apps } from './components/Apps';
import { Dashboard } from './components/Dashboard';
import { Members } from './components/Members';

export function Project() {
    const [tab, setTab] = useState<string>("dashboard");

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full">
                    <Breadcrumb breadcrumbs={[
                        {
                            icon: "fa-solid fa-diagram-project",
                            name: "Projects",
                            link: "/projects/dashboard"
                        },
                        {
                            icon: "fa-solid fa-list-check",
                            name: "ptoelquelolea"
                        }
                    ]} />
                </div>
                <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 p-4 pt-3">
                    <div className="flex items-center justify-between pr-2">
                        <Tabs tab={tab} setTab={setTab} icon="fa-solid fa-list-check" title="ptoelquelolea" links={[
                            {
                                url: "dashboard",
                                name: "Dashboard"
                            },
                            {
                                url: "apps",
                                name: "Apps"
                            },
                            {
                                url: "members",
                                name: "Members"
                            }
                        ]} />
                        <div className="flex gap-2">
                            {
                                tab == "apps" &&
                                <Link to="/project/ptoelquelolea/store">
                                    <div
                                        className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 dark:text-white hover:bg-blue-800">
                                        <i className="fa-solid fa-bag-shopping text-white"></i>
                                    </div>
                                </Link>
                            }

                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 h-full">
                        {/* En vez de project como string, pasarle el id y 
                        cargar sus componentes */}

                        {/* DASHBOARD TAB */}
                        {
                            tab == "dashboard" &&
                            <Dashboard project="ptoelquelolea" />
                        }
                        {/* APPS TAB */}
                        {
                            tab == "apps" &&
                            <Apps project="ptoelquelolea" />
                        }
                        {/* MEMBERS TAB */}
                        {
                            tab == "members" &&
                            <Members project="ptoelquelolea" />
                        }
                    </div>
                </div>
            </div >
        </>
    )
}