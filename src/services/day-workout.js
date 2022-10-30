import storage from "../utils/storage";
import { formatDate } from "../utils/date";

const getExercises = (date) => new Promise(resolve => {
    const key = formatDate(date);
    storage.get(key).then(resolve);
});

const saveExercise = (date, exercise, weight, reps) => new Promise(resolve => {
    const key = formatDate(date);
    storage.get(key).then(data => {
        const newExerciseInfo = {name: exercise, series: [{weight, reps}]};
        if(data){
            const currentExercise = data.find(e => e.name === exercise);
            if(currentExercise)currentExercise.series.push({weight, reps});
            else data.push(newExerciseInfo);
            storage.set(key, data).then(resolve);
            return;
        }
        storage.set(key, [newExerciseInfo]).then(resolve);
    });
});

const removeExercise = (date, exercise) => new Promise(resolve => {
    const key = formatDate(date);
    storage.get(key).then(data => {
        const remainingExercises = data.filter(e => e.name !== exercise);
        if(remainingExercises.length){
            storage.set(key, remainingExercises).then(resolve);
        } else {
            storage.delete(key).then(resolve);
        }
    });
});

const removeSerie = (date, exercise, serieIndex) => new Promise(resolve => {
    const key = formatDate(date);
    storage.get(key).then(data => {
        const infoExercises = data.map(e => {
            if(e.name === exercise){
                e.series = e.series.filter((s, index) => index !== serieIndex);
            }
            return e;
        }).filter(e => e.series.length > 0);
        if(infoExercises.length) storage.set(key, infoExercises).then(resolve);
        else storage.delete(key).then(resolve);
    });
});

export {
    getExercises,
    saveExercise,
    removeExercise,
    removeSerie
}