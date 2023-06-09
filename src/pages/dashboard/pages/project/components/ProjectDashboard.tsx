import { useEffect, useState } from "react";

import { InfoTooltip } from "../../../../../components/InfoTooltip"
import { TaskLog } from "../../../../../components/TaskLog"
import { Statistics } from "../../profile/components/Statistics"

import foto from "../../../../../assets/foto.png";
import { Project } from "../../../../../domain/projects/Project.interface";
import { useOutletContext } from "react-router";
import { Pie, Bar } from "react-chartjs-2";
import useChart from "../../../../../hooks/useChart";

/**
 *  Componente que es la vista del dashboard de un proyecto.
 *  Muestra información acerca de ese proyecto.
 * 
 *  @returns React.FC
 */
export const ProjectDashboard: React.FC = () => {

    // Recogemos las props que nos llegan desde el router
    const project: Project = useOutletContext();

    // Recogemos las charts
    const { pieChart, barChart } = useChart();
    const { pieChartData, pieChartOptions } = pieChart({ completed: 5, uncompleted: 2});
    const { barChartData, barChartOptions } = barChart([12, 19, 3, 5, 2, 13]);

    const logs = [
        {
            task: "finished",
            title: "Maquetar timeline",
            user: "Pablo Valderas",
            date: new Date("June 15 2023 18:30"), 
        },
        {
            task: "finished",
            title: "Arreglar Endpoint users",
            user: "Christian Josué",
            date: new Date("June 17 2023 12:30"), 
        },
        {
            task: "workingon",
            title: "Arreglar estilos tabla",
            user: "Pablo Valderas",
            date: new Date("June 13 2023 11:30"), 
        },
        {
            task: "workingon",
            title: "Maquetar videos",
            user: "Pablo Valderas",
            date: new Date("June 12 2023 14:50"), 
        },
        {
            task: "workingon",
            title: "Arreglar Achievements",
            user: "Miguel García",
            date: new Date("June 11 2023 1:30"), 
        }
    ];

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange)

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const tickColor = isDarkMode ? 'white' : 'black';

    return (
        <>
            <div className="flex-1 flex flex-wrap gap-4 max-[500px]:gap-2">
                <div className="flex-1 flex flex-col items-center justify-start min-w-fit bg-white dark:!bg-[#202124] !rounded-xl pb-5">
                    <div className="[&_div]:bg-white [&_div]:dark:bg-[#202124]">
                        <Statistics
                            title="Total Tasks"
                            amount={132}
                        />
                    </div>
                    <div className="w-[9rem] aspect-square">
                        { pieChartData && (
                            <Pie
                                data={pieChartData}
                                options={pieChartOptions}
                            />
                        )}
                    </div>
                </div>
                <div className="bg-white dark:bg-[#202124] rounded-xl flex-[7] p-4 w-full">
                    { barChartData && (
                        <Bar 
                            data={barChartData}
                            options={barChartOptions}
                        />
                    )}
                </div>
                <div className="bg-white dark:bg-[#202124] text-black dark:text-white rounded-xl flex-[1] min-w-fit flex flex-col items-center justify-center p-4 py-7 gap-12 relative">
                    <div className="absolute top-4 left-4">
                        <InfoTooltip position="left" title="Most Valuable Member (most tasks done this month)" />
                    </div>
                    <div className="relative translate-y-[1.4rem]">
                        <i className="fa-solid fa-crown text-yellow-500 scale-[2] rotate-[26deg] absolute -top-3 right-2"></i>
                        <img src={foto} className="w-20 aspect-square rounded-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <p className="text-2xl leading-none"><b>MVM</b></p>
                        <p className="leading-none">Pablo Valderas</p>
                        <p className="text-base leading-none"><b>21 Tasks</b></p>
                    </div>
                </div>
            </div>
            <div className={`flex-1 bg-white dark:bg-slate-700 rounded-xl relative flex flex-col`}>
                <div className="bg-white dark:bg-[#202124] flex items-center justify-center w-full h-14 rounded-t-xl relative text-black dark:text-white text-base">
                    <div className="absolute top-[1.09rem] left-4">
                        <InfoTooltip position="right" title="Task history displaying the latest tasks" />
                    </div>
                    Task History
                </div>
                <table className="table table-zebra !rounded-xl w-full h-full gap-2.5 text-left relative">
                    <thead>
                        <tr>
                            <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold">
                                Title
                            </th>
                            <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold">
                                User
                            </th>
                            <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold">
                                Created Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* FOREACH LOG */}

                        { logs && logs.map( log => {
                            return (
                                <tr>
                                    <TaskLog
                                        task={log.task}
                                        title={log.title}
                                        user={log.user}
                                        date={log.date}
                                    />
                                </tr> 
                            )
                        })}
                        
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}