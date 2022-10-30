import { useMemo } from "react";
import useGlobalState from "./useGlobalState";
import { getExercises } from "../services/day-workout";
import { days, formatDate, months } from "../utils/date";
import { infoToast } from "../components/toast";

const useDate = () => {
    const { globalState, setGlobalState } = useGlobalState();

    const detailDate = useMemo(() => {
        if(globalState.date){
            const actualDate = globalState.date;
            const dayName = days[actualDate.getDay()];
            const [monthDay, monthNumber] = formatDate(actualDate).split("/");
            const monthName = months[monthNumber - 1];
            return `${dayName}, ${monthName} ${monthDay}`;
        }
    }, [globalState.date]);

    const updateWorkoutDay = async newDate => {
        setGlobalState({
            ...globalState,
            date: newDate,
            dayExercises: await getExercises(newDate)}
        );
    }

    const operateDate = async (callback) => {
        const actualDate = globalState.date;
        const newDay = callback(actualDate.getDate());
        const miliseconds = actualDate.setDate(newDay);
        const newDate = new Date(miliseconds);
        updateWorkoutDay(newDate);
    }

    const decrementDay = () => {
        operateDate(date => date - 1);
    }

    const incrementDay = () => {
        operateDate(date => date + 1);
    }

    return {
        detailDate,
        updateWorkoutDay,
        decrementDay,
        incrementDay
    }
}

export default useDate;