import { useMemo } from "react";
import { useParams } from "react-router-native";
import { infoToast, successToast } from "../components/toast";
import { getExercises, saveExercise, removeExercise, removeSerie } from "../services/day-workout";
import useGlobalState from "./useGlobalState";

const useExercises = () => {
    const { globalState, setGlobalState } = useGlobalState();
    const { exerciseName } = useParams();

    const dayExercises = useMemo(() => globalState?.dayExercises || [], [globalState.dayExercises]);

    const updateExercises = async () => setGlobalState({...globalState, dayExercises: await getExercises(globalState.date)});

    const addExercise = ({weight, reps}) => async () => {
        const { date } = globalState;
        await saveExercise(date, exerciseName, weight, reps);
        updateExercises();
        successToast("Serie añadida");
    }

    const deleteExercise = (exercise) => async () => {
        const { date } = globalState;
        await removeExercise(date, exercise);
        updateExercises();
        infoToast("Ejercicio removido");
    }

    const deleteSerie = (serieIndex) => async () => {
        const { date } = globalState;
        await removeSerie(date, exerciseName, serieIndex);
        updateExercises();
        infoToast("Serie removida");
    }

    return {
        dayExercises,
        addExercise,
        deleteExercise,
        deleteSerie
    }
}

export default useExercises;