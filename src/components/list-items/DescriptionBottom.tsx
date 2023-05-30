export const DescriptionBottom = ( props: { icon: string, title: string, description?: string } ) => {
    return (
        <div className="flex items-center gap-4">
            {/* Icon (si no hay icon, uno por defecto) */}
            <div className="rounded-full w-12 aspect-square">
                <img src={`${props.icon}`} />
            </div>
            {/* Title */}
            <div className="flex flex-col gap-2">
                <p className="leading-none text-black dark:text-white text-base">{props.title}</p>
                <p className="leading-none text-black dark:text-white/50 text-sm">{props.description}</p>
            </div>
        </div>
    )
}