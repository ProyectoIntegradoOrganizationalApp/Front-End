import { Link } from "react-router-dom";

import log from "../../assets/svg/login/login.svg";

interface Props {
    title: string,
    message: string,
    link: {
        route: string,
        message: string
    }
}

export const AsideSignIn = function ( props: Props) {
    return (
        <>
            <aside className="flex-1 h-full w-full flex flex-col justify-center items-center gap-16">
                <img src={log} className="select-none"/>
                <div className="login-message">
                    <h1 className="pb-5 font-extrabold">{props.title}</h1>
                    <p className="pb-5 fs-m">{props.message}</p>
                    <Link to={props.link.route} className="btn btn-primary w-full">{props.link.message}</Link>
                </div>
            </aside>
        </>
    )
}