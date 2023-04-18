import React from 'react';

import hero from '../../assets/svg/home/hero.svg'

export default function Home() {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-14">
                <div className="flex-1">
                    
                </div>
                <div className="flex-1">
                    <h1 className="text-4xl">The <b>open source platform</b> for <b>developers to work</b> & communicate cohesively and organized in the best way thanks to the wide variety of apps that we have</h1>
                    <p className="py-6">Teamer Software will help you <b>organize with your team</b> or alone those tasks that need it. With all the functionality that we include you will be satisfied</p>
                    <button className="btn btn-slate-800 capitalize px-16 text-white">Our Repository</button>
                </div>
            </div>
        </div>
    );
}