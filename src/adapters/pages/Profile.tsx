import { Navigate } from 'react-router-dom';

import { MyCalendar } from '../../domain/Calendar.interface';

import { useUser } from "../../application/customHooks/useUser";

import { Sidebar } from "../components/dashboard/Sidebar";
import { DashboardBox } from '../components/dashboard/DashboardBox';
import { Statistics } from '../components/profile/Statistics';
import { Activity } from '../components/profile/Activity';
import { Calendar } from '../components/profile/Calendar';
import { InfoTooltip } from '../components/InfoTooltip';
import { AchievementsInfo } from '../components/achievements/AchievementsInfo';
import { Item } from '../components/Item';

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

    console.log(getFirstDayName(new Date(date.getFullYear(), date.getMonth(), 1)))

    return {
        firstDay: getFirstDayName(new Date(date.getFullYear(), date.getMonth(), 1)) + 1,
        pastDays: pastDays,
        currentDay: currentDay,
        futureDays: futureDays
    };
}

export function Profile() {

    const { user } = useUser();

    if( !user ) {
        return <Navigate to="/login" />
    }

    const activity = {

    };

    return (
        <>
            <Sidebar parent="dashboard">
                <DashboardBox>
                    <AchievementsInfo level={100} rank="Noobie"/>
                    <div className="w-3/4 rounded-xl flex flex-col gap-6">
                        <div className="flex gap-6">
                            <div className="flex flex-col gap-6 w-4/12">
                                <Statistics title="Weekly Tasks" amount={13} />
                                <Statistics title="Daily Tasks" amount={5} />
                            </div>
                            <div className="bg-slate-800 rounded-xl w-5/12 p-4">
                                <Activity title="Daily Activity" activity={activity} />
                            </div>
                            <div className="bg-slate-800 rounded-xl w-3/12 p-4">
                                <Calendar monthYear={GenerateMonthYear()} calendar={GenerateCalendar()} />
                            </div>
                        </div>
                        <div className="bg-slate-700 rounded-xl w-full h-full">
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
                                <Item title="ptoelquelolea" description="nada más que comentar" tools={[ 
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
                                    },
                                ]}/>
                            </div>
                        </div>
                    </div>
                </DashboardBox>
            </Sidebar>
        </>
    )
}