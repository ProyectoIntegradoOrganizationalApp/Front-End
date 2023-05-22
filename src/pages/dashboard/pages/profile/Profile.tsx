// React
import { useEffect, useState } from 'react';

// Interfaces
import { MyCalendar } from '../../../../domain/UI/Calendar.interface';
import { UserActivity } from '../../../../domain/user/UserActivity.interface';
import { Profile } from '../../../../domain/profile/Profile.interface';

// Componentes
import { Statistics } from './components/Statistics';
import { Activity } from './components/Activity';
import { Calendar } from './components/Calendar';
import { InfoTooltip } from '../../../../components/InfoTooltip';
import { AchievementsInfo } from '../achievements/components/AchievementsInfo';
import { Item } from '../../../../components/Item';
import { useOutletContext } from 'react-router-dom';

// Hooks
import { useModal } from '../../../../hooks/useModal';
import { useProfile } from '../../../../hooks/useProfile';

export function Profile() {
    const [daily, setDaily] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);
    
    const { openModal } = useModal();
    const { GenerateMonthYear, GenerateCalendar } = useProfile();

    const data: Profile = useOutletContext();

    useEffect(() => {
        if (data) {
            data.activity.map((act: UserActivity) => {
                let fechaActual = new Date();

                let primerDiaSemana = new Date(fechaActual);
                primerDiaSemana.setDate(fechaActual.getDate() - fechaActual.getDay());

                let ultimoDiaSemana = new Date(fechaActual);
                ultimoDiaSemana.setDate(fechaActual.getDate() + (6 - fechaActual.getDay()));

                let aVerificar = new Date(act.date);

                if (aVerificar.getDate() == fechaActual.getDate()) {
                    setDaily(act.commits);
                }

                if (aVerificar >= primerDiaSemana && aVerificar <= ultimoDiaSemana) {
                    setWeekly(act.commits);
                }
            })
        }
    }, [data?.user.id])

    const activity = {

    };

    return (
        <div className="w-full flex flex-wrap gap-4">
            <AchievementsInfo
                data={data}
            />
            <div className="flex-1 basis-[820px] h-full rounded-xl flex flex-col gap-4 w-full">
                <div className="flex flex-col lg:flex-row flex-wrap gap-4">
                    <div className="flex-[1.8] basis-[80px] flex flex-col gap-4">
                        <Statistics
                            title="Weekly Tasks"
                            amount={weekly}
                        />
                        <Statistics
                            title="Daily Tasks"
                            amount={daily}
                        />
                    </div>
                    <div className="flex-[4] flex flex-col sm:flex-row flex-wrap gap-4">
                        <div className="flex-[3] bg-gray-200 dark:bg-slate-800 rounded-xl p-4">
                            <Activity
                                title="Daily Activity"
                                activity={activity}
                            />
                        </div>
                        <div className="flex-[2] bg-gray-200 dark:bg-slate-800 rounded-xl p-4">
                            <Calendar monthYear={GenerateMonthYear()} calendar={GenerateCalendar()} />
                        </div>
                    </div>
                </div>
                <div className="flex-1 rounded-xl bg-gray-200 dark:bg-slate-700 flex flex-col min-h-[20rem]">
                    <div className="border-b-4 dark:border-b-0 border-white dark:bg-slate-800 flex items-center justify-between w-full rounded-t-xl relative text-black dark:text-white text-base p-4">
                        <InfoTooltip title="All your projects" />
                        Your Projects
                        {/* Create Project */}
                        <i className="fa-solid fa-plus text-black hover:text-black/50 dark:text-white cursor-pointer dark:hover:text-white/50 transition-all" onClick={() => openModal({
                            isOpen: true,
                            type: "crud",
                            title: "Create Project",
                            content: [
                                {
                                    discriminator: "crud",
                                    tag: "input",
                                    type: "text",
                                    name: "title",
                                    placeholder: "Enter title",
                                    min: 3,
                                    max: 35,
                                    required: true,
                                    width: "half"
                                },
                                {
                                    discriminator: "crud",
                                    tag: "textarea",
                                    name: "description",
                                    placeholder: "Enter description",
                                    min: 3,
                                    max: 250,
                                    width: "full"
                                }
                            ],
                            submitText: "Create Project",
                            submitAction: ""
                        })}></i>
                    </div>
                    <div id="scrollbar" className="flex flex-col gap-3 p-4 min-h-[4.5rem]">
                        {data?.projects.map(project => {
                            return (
                                <Item key={project.id} title={project.name} description="nada más que comentar" tools={[
                                    {
                                        type: "button",
                                        action: "view",
                                        icon: "fa-solid fa-eye",
                                        color: "bg-blue-700",
                                        target: "view/idProyect"
                                    },
                                    {
                                        type: "button",
                                        action: "edit",
                                        icon: "fa-solid fa-pen-to-square",
                                        color: "bg-green-700",
                                        target: "edit/idProyect"
                                    },
                                    {
                                        type: "button",
                                        action: "remove",
                                        icon: "fa-solid fa-trash",
                                        color: "bg-red-700",
                                        target: "remove/idProyect"
                                    }
                                ]} />
                            )
                        })}
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                        <Item title={"fa"} description="nada más que comentar" tools={[
                            {
                                type: "button",
                                action: "view",
                                icon: "fa-solid fa-eye",
                                color: "bg-blue-700",
                                target: "view/idProyect"
                            },
                            {
                                type: "button",
                                action: "edit",
                                icon: "fa-solid fa-pen-to-square",
                                color: "bg-green-700",
                                target: "edit/idProyect"
                            },
                            {
                                type: "button",
                                action: "remove",
                                icon: "fa-solid fa-trash",
                                color: "bg-red-700",
                                target: "remove/idProyect"
                            }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}