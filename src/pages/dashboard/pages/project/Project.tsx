import React from 'react';
import { Link, NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

import { Breadcrumb } from '../../../../components/Breadcrumb';
import { Tabs } from '../../../../components/Tabs';

import { Project } from '../../../../domain/projects/Project.interface';
import { useProjectApi } from '../../../../adapters/api/useProjectApi';

export function Project() {

    const [project, setProject] = React.useState<Project>();
    const [tab, setTab] = React.useState<string>("Dashboard");
    
    const { data, error, loading, fetchProject } = useProjectApi();
    const navigate = useNavigate();
    
    // Recogemos el proyecto
    let { projectId } = useParams();
    React.useEffect(() => {
        if( projectId ) {
            fetchProject(projectId);
        }
    }, [projectId]);

    React.useEffect(() => {
        document.title = 'Project - ' + name + ' | Teamer 2023';

        if (location.pathname.split('/').length <= 4) {
            navigate("dashboard"); 
            setTab("Dashboard");
        } else {
            setTab(location.pathname.split('/')[location.pathname.split('/').length-1]);
        };
        
    }, []);

    React.useEffect(() => {
        if (data && "idProject" in data) {
            console.log(data)
            setProject(data);
        }
    }, [data?.name])

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
            <div className="bg-gray-200 dark:bg-[#202124] w-full h-full rounded-xl flex flex-col gap-3 max-[500px]:gap-2 p-4 max-[500px]:p-2 pt-3 overflow-y-hidden">
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
                        {tab.toLowerCase() == "apps" &&
                            <NavLink to={`/projects/p/${project?.idProject}/store`}>
                                <div
                                    className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-blue-700 dark:text-white hover:bg-blue-800">
                                    <i className="fa-solid fa-bag-shopping text-white"></i>
                                </div>
                            </NavLink>
                        }
                    </div>
                </div>
                <div className="bg-gray-300 dark:bg-[#28292d] p-4 pr-2.5 max-[500px]:p-2 gap-4 w-full h-full rounded-xl flex flex-col overflow-y-scroll">
                    <Outlet context={project} />
                </div>
            </div>
        </div >
    )
}