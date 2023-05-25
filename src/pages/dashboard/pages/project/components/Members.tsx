import { Item } from "../../../../../components/Item";

export function Members(props: { project: string }) {
    return (
        <>
            <div className="bg-gray-300 dark:bg-slate-700 p-4 max-[500px]:p-2 flex flex-col gap-2 w-full h-full rounded-xl">
                {/* Foreach (Members) */}
                <Item title="Firebloh" description="sometimes world feels like on fire" tools={[
                    {
                        type: "dropdown",
                        dropdown: {
                            type: "role",
                            elements: [
                                {
                                    action: "",
                                    name: "Admin"
                                },
                                {
                                    action: "",
                                    name: "Editor"
                                },
                                {
                                    action: "",
                                    name: "Reader"
                                }
                            ]
                        }
                    },
                    {
                        type: "button",
                        action: "remove",
                        icon: "fa-solid fa-right-from-bracket",
                        target: "remove/idFriend"
                    }
                ]} />
                <Item title="maiki69" description="ceojpfa epofj eafpojea fpo" tools={[
                    {
                        type: "dropdown",
                        dropdown: {
                            type: "role",
                            elements: [
                                {
                                    action: "",
                                    name: "Admin"
                                },
                                {
                                    action: "",
                                    name: "Editor"
                                },
                                {
                                    action: "",
                                    name: "Reader"
                                }
                            ]
                        }
                    },
                    {
                        type: "button",
                        action: "remove",
                        icon: "fa-solid fa-right-from-bracket",
                        target: "remove/idFriend"
                    }
                ]} />
                {/* EndForeach */}
            </div>
        </>
    )
}