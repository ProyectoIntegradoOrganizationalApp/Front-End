export const DescriptionTop = (props: { icon: string, title: string, description?: string }) => {
    return (
        <div className="flex">
            <div className="flex items-center gap-3 sm:gap-4">
                {/* Icon (si no hay icon, uno por defecto) */}
                {
                    props.icon &&
                    <div className="rounded-full w-12 aspect-square">
                        <img src={`${props.icon}`} className="rounded-full"/>
                    </div>
                }
                {/* Title */}
                <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
            </div>
            <div className="items-center hidden min-[715px]:flex">
                {/* Separator */}
                <a className="w-[0.1rem] bg-gray-400 dark:bg-[#28292d] h-9 mx-7"/>
                {/* Description */}
                <p className="leading-none text-black dark:text-white/50 text-base">{props.description}</p>
            </div>
        </div>
    )
}