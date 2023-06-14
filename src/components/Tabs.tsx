import { Link } from "react-router-dom";
import { Tabs } from "../domain/UI/Tabs.interface";

export function Tabs(props: { tab: string, setTab: Function, icon?: string, title?: string, links?: Array<Tabs> }) {
    const handleClick = (tabName: string) => {
        props.setTab(tabName);
    }

    return (
        <div className={`h-fit ${props.links ? "md:px-3" : "px-3"} ${props.title ? "md:!px-3" : "!px-0"} py-0 flex justify-between items-center rounded-xl`}>
            <div className={`flex flex-col md:flex-row items-start gap-4 max-[500px]:gap-2 md:gap-7 h-full`}>
                {/* Header */}
                {
                    props.title &&
                    <div className={`items-center gap-4 max-[500px]:gap-2 ${props.links ? "hidden md:flex" : "flex"} py-[0.73rem]`}>
                        <i className={props.icon + " text-black dark:text-white"}></i>
                        <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                    </div>
                } {
                    props.links && props.title &&
                    <div className="h-10 w-[1.7px] bg-gray-400 dark:bg-[#414149] hidden md:block"></div>
                }

                {/* Tabs */}
                {props.links &&
                    <div className="flex justify-center items-center gap-1.5">
                        {props.links?.map((link) =>
                            link.url ? (
                                <Link
                                    key={link.name}
                                    to={link.url}
                                    className={`btn btn-primary flex justify-center items-center !text-black dark:!text-white !px-3.5 md:!px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0 hover:!bg-gray-300 dark:hover:!bg-[#28292d] ${props.tab == link.name || props.tab == link.url ? "!bg-gray-300 dark:!bg-[#28292d]" : "!bg-transparent"}`}
                                    onClick={() => handleClick(link.name)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <button
                                    key={link.name}
                                    className={`btn btn-primary flex justify-center items-center !text-black dark:!text-white !px-3.5 md:!px-5 !py-3 !max-h-none border-none leading-none h-fit min-h-0 hover:!bg-gray-300 dark:hover:!bg-[#28292d] ${props.tab == link.name || props.tab == link.url ? "!bg-gray-300 dark:!bg-[#28292d]" : "!bg-transparent"}`}
                                    onClick={() => handleClick(link.name)}
                                >
                                    {link.name}
                                </button>
                            )

                        )}
                    </div>
                }
            </div>
        </div>
    )
}