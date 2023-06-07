// React
import React from "react";

// ChartJS
import { Line } from 'react-chartjs-2';

import { InfoTooltip } from "../../../../../components/InfoTooltip";

// Hook para la gráfica
import useChart from '../../../../../hooks/useChart';
import { Profile } from "../../../../../domain/profile/Profile.interface";
import { ChartConf } from "../../../../../domain/UI/ChartConf.interface";

/**
 *  Componente de Actividad del usuario para ver cuando ha hecho commits
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */

export function Activity(props: { title: string, data: Profile, chartConf: ChartConf }) {
    const { options, data } = useChart(props.chartConf);

    return (
        <>
            <div className="bg-white dark:bg-slate-700 w-full h-full flex flex-col rounded-xl">
                <div className="relative border-b-4 border-gray-200 dark:border-slate-600 py-4">
                    <div className="absolute top-3 left-4">
                        <InfoTooltip title="Commits done per day" position="left" />
                    </div>
                    <p className="w-full flex justify-center text-black dark:text-white leading-none text-base">{props.title}</p>
                </div>
                {props.data.activity.length > 0 ? (
                    <div className="h-full">
                        <Line
                            options={options}
                            data={data}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <h1 className="text-2xl"> No Data </h1>
                    </div>
                )}

            </div>
        </>
    )
}