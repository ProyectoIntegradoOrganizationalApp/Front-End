import { InfoTooltip } from "../../../../../components/InfoTooltip"
import { Activity } from "../../profile/components/Activity"
import { Statistics } from "../../profile/components/Statistics"

export function Dashboard(props: { project: string }) {
    return (
        <>
            <div className="bg-gray-300 dark:bg-slate-700 p-4 gap-2 w-full h-full rounded-xl">
                <div className="w-full rounded-xl flex flex-col gap-4">
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
                    <div className="bg-slate-700 rounded-xl w-full h-full relative">
                        <div className="btn flex justify-center items-center !w-10 min-h-fit h-fit rounded-xl !aspect-square border-none bg-slate-800 absolute bottom-4 right-4">
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
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}