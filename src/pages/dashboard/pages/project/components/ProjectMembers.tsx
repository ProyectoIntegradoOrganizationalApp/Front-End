import { MainItem } from "../../../../../components/list-items/MainItem";

export function ProjectMembers(props: { project: string }) {
    return (
        <>
            <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 flex flex-col gap-2 w-full h-full min-[500px]:rounded-xl">
                {/* Foreach (Members) */}
                <MainItem 
                    item={{name: "Firebloh", description: "", icon: ""}}
                    descriptionBottom={true}
                >
                </MainItem>
                
            </div>
        </>
    )
}