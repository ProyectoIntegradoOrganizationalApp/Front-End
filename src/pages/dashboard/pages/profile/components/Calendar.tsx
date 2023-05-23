// React
import React from "react";
import { MyCalendar } from "../../../../../domain/UI/Calendar.interface";

/**
 *  Componente de Calendario para ver en que día estamos
 *  
 *  @param props Contiene las props que le pasa el elemento superior 
 *  @returns 
 */
export function Calendar(props: { monthYear: string, calendar: MyCalendar }) {
    const pastDays: Array<any> = [];
    const futureDays: Array<any> = [];

    props.calendar.pastDays.forEach((day, index) => {
        if (index == 0) {
            pastDays.push(
                <div key={day} className={"text-gray-400 dark:text-white/50 flex flex-wrap gap-2 text-ssm p-1 col-start-" + props.calendar.firstDay}>
                    {day}
                </div>
            )
        } else {
            pastDays.push(
                <div key={day} className="text-gray-400 dark:text-white/50 flex flex-wrap gap-2 text-ssm p-1">
                    {day}
                </div>
            )
        }
    })
    
    props.calendar.futureDays.forEach((day, index) => {
        futureDays.push(
            <div key={day} className="text-black dark:text-white flex flex-wrap gap-2 text-ssm p-1">
                {day}
            </div>
        )
    })

    return (
        <>
            <div className="bg-white dark:bg-slate-700 w-full h-full flex flex-col rounded-xl">
                <div className="relative border-b-4 border-gray-200 dark:border-slate-600 py-4">
                    <p className="w-full flex justify-center text-black dark:text-white leading-none">{props.monthYear}</p>
                </div>
                <div className="p-4 justify-end grid grid-cols-7 justify-items-center">
                    {pastDays}
                    <div className="text-red-600 flex flex-wrap gap-2 text-ssm p-1"><b className="text-red-600">{props.calendar.currentDay}</b></div>
                    {futureDays}
                </div>
            </div>
        </>
    )
}