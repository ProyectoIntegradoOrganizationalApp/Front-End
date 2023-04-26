import error from "../../assets/error.gif";

export function Error() {
    return (
        <>
            <div className="h-100-vh">
                <div className="hero-content flex-col lg:flex-row m-auto gap-20 min-h-full items-center justify-center">
                    <div className="flex flex-1 items-center justify-center">
                        <img src={error} className=""/>
                    </div>
                    <div className="flex-1 min-w-fit max-w-fit">
                        <h1 className="text-5xl font-bold">404</h1>
                        <h1 className="py-2">Page not found...</h1>
                        <p className="pt-4 pb-6 max-w-md">Sorry, the page you are looking for cannot be found. Please check the URL or try again later.</p>
                        <a href="/" className="btn btn-primary">Go Home</a>
                    </div>
                </div>
            </div>
        </>
    )
}