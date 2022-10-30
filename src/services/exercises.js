import storage from "../utils/storage";

const iterateRegistersExercise = (exercise, callback) => new Promise(resolve => {
    storage.getAll().then(data => {
        Object.entries(data).forEach(([key, value]) => {
            if(key.includes("/")){
                const exerciseInDay = value.find(({ name }) => name === exercise);
                if(exerciseInDay) callback(key, exerciseInDay);
            }
        });
        resolve();
    });
});

const getDaysExercise = exercise => new Promise(resolve => {
    const daysExercise = [];
    iterateRegistersExercise(exercise, (day, exerciseInDay) => {
        daysExercise.push({date: day, series: exerciseInDay.series});
    }).then(() => resolve(daysExercise));
});

const getRMsExercise = exercise => new Promise(resolve => {
    const days = [];
    const rms = [];
    iterateRegistersExercise(exercise, (day, exerciseInDay) => {
        const maxRM = exerciseInDay.series.reduce((maxRM, { weight, reps }) => {
            const serieRM = weight * (1 + 0.025 * reps);
            if(serieRM > maxRM) return serieRM;
            return maxRM;
        }, 0);
        days.push(day);
        rms.push(maxRM);
    }).then(() => resolve({ days, rms }));
});

const getMaxWeightsExercise = exercise => new Promise(resolve => {
    const days = [];
    const weights = [];
    iterateRegistersExercise(exercise, (day, exerciseInDay) => {
        const maxWeight = exerciseInDay.series.reduce((maxWeight, { weight }) => {
            if(weight > maxWeight) return weight;
            return maxWeight;
        }, 0);
        days.push(day);
        weights.push(maxWeight);
    }).then(() => resolve({ days, weights }));
});

const getMaxRepsExercise = exercise => new Promise(resolve => {
    const days = [];
    const reps = [];
    iterateRegistersExercise(exercise, (day, exerciseInDay) => {
        const maxReps = exerciseInDay.series.reduce((maxReps, { reps: repsSerie }) => {
            if(repsSerie > maxReps) return repsSerie;
            return maxReps;
        }, 0);
        days.push(day);
        reps.push(maxReps);
    }).then(() => resolve({ days, reps }));
});

export {
    getDaysExercise,
    getRMsExercise,
    getMaxWeightsExercise,
    getMaxRepsExercise
}