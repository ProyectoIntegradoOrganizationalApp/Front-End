export const Loading = ({ state }: { state: boolean }) => {
     return(
        <>
            { state && (
                <>
                    <div className="fixed w-full h-full left-0 top-0 backdrop-blur-sm opacity-60 dark:bg-[#202124]">
                    </div>
                    <progress className="progress progress-info w-56 absolute top-1/2 dark:bg-[#28292d]"></progress>
                </>
            )}
        </>
    )
}