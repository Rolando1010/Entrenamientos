import { useContext } from "react";
import { getExercises } from "../services/day-workout";
import context from "../utils/context";

const useGlobalState = () => {
    const { globalState, setGlobalState } = useContext(context) || {};

    const startGlobalState = async (onChange) => {
        const today = new Date();
        (setGlobalState || onChange)({
            dayExercises: await getExercises(today),
            date: today
        });
    }

    return {
        globalState,
        setGlobalState,
        startGlobalState
    }
}

export default useGlobalState;