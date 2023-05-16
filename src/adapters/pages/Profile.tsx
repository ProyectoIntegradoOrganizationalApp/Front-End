// React
import { useEffect, useState } from 'react';

// Interfaces
import { MyCalendar } from '../../domain/Calendar.interface';
import { UserActivity } from '../../domain/UserActivity.interface';
import { Profile } from '../../domain/Profile.interface';

// Componentes
import { Statistics } from '../components/profile/Statistics';
import { Activity } from '../components/profile/Activity';
import { Calendar } from '../components/profile/Calendar';
import { InfoTooltip } from '../components/InfoTooltip';
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { Item } from '../components/Item';
import { Link, useOutletContext } from 'react-router-dom';
import { Sidebar } from '../components/dashboard/Sidebar';
import { DashboardBox } from '../components/dashboard/DashboardBox';

// Hooks
import { useModal } from '../../application/customHooks/useModal';

const date = new Date();
function GenerateMonthYear(): string {
    const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
    const month = formatter.format(date);
    const year = date.getFullYear();
    return month + " - " + year;
}

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

function getFirstDayName(date: Date) {
    return date.getDay();
}

function GenerateCalendar(): MyCalendar {
    const currentDay = date.getDate();
    const pastDays = [];
    const futureDays = [];
    const daysMonth = daysInMonth(date.getMonth() + 1, date.getFullYear());

    // Past days
    let pastDay = 1;
    while (pastDay < currentDay) {
        pastDays.push(pastDay);
        pastDay++;
    }

    // Future days
    let futureDay = currentDay + 1;
    while (futureDay <= daysMonth) {
        futureDays.push(futureDay);
        futureDay++;
    }


    return {
        firstDay: getFirstDayName(new Date(date.getFullYear(), date.getMonth(), 1)) + 1,
        pastDays: pastDays,
        currentDay: currentDay,
        futureDays: futureDays
    };
}

export function Profile() {
    const [daily, setDaily] = useState<number>(0);
    const [weekly, setWeekly] = useState<number>(0);

    const { openModal } = useModal();

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
        <>
            <AchievementsInfo
                data={data}
            />
            <div className="w-3/4 rounded-xl flex flex-col gap-6">
                <div className="flex gap-6">
                    <div className="flex flex-col gap-6 w-4/12">
                        <Statistics
                            title="Weekly Tasks"
                            amount={weekly}
                        />
                        <Statistics
                            title="Daily Tasks"
                            amount={daily}
                        />

                    </div>
                    <div className="bg-slate-800 rounded-xl w-5/12 p-4">
                        <Activity
                            title="Daily Activity"
                            activity={activity}
                        />
                    </div>
                    <div className="bg-slate-800 rounded-xl w-3/12 p-4">
                        <Calendar monthYear={GenerateMonthYear()} calendar={GenerateCalendar()} />
                    </div>
                </div>
                <div className="bg-slate-700 rounded-xl w-full h-full relative">
                    {/* Create Project */}
                    <div onClick={() => openModal({
                        isOpen: true,
                        type: "crud",
                        title: "Create Project",
                        content: [
                            {
                                discriminator: "crud",
                                type: "text",
                                name: "title",
                                placeholder: "Enter title"
                            },
                            {
                                discriminator: "crud",
                                type: "text",
                                name: "description",
                                placeholder: "Enter description"
                            }
                        ]
                    })} className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-slate-800 absolute bottom-4 right-4">
                        <i className="fa-solid fa-plus text-white"></i>
                    </div>
                    <div className="bg-slate-800 flex items-center justify-center w-full h-16 rounded-t-xl relative text-white text-base">
                        <div className="absolute top-5 left-4">
                            <InfoTooltip title="All your projects" />
                        </div>
                        Your Projects
                        <div className="absolute top-5 right-4">
                            {/* <SettingsIcon/> */}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 p-4">
                        {data?.projects.map(project => {
                            return (
                                <Item key={project.id} title={project.name} description="nada más que comentar" tools={[
                                    {
                                        action: "view",
                                        icon: "fa-solid fa-eye",
                                        color: "bg-blue-700",
                                        target: "view/idProyect"
                                    },
                                    {
                                        action: "edit",
                                        icon: "fa-solid fa-pen-to-square",
                                        color: "bg-green-700",
                                        target: "edit/idProyect"
                                    },
                                    {
                                        action: "remove",
                                        icon: "fa-solid fa-trash",
                                        color: "bg-red-700",
                                        target: "remove/idProyect"
                                    }
                                ]} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}