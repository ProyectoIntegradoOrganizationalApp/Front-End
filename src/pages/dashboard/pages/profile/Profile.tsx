// React
import { useEffect, useState } from 'react';

// Interfaces
import { Profile } from '../../../../domain/profile/Profile.interface';

// Componentes
import { Statistics } from './components/Statistics';
import { Activity } from './components/Activity';
import { Calendar } from './components/Calendar';
import { InfoTooltip } from '../../../../components/InfoTooltip';
import { AchievementsInfo } from '../achievements/components/AchievementsInfo';
import { MainItem } from '../../../../components/list-items/MainItem';
import { useNavigate, useOutletContext } from 'react-router-dom';

// Hooks
import { useModal } from '../../../../hooks/useModal';
import { useProfile } from '../../../../hooks/useProfile';
import { useUtils } from '../../../../hooks/useUtils';
import ShowButton from '../../../../components/buttons/ShowButton';
import { Project } from '../../../../domain/projects/Project.interface';
import { useProjectsApi } from '../../../../adapters/api/useProjectsApi';

/**
 * Componente Profile, que representa la ruta /profile/{id_user} en la cual podremos
 * ver un overview de las estadísticas del usuario.
 * @returns React.FC
 */
export function Profile() {
    const [daily, setDaily] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);
    
    const { openModal } = useModal();
    const { GenerateMonthYear, GenerateCalendar } = useProfile();

    const navigate = useNavigate();

    const profileData: Profile = useOutletContext();
    const { data, error, loading, refreshData } = useProjectsApi(true);

    // Use effect con el que calculamos el trabajo realizado.
    useEffect(() => {        
        if( data ) {
            const { getUserWork } = useUtils();
            const {commitsDaily, commitsWeekly} = getUserWork(profileData?.activity);
    
            setDaily(commitsDaily);
            setWeekly(commitsWeekly);
        }
    }, [profileData?.user.id]);

    const handleCreateProject = () => {
        refreshData();
    }

    return (
        <div className="w-full flex flex-wrap gap-4 max-[500px]:gap-2">
            <AchievementsInfo
                data={profileData}
            />
            
            <div className="flex-1 basis-[820px] h-full rounded-xl flex flex-col gap-4 max-[500px]:gap-2 w-full">
                <div className="flex flex-col lg:flex-row flex-wrap gap-4 max-[500px]:gap-2">
                    <div className="flex-[1.8] basis-[80px] flex flex-col gap-4 max-[500px]:gap-2">
                        <Statistics
                            title="Weekly Tasks"
                            amount={weekly}
                        />
                        <Statistics
                            title="Daily Tasks"
                            amount={daily}
                        />
                    </div>
                    <div className="flex-[4] flex flex-col sm:flex-row flex-wrap gap-4 max-[500px]:gap-2">
                        <div className="flex-[3] bg-gray-200 dark:bg-slate-800 min-[500px]:rounded-xl p-4 max-[500px]:p-2">
                            { profileData?.activity && (
                                <Activity
                                    title="Monthly Activity"
                                    data={profileData}
                                />
                            )}
                        </div>
                        <div className="flex-[2] bg-gray-200 dark:bg-slate-800 min-[500px]:rounded-xl p-4">
                            <Calendar 
                                monthYear={GenerateMonthYear()} 
                                calendar={GenerateCalendar()} 
                            />
                        </div>
                    </div>
                </div>

                {/* TODO => Dividir esto en componentes */}
                <div className="flex-1 min-[500px]:rounded-xl bg-gray-200 dark:bg-slate-700 flex flex-col min-h-[20rem]">
                    <div className="border-b-4 dark:border-b-0 border-white dark:bg-slate-800 flex items-center justify-between w-full min-[500px]:rounded-t-xl relative text-black dark:text-white text-base p-4">
                        <InfoTooltip title="All your projects" />
                        Your Projects
                        {/* Create Project */}
                        <i  
                            className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all" 
                            onClick={() => openModal({
                                isOpen: true,
                                type: "crudProject",
                                title: "Create Project",
                                content: [],
                                submitText: "Create Project",
                                submitAction: handleCreateProject
                            }
                        )}>
                            
                        </i>
                    </div>
                    <div id="scrollbar" className="flex flex-col gap-3 p-4 max-[500px]:p-2 min-h-[4.5rem]">
                        { data && Array.isArray(data) && data.map(( project: Project ) => {
                            return (
                                <MainItem
                                    key={project.idProject}
                                    item={project}
                                    descriptionBottom={false}
                                >
                                    <ShowButton 
                                        cb={() => {
                                            navigate(`/project/${project.idProject}/dashboard`)
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