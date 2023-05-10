import logoApps from '../../assets/svg/home/logoApps.svg';
import hero from '../../assets/svg/home/hero.svg';
import { Nav } from '../components/Nav';
import { useUser } from '../../application/customHooks/useUser';
import { Navigate } from 'react-router-dom';

export function Home() {

    const { user } = useUser();

    if( user ) {
        return <Navigate to="/profile" />
    }

    return (
        <>
            <Nav />
            
            {/* Hero Section */}
            <div className="hero flex flex-col justify-center">
                <div className="flex items-center flex-col lg:flex-row-reverse w-3/4 mx-auto gap-16 ">
                    <div className="flex-1">
                        <img src={hero} className="select-none" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl">The <b className='text-black dark:text-white'>open source platform</b> for cohesive and <b className='text-black dark:text-white'>organized development</b></h1>
                        <p className="py-7 text-base">Teamer Software will help you <b className='text-black dark:text-white'>organize with your team</b> or alone those tasks that need it. With all the functionality that we include you will be satisfied</p>
                        <a href='https://github.com/orgs/ProyectoIntegradoOrganizationalApp/repositories' target="_blank" className="btn myBtn">Our Repository</a>
                    </div>
                </div>

                <div className="separator"></div>

                <div className="flex w-3/4 mx-auto gap-10 flex-col lg:flex-row">
                    <div className="flex-1 bg-slate-500 aspect-video"></div>
                    <div className="flex-1">
                        <div className="mb-12 flex gap-5">
                            <button className="btn btn-primary">Our Apps</button>
                            <button className="btn btn-secondary">Work Management</button>
                        </div>
                        <h1 className="fs-l flex gap-4"><img src={logoApps} className="ourApps select-none" /><p>Our Apps</p></h1>
                        <p className="py-7 fs-m">Teamer Software will provide you with all the <b>necessary tools</b> and applications to be able to work on your project in the <b>easiest</b> and most comfortable way between you and your team</p>
                        
                    </div>
                </div>
            </div>
        </>
    )
}