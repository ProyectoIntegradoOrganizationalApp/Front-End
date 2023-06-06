import { InfoTooltip } from "../../../../../components/InfoTooltip"
import { TaskLog } from "../../../../../components/TaskLog"
import { Statistics } from "../../profile/components/Statistics"
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-plugin-datalabels';
import { useEffect, useState } from "react";
import foto from "../../../../../assets/foto.png";

const getMonths = (): string[] => {
    const months: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();

    return months.slice(0, currentMonthIndex + 1);
};

export function Dashboard(props: { project: string }) {
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
            <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 gap-2 w-full h-full rounded-xl">
                <div className="w-full rounded-xl flex flex-col justify-between gap-4 max-[500px]:gap-2 h-full">
                    <div className="flex-1 flex flex-wrap gap-4 max-[500px]:gap-2">
                        <div className="flex-1 flex flex-col items-center justify-start min-w-fit bg-white dark:!bg-slate-800 !rounded-xl pb-5">
                            <div className="[&_div]:bg-white [&_div]:dark:bg-slate-800">
                                <Statistics
                                    title="Total Tasks"
                                    amount={132}
                                />
                            </div>
                            <div className="w-[9rem] aspect-square">
                                <Pie data={{
                                    labels: ['Completed', 'Incompleted'],
                                    datasets: [
                                        {
                                            data: [300, 50],
                                            backgroundColor: ['#19c37d', '#FF6384'],
                                            hoverBackgroundColor: ['#19c37d', '#FF6384'],
                                        },
                                    ],
                                }} options={{
                                    responsive: true,
                                    elements: {
                                        arc: {
                                            borderWidth: 0
                                        }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false
                                        },
                                        tooltip: {
                                            callbacks: {
                                                label: (context) => {
                                                    const label = context.label || '';

                                                    if (label) {
                                                        return ' ' + label + ': ' + context.raw;
                                                    }

                                                    return '';
                                                },
                                            },
                                        }
                                    }
                                }} />
                            </div>
                        </div>
                        <div className="bg-white dark:bg-slate-800 rounded-xl flex-[7] p-4 w-full">
                            <Bar data={{
                                labels: getMonths(),
                                datasets: [
                                    {
                                        data: [12, 19, 3, 5, 2, 13],
                                        backgroundColor: 'rgb(0, 202, 247)',
                                        borderColor: 'rgb(0, 202, 247)',
                                        borderWidth: 1
                                    },
                                ],
                            }} options={{
                                responsive: true,
                                elements: {
                                    arc: {
                                        borderWidth: 0
                                    }
                                },
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        ticks: { color: tickColor }
                                    },
                                    x: {
                                        ticks: { color: tickColor }
                                    }
                                },
                                plugins: {
                                    legend: {
                                        display: false
                                    },
                                    tooltip: {
                                        callbacks: {
                                            label: (context) => {
                                                const label = context.label || '';

                                                if (label) {
                                                    return ' ' + label + ': ' + context.raw;
                                                }

                                                return '';
                                            },
                                        },
                                    }
                                }
                            }} />
                        </div>
                        <div className="bg-white dark:bg-slate-800 text-black dark:text-white rounded-xl flex-[2] min-w-fit flex flex-col items-center justify-center p-4 gap-12 relative">
                            <div className="absolute top-4 left-4">
                                <InfoTooltip position="left" title="Most Valuable Member (most tasks done this month)" />
                            </div>
                            <div className="relative translate-y-[1.4rem]">
                                <i className="fa-solid fa-crown text-yellow-500 scale-[2.5] rotate-[26deg] absolute -top-3 right-5"></i>
                                <img src={foto} className="w-28 aspect-square rounded-full" />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4">
                                <p className="text-2xl leading-none"><b>MVM</b></p>
                                <p className="leading-none">Pablo Valderas</p>
                                <p className="text-base leading-none"><b>21 Tasks</b></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-[2] bg-white dark:bg-slate-700 rounded-xl relative">
                        <div className="bg-white dark:bg-slate-800 flex items-center justify-center w-full h-14 rounded-t-xl relative text-black dark:text-white text-base">
                            <div className="absolute top-[1.09rem] left-4">
                                <InfoTooltip position="right" title="Task history displaying the latest tasks" />
                            </div>
                            Task History
                        </div>
                        <table className="table table-zebra !rounded-xl w-full h-full gap-2.5 text-left">
                            <thead>
                                <tr>
                                    <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold">
                                        Title
                                    </th>
                                    <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold hidden sm:block">
                                        User
                                    </th>
                                    <th className="leading-none text-black dark:text-white text-base !capitalize font-extrabold">
                                        Created Date
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="scrollbar">
                                <tr>
                                    <TaskLog
                                        task="workingon"
                                        title={"Task 1"}
                                        user="Pablo Valderas"
                                        date={new Date("2022-02-02")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="finished"
                                        title={"Task 2"}
                                        user="Sergio Parejo"
                                        date={new Date("2023-01-31")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="workingon"
                                        title={"Task 1"}
                                        user="Pablo Valderas"
                                        date={new Date("2022-02-02")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="finished"
                                        title={"Task 2"}
                                        user="Sergio Parejo"
                                        date={new Date("2023-01-31")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="workingon"
                                        title={"Task 1"}
                                        user="Pablo Valderas"
                                        date={new Date("2022-02-02")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="finished"
                                        title={"Task 2"}
                                        user="Sergio Parejo"
                                        date={new Date("2023-01-31")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="workingon"
                                        title={"Task 1"}
                                        user="Pablo Valderas"
                                        date={new Date("2022-02-02")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="finished"
                                        title={"Task 2"}
                                        user="Sergio Parejo"
                                        date={new Date("2023-01-31")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="workingon"
                                        title={"Task 1"}
                                        user="Pablo Valderas"
                                        date={new Date("2022-02-02")}
                                    />
                                </tr>
                                <tr>
                                    <TaskLog
                                        task="finished"
                                        title={"Task 2"}
                                        user="Sergio Parejo"
                                        date={new Date("2023-01-31")}
                                    />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}