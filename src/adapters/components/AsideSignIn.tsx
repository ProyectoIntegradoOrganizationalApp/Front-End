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
            <aside className="flex-1 flex flex-col justify-center gap-16">
                <img src={log} className="select-none"/>
                <div className="login-message">
                    <h1 className="pb-5 text-2xl"><b>{props.title}</b></h1>
                    <p className="pb-5 text-base">{props.message}</p>
                    <Link to={props.link.route} className="btn btn-primary w-full">{props.link.message}</Link>
                </div>
            </aside>
        </>
    )
}