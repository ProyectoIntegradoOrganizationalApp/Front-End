import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Side from './components/Side';

// Images
import sideelement1 from '../../assets/svg/login/sideelement1.png';
import sideelement2 from '../../assets/svg/login/sideelement2.png';
import sideelement3 from '../../assets/svg/login/sideelement3.png';
import { Nav } from '../home/components/Nav';

const ContainerSwitcher: React.FC = () => {
    const location = useLocation();
    const isRegisterPage = location.pathname === '/register';
    const [showLogin, setShowLogin] = useState(!isRegisterPage);
    const navigate = useNavigate();

    const handleSwitchContainer = () => {
        document.title = isRegisterPage ? 'Login | Teamer 2023' : 'Register | Teamer 2023';

        const newPath = showLogin ? '/register' : '/login';
        setShowLogin((prevShowLogin) => !prevShowLogin);

        setTimeout(() => navigate(newPath), 180)
    };

    useEffect(() => {
        document.title = isRegisterPage ? 'Register | Teamer 2023' : 'Login | Teamer 2023';
    }, []);

    return (
        <>
            <div className="min-[1190px]:hidden"><Nav /></div>
            <div className={`flex max-[1190px]:flex-col-reverse select-none overflow-hidden ${isRegisterPage ? "max-[1190px]:mt-7" : "max-[1190px]:mt-36"}`}>
                <div id="formside" className={`max-[1190px]:flex-1 flex items-center justify-center w-1/2 max-[1190px]:w-full px-5 md:h-screen transition-transform duration-500 ease-in-out transform ${showLogin ? 'min-[1190px]:translate-x-0 left-0' : 'min-[1190px]:translate-x-full left-0'}`}>
                    {isRegisterPage ? (
                        <Register />
                    ) : (
                        <Login />
                    )}
                </div>
                <div id="otherside" className={`max-[1190px]:hidden relative flex-1 max-[768px]:flex-[.5] flex items-center justify-center w-1/2 md:h-screen transition-transform duration-500 ease-in-out transform bg-slate-200 dark:bg-slate-900 ${showLogin ? 'min-[1190px]:translate-x-0 left-0' : 'min-[1190px]:-translate-x-full left-0'}`}>
                    <img className="absolute top-0 -left-[3.2rem]" src={sideelement1} />
                    <img className="absolute top-2/4 right-0" src={sideelement2} />
                    <img className="absolute bottom-0 left-10" src={sideelement3} />
                    <Side onSwitchContainer={handleSwitchContainer} />
                </div>
            </div>
        </>
    );
};

export default ContainerSwitcher;