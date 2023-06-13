export const DescriptionBottom = (props: { icon: string, title: string, description?: string }) => {
    return (
        <div className="flex-1 flex items-center gap-4">
            {/* Icon (si no hay icon, uno por defecto) */}
            {
                props.icon &&
                <div className="rounded-full w-12 aspect-square">
                    <img src={`${props.icon}`} className="rounded-full"/>
                </div>
            }
            {/* Title */}
            <div className="flex flex-col gap-2.5">
                <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                <p className="leading-none text-black dark:text-white/50 text-sm">{props.description}</p>
            </div>
        </div>
    )
}