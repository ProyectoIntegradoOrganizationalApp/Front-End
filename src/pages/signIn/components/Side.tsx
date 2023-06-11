import React from 'react';
import { Link } from 'react-router-dom';

interface SideProps {
    onSwitchContainer: () => void;
}
const Side: React.FC<SideProps> = ({ onSwitchContainer }) => {
    const isRegisterPage = location.pathname === '/register';

    return (
        <div className="text-black dark:text-white text-center flex flex-col items-center gap-8 min-w-fit relative z-50 py-10">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-bold leading-none">{isRegisterPage ? "It's Never Too Late" : "Welcome to Teamer"}</h1>
                <p className="max-w-[450px]">{isRegisterPage ? "“Very few companies cause as much enthusiasm and fervor as Teamer does”" : "Project management tool for teams"}</p>
            </div>
            <div className="flex gap-2.5">
                <Link to="/" className="btn btn-primary !bg-green-700 cursor-pointer hover:!bg-green-800 transition-all !px-16">Home</Link>
                <div onClick={onSwitchContainer} className="btn btn-primary cursor-pointer transition-all !px-16">{isRegisterPage ? "Log in" : "Sign Up"}</div>
            </div>
        </div>
    );
};

export default Side;