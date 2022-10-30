import { useEffect, useMemo, useState } from "react";
import { getMonthWorkouts } from "../services/workouts";
import { getDateDay, getFormattedDateDay, getMonthAmountDays, months } from "../utils/date";
import useGlobalState from "./useGlobalState";

const useCalendar = () => {
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [monthWorkouts, setMonthWorkouts] = useState([]);
    const { globalState } = useGlobalState();
    const { date } = globalState;

    useEffect(() => {
        if(date){
            setMonth(date.getMonth());
            setYear(date.getFullYear());
        }
    }, [globalState.date]);

    useEffect(() => {
        if(month && year){
            getMonthWorkouts(month, year).then(setMonthWorkouts);
        }
    }, [month, year]);
    
    const detailMonth = useMemo(() => `${months[month]} ${year}`, [month, year]);

    const weeksMonth = useMemo(() => {
        if(!month && !year) return [];
        const amountDays = getMonthAmountDays(month, year);
        const firstDayIndexWeek = getDateDay(1, month, year).getDay();
        const weeks = [];
        let currentWeek = Array(firstDayIndexWeek).fill("");
        for(let i=1; i<=amountDays; i++) {
            if(currentWeek.length === 7){
                weeks.push(currentWeek);
                currentWeek = [];
            }
            currentWeek.push(getFormattedDateDay(i, month, year));
        }
        weeks.push(currentWeek.concat(Array(7 - currentWeek.length).fill("")));
        return weeks;
    }, [month, year]);

    const incrementhMonth = () => {
        setYear(month === 11 ? year + 1 : year);
        setMonth(month === 11 ? 0 : month + 1);
    }

    const decrementhMonth = () => {
        setYear(month === 0 ? year - 1 : year);
        setMonth(month === 0 ? 11 : month - 1);
    }

    return {
        detailMonth,
        weeksMonth,
        incrementhMonth,
        decrementhMonth,
        monthWorkouts
    }
}

export default useCalendar;