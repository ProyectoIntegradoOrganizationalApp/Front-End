import { useFriendApi } from "../../../adapters/api/useFriendApi";
import { Searcher } from "../../Searcher";
import AddButton from "../../buttons/AddButton";
import { MainItem } from "../../list-items/MainItem";

export function SearchUserModal(props: { content: React.ReactNode }) {
    const { userData, addFriend, fetchUsers } = useFriendApi(true);

    return (
        <div className="min-w-[800px] max-[768px]:min-w-[400px]">
            {/* Titulo */}
            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-[#202124] p-7 border-b-2 border-gray-300 dark:border-white/20">
                <p className="leading-none text-2xl">Search User</p>
            </div>

            <div className="p-7 max-[500px]:p-4 bg-white dark:bg-[#202124] flex flex-col gap-6">
                <Searcher
                    bg="bg-gray-200 dark:bg-[#28292d]"
                    placeholder="Search user..."
                    cb={fetchUsers}
                />

                {/* User's Result */}
                {
                    userData && userData.length > 0 && (
                        <div id="scrollbar" className="flex flex-col gap-2 max-h-[1000px]">
                            {userData.map(user => {
                                return (
                                    <div className="[&>_div]:bg-gray-200 [&>_div]:dark:bg-[#28292d] [&_a]:dark:bg-[#202124]">
                                        <MainItem
                                            key={1}
                                            item={{
                                                name: "user.name" + " " + "user.lastname",
                                                description: "Level " + 2,
                                                icon: "https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png"
                                            }}
                                        >
                                            <AddButton
                                                cb={() => {
                                                    addFriend("1");
                                                }}
                                            />
                                        </MainItem>
                                    </div>
                                )
                            })
                            }
                        </div>
                    )
                } {
                    userData?.length == 0 &&
                    "No user found..."
                }
            </div>
        </div>
    )
}