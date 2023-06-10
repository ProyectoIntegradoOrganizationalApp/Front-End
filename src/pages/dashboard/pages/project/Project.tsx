import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';

import { Project } from '../../../../domain/projects/Project.interface';
import { useProjectApi } from '../../../../adapters/api/useProjectApi';

export function Project() {

    const [project, setProject] = React.useState<Project>();
    const [tab, setTab] = React.useState<string>("dashboard");

    const { data, error, loading, fetchProject } = useProjectApi();

    let { name } = useParams();
    React.useEffect(() => {
        if (name) {
            fetchProject(name);
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
                        name: `${project?.name}`
                    }
                ]} />
            </div>
            <div className="bg-gray-200 dark:bg-slate-800 w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
                <div className="flex items-center justify-between pr-2 gap-2">
                    <Tabs
                        tab={tab}
                        setTab={setTab}
                        icon="fa-solid fa-list-check"
                        title={project?.name}
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
                            <Link to={`/project/${project?.idProject}/store`}>
                                <div
                                    className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 dark:text-white hover:bg-blue-800">
                                    <i className="fa-solid fa-bag-shopping text-white"></i>
                                </div>
                            </Link>
                        }

                    </div>
                </div>
                <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 gap-4 w-full h-full rounded-xl flex flex-col overflow-y-scroll">
                    <Outlet context={project} />
                </div>
                
            </div>
        </div >
    )
}