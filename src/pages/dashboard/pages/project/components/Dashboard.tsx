import { InfoTooltip } from "../../../../../components/InfoTooltip"
import { TaskLog } from "../../../../../components/TaskLog"
import { Activity } from "../../profile/components/Activity"
import { Statistics } from "../../profile/components/Statistics"

export function Dashboard(props: { project: string }) {
    return (
        <>
            <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 gap-2 w-full h-full min-[500px]:rounded-xl">
                <div className="w-full rounded-xl flex flex-col justify-between gap-4 h-full">
                    <div className="flex gap-4">
                        <div className="flex flex-col gap-4 w-4/12">
                            <div className="[&_.statisticss]:bg-white dark:[&_.statisticss]:!bg-slate-800">
                                <Statistics
                                    title="Total Pending Tasks"
                                    amount={132}
                                />
                            </div>
                        </div>
                        <div className="bg-slate-800 rounded-xl w-5/12 p-4">

                        </div>
                    </div>
                    <div className="bg-slate-600 rounded-xl w-full h-fit relative">
                        <div className="bg-slate-800 flex items-center justify-center w-full h-16 rounded-t-xl relative text-white text-base">
                            <div className="absolute top-5 left-4">
                                <InfoTooltip position="right" title="Task history displaying the latest tasks" />
                            </div>
                            Task History
                            <div className="absolute top-5 right-4">
                                {/* <SettingsIcon/> */}
                            </div>
                        </div>
                        <table className="table table-zebra !rounded-none w-full h-full gap-2.5 text-left">
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