export function NotificationsModal(props: {content: React.ReactNode}) {
    return (
        <div className="min-w-[800px] max-[768px]:min-w-[400px]">
            {/* Titulo */}
            <div className="w-full flex flex-col w-5/5 bg-white dark:bg-slate-800 p-7 border-b-2 border-gray-300 dark:border-white/20">
                <p className="leading-none text-2xl flex gap-5"><i className="text-black dark:text-white fa-solid fa-bell"></i>Notifications</p>
            </div>

            {/* Notifications */}
            {props.content}
        </div>
    )
}