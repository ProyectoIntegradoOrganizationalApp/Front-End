import { useNavigate } from "react-router-dom";
import error from "../assets/error.gif";

export function Error() {
    let navigate = useNavigate();

    return (
        <>
            <div className="min-h-[100vh] flex">
                <div className="flex-1 w-full flex flex-wrap items-center justify-center max-[640px]:gap-0 max-[926px]:gap-6 gap-12 p-10">
                    <img src={error} className="w-[400px]"/>
                    <div className="w-fit text-black dark:text-white">
                        <h1 className="text-5xl font-bold leading-none">404</h1>
                        <h1 className="py-2">Page not found...</h1>
                        <p className="pt-4 pb-6 max-w-md">Sorry, the page you are looking for cannot be found. Please check the URL or try again later.</p>
                        <div onClick={(e) => navigate(-1)} className="btn btn-primary">Go Back</div>
                    </div>
                </div>
            </div>
        </>
    )
}