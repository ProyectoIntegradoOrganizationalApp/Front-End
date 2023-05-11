// React
import React from "react";
import { MyCalendar } from "../../../domain/Calendar.interface";

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
                <div className={"text-white/50 flex flex-wrap gap-2 text-ssm p-1 col-start-" + props.calendar.firstDay}>
                    {day}
                </div>
            )
        } else {
            pastDays.push(
                <div className="text-white/50 flex flex-wrap gap-2 text-ssm p-1">
                    {day}
                </div>
            )
        }
    })
    
    props.calendar.futureDays.forEach((day, index) => {
        futureDays.push(
            <div className="text-white flex flex-wrap gap-2 text-ssm p-1">
                {day}
            </div>
        )
    })

    return (
        <>
            <div className="bg-slate-700 w-full h-full flex flex-col rounded-xl">
                <div className="relative border-b-4 border-slate-600 py-4">
                    <p className="w-full flex justify-center text-white leading-none">{props.monthYear}</p>
                </div>
                <div className="p-4 justify-end grid grid-cols-7">
                    {pastDays}
                    <div className="text-red-600 flex flex-wrap gap-2 text-ssm p-1"><b className="text-red-600">{props.calendar.currentDay}</b></div>
                    {futureDays}
                </div>
            </div>
        </>
    )
}