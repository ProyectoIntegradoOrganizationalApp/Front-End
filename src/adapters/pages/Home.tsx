import logoApps from '../../assets/svg/home/logoApps.svg';
import hero from '../../assets/svg/home/hero.svg';

export function Home() {
    return (
        <>
            <div className="separator"></div>

            {/* Hero */}
            <div className="flex items-center flex-col lg:flex-row-reverse w-3/4 m-auto gap-32 h-100-vh">
                <div className="flex-1">
                    <img src={hero} className="select-none" />
                </div>
                <div className="flex-1">
                    <h1 className="fs-l">The <span className="bolder">open source platform</span> for <span className="bolder">developers to work</span> & communicate cohesively and organized in the best way thanks to the wide variety of apps that we have</h1>
                    <p className="py-7 fs-m">Teamer Software will help you <b>organize with your team</b> or alone those tasks that need it. With all the functionality that we include you will be satisfied</p>
                    <a href='https://github.com/orgs/ProyectoIntegradoOrganizationalApp/repositories' target="_blank" className="btn btn-primary">Our Repository</a>
                </div>
            </div>
            {/* Hero */}

            <div className="separator"></div>

            {/* Information */}
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
            {/* Information */}
        </>
    )
}