import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { useProjectsApi } from '../../../../adapters/api/useProjectsApi';

import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';
import { Apps } from './components/Apps';
import { Dashboard } from './components/Dashboard';
import { Members } from './components/Members';

import { Project } from '../../../../domain/projects/Project.interface';

export function Project() {

    const [project, setProject] = React.useState<Project>();
    const [tab, setTab] = React.useState<string>("dashboard");

    const { data, error, loading, fetchProject } = useProjectsApi(false);

    let { name } = useParams();
    React.useEffect(() => {
        if (name) {
            fetchProject(name);
        } else {

        }
    }, []);

    React.useEffect(() => {
        if (data && "idProject" in data) {
            setProject(data);
        }
    }, [data])

    return (
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
                        name: "xd"
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <div className="flex items-center justify-between pr-2 gap-2">
                    <Tabs
                        tab={tab}
                        setTab={setTab}
                        icon="fa-solid fa-list-check"
                        title={"project?.name"}
                        links={[
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
                        ]}
                    />

                    <div className="flex gap-2 justify-end max-[450px]:w-full max-[500px]:absolute bottom-5 right-5">
                        {tab == "apps" &&
                            <Link to="/project/ptoelquelolea/store">
                                <div
                                    className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 dark:text-white hover:bg-blue-800">
                                    <i className="fa-solid fa-bag-shopping text-white"></i>
                                </div>
                            </Link>
                        }

                    </div>
                </div>
                {/* En vez de project como string, pasarle el id y 
                    cargar sus componentes */}

                {/* DASHBOARD TAB */}
                {tab == "dashboard" &&
                    <Dashboard project="ptoelquelolea" />
                }
                {/* APPS TAB */}
                {tab == "apps" &&
                    <Apps project="ptoelquelolea" />
                }
                {/* MEMBERS TAB */}
                {tab == "members" &&
                    <Members project="ptoelquelolea" />
                }
            </div>
        </div >
    )
}