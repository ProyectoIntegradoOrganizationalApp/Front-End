export const Loading = ({ state }: { state: boolean }) => {
     return(
        <>
            { state && (
                <>
                    <div className="fixed w-full h-full left-0 top-0 backdrop-blur-sm opacity-60 bg-black">
                    </div>
                    <progress className="progress progress-warning w-56 absolute top-1/2"></progress>
                </>
            )}
        </>
    )
}