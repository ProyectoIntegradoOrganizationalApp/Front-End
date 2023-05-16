/**
 *  Interfaz de Calendario
 */
export interface MyCalendar {
    firstDay: number,
    pastDays: Array<number>,
    currentDay: number,
    futureDays: Array<number>
}