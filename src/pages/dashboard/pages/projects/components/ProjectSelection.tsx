import { Link, useNavigate } from "react-router-dom"

import { InfoTooltip } from "../../../../../components/InfoTooltip"
import { Share } from "../../../../../components/Share"

import { Project } from "../../../../../domain/projects/Project.interface"
import { ProjectMember } from "../../../../../domain/projects/ProjectMember.interface"
import { useProjectApi } from "../../../../../adapters/api/useProjectApi"
import { useEffect, useState } from "react"

export const ProjectSelection = ( props: { selection: Project } ) => {

    const { leaveProject } = useProjectApi();

    const navigate = useNavigate();

    const [admin, setAdmin] = useState<ProjectMember>();

    const handleLeave = () => {
        leaveProject(props.selection.idProject);
        navigate(0);
    }

    useEffect(() => {
        let admin = props.selection.members.find( elem => elem.idRole = "1");
        if( admin ) {
            setAdmin(admin);
        }
    }, [props.selection.name]);

    return (
        <div className="bg-white dark:bg-[#28292d] flex-1 min-w-fit w-3/12 rounded-xl p-8 flex flex-col justify-between relative">
            <div className="absolute top-5 right-4">
                <Share link="url_proyecto_invitación" />
            </div>
            <div className="flex flex-col items-center gap-8">

                {/* Icon (comprobar si tiene icono, si no tiene, dejar el div de abajo) */}
                { props.selection ? (
                    <div className="bg-gray-200 dark:bg-[#202124] w-32 aspect-square rounded-full flex justify-center items-center">
                        <i className="fa-solid fa-diagram-project text-black dark:text-white text-3xl"></i>
                    </div>
                ) :(
                    <div className="bg-green-700 w-32 aspect-square rounded-full"></div>
                )}

                {/* Info */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-black dark:text-white text-3xl leading-none">{props.selection.name}</p>
                    <p className="text-black dark:text-white/50 text-center leading-none">{props.selection.description}</p>
                </div>

                {/* ProjectMembers */}
                <div className="flex flex-col w-full gap-1">
                    {/* Admin */}
                    <div className="bg-gray-200 dark:bg-[#202124] w-full flex flex-col items-center gap-3 p-4 pt-5 rounded-t-xl">
                        { admin && (

                            <InfoTooltip 
                                title={admin.name}
                                target={
                                    <div>
                                        <i className="fa-solid fa-crown absolute -top-2 -right-1.5 text-xl text-yellow-500 rotate-35"></i>
                                        <img className="w-12 rounded-full" src={admin.photo} />
                                    </div>
                                } 
                            />
                                    
                        )}
                        <p className="text-black dark:text-white leading-none">Members</p>
                    </div>
                    {/* Members */}
                    <div className="bg-gray-200 dark:bg-[#202124] w-full flex flex-wrap justify-center items-center p-4 gap-2 rounded-b-xl">
                        { props.selection.members && props.selection.members.map( member => {

                            if( admin ) {
                                if( admin.id != member.id ) {
                                    return (
                                        <InfoTooltip 
                                            key={member.name}
                                            title={member.name}
                                            // Aquí iría la foto
                                            target={
                                                <img className="w-12 rounded-full" src={member.photo} />
                                            } 
                                        />
                                    )
                                }
                            } else {
                                return (
                                    <InfoTooltip 
                                        key={member.name}
                                        title={member.name}
                                        // Aquí iría la foto
                                        target={
                                            <img className="w-12 rounded-full" src={member.photo} />
                                        } 
                                    />
                                )
                            }
                            
                        })}
                        
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap gap-3 mt-8">
                <Link to={`/project/${props.selection.idProject}/dashboard`} className="flex-auto btn btn-primary !bg-green-700 hover:!bg-green-800 !px-2">Open Project</Link>
                <button 
                    onClick={handleLeave}
                    className="w-fit btn btn-primary !bg-red-700 hover:!bg-red-800 aspect-square !px-0"
                >
                    <i className="fa-solid fa-right-from-bracket"></i>
                </button>
            </div>
        </div>
    )
}