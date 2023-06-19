import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { MainItem } from "../../../../../components/list-items/MainItem";

import { Project } from "../../../../../domain/projects/Project.interface";
import { Searcher } from "../../../../../components/Searcher";

import { useProjectMemberApi } from "../../../../../adapters/api/useProjectMemberApi";

import AddButton from "../../../../../components/buttons/AddButton";
import RemoveButton from "../../../../../components/buttons/RemoveButton";
import { toast } from "react-toastify";

export const ProjectMembers: React.FC = () => {

    const project: Project = useOutletContext();

    const { userData, loading, error, addUser, removeUser, fetchUsers } = useProjectMemberApi();

    const searchUser = ( name: string ) => {
        fetchUsers(name)
    }

    useEffect(() => {
        if( error && error?.error) {
            toast.error(error.message);
        }

        if( error && !error?.error ) {
            toast.success(error.message);
        }        
    }, [error?.error])

    return (
        <div className="flex flex-col gap-2 w-full h-full min-[500px]:rounded-xl">
            <Searcher
                bg={""}
                cb={searchUser} 
                placeholder="Search Users"
            />
            { userData && (
                userData.map( user => {
                    // Si el usuario no está en el proyecto
                    if( !project.members.find( member => member.id === user.id) ) {
                        return (
                            <MainItem 
                                key={user.id}
                                item={{name: user.name, description: user.lastname, icon: user.photo}}
                                descriptionBottom={true}
                            >
    
                                { project && !project.members.find( member => member.id === user.id) && (
                                    <AddButton 
                                        cb={() => {
                                            addUser(user.id, project.idProject);
                                        }}
                                    />
                                )}
    
                            </MainItem>
                        )
                    }
                })
            )}
            { project && project.members.map(( elem ) => {
                return (
                    <MainItem 
                        key={elem.id}
                        item={{name: elem.name, description: elem.role, icon: elem.photo}}
                        descriptionBottom={true}
                    >
                        {/* Si es el propietario puede eliminar */}
                        { project && project.owner && elem.id != project.idUser && (
                            <RemoveButton 
                                cb={() => {
                                    removeUser(elem.id, project.idProject);
                                }}
                            />
                        )}

                    </MainItem>
                )
            })}
        </div>
    )
}