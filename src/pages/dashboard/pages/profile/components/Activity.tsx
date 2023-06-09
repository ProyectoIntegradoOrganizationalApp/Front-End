// React
import React from "react";

// ChartJS
import { Line } from 'react-chartjs-2';

import { InfoTooltip } from "../../../../../components/InfoTooltip";

// Hook para la gráfica
import useChart from '../../../../../hooks/useChart';
import { Profile } from "../../../../../domain/profile/Profile.interface";
import { ChartConf } from "../../../../../domain/UI/ChartConf.interface";

interface ActivityProps {
    title: string,
    data: Profile
}

/**
 *  Componente de Actividad del usuario para ver cuando ha hecho commits
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export const Activity: React.FC<ActivityProps> = ({ title, data }) => {

    const { lineChart } = useChart();
    const { chartData, options } = lineChart(data);

    return (
        <>
            <div className="bg-white dark:bg-[#28292d] w-full h-full flex flex-col rounded-xl">
                <div className="relative border-b-4 border-gray-200 dark:border-[#202124] py-4">
                    <div className="absolute top-3 left-4">
                        <InfoTooltip title="Commits done per month" position="left" />
                    </div>
                    <p className="w-full flex justify-center text-black dark:text-white leading-none text-base">{title}</p>
                </div>
                { data.activity.length > 0 ? (
                    <div className="h-full">
                        <Line
                            data={chartData}
                            options={options}
                        />
                    </div>
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-black dark:text-white">
                        <h1 className="text-xl">No Data</h1>
                    </div>
                )}

            </div>
        </>
    )
}