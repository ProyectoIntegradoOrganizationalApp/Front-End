// Interfaces
import { MyCalendar } from "../domain/UI/Calendar.interface";

export const useProfile = () => {
    const date = new Date();

    const GenerateMonthYear = (): string => {
        const formatter = new Intl.DateTimeFormat('en', { month: 'short' });
        const month = formatter.format(date);
        const year = date.getFullYear();
        return month + " - " + year;
    }

    const daysInMonth = (month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    }

    const getFirstDayName = (date: Date) => {
        return date.getDay();
    }

    const GenerateCalendar = (): MyCalendar => {
        const currentDay = date.getDate();
        const pastDays = [];
        const futureDays = [];
        const daysMonth = daysInMonth(date.getMonth() + 1, date.getFullYear());

        // Past days
        let pastDay = 1;
        while (pastDay < currentDay) {
            pastDays.push(pastDay);
            pastDay++;
        }

        // Future days
        let futureDay = currentDay + 1;
        while (futureDay <= daysMonth) {
            futureDays.push(futureDay);
            futureDay++;
        }

        return {
            firstDay: getFirstDayName(new Date(date.getFullYear(), date.getMonth(), 1)) + 1,
            pastDays: pastDays,
            currentDay: currentDay,
            futureDays: futureDays
        };
    }

    return { GenerateMonthYear, GenerateCalendar };
}