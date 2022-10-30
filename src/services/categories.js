import storage from "../utils/storage";

const getCategories = () => new Promise(resolve => {
    storage.get("categories")
        .then(res => resolve(res || []));
});

const getExercisesCategory = (category) => new Promise(resolve => {
    storage.get("exercises-categories").then(data => {
        resolve(data ? data[category] : []);
    });
});

const saveCategory = categoryName => new Promise((resolve, reject) => {
    storage.get("categories").then(categories => {
        const existingCategory = categories.find(c => c === categoryName);
        if(!existingCategory){
            storage.set("categories", [...categories, categoryName]).then(() => {
                storage.get("exercises-categories").then(exercisesCategories => {
                    storage.set("exercises-categories", {...exercisesCategories, [categoryName]: []}).then(resolve);
                });
            });
        }
        else reject("Nombre de categoría ya existente");
    });
});

const removeCategory = categoryName => new Promise(resolve => {
    storage.get("categories").then(categories => {
        storage.set("categories", categories.filter(c => c !== categoryName)).then(() => {
            storage.get("exercises-categories").then(exercisesCategories => {
                delete exercisesCategories[categoryName];
                storage.set("exercises-categories", exercisesCategories).then(resolve);
            });
        });
    });
});

const saveExerciseCategory = (categoryName, exerciseName) => new Promise((resolve, reject) => {
    storage.get("exercises-categories").then(exercisesCategories => {
        const existingExercise = Object.entries(exercisesCategories).filter(([category, exercises]) => {
            return exercises.filter(e => e === exerciseName).length;
        }).length;
        if(!existingExercise){
            exercisesCategories[categoryName].push(exerciseName)
            storage.set("exercises-categories", exercisesCategories).then(resolve);
        }else reject("Nombre de ejercicio ya existente");
    });
});

const removeExerciseCategory = (categoryName, exerciseName) => new Promise(resolve => {
    storage.get("exercises-categories").then(exercisesCategories => {
        exercisesCategories[categoryName] = exercisesCategories[categoryName].filter(e => e !== exerciseName);
        storage.set("exercises-categories", exercisesCategories).then(resolve);
    });
});

export {
    getCategories,
    getExercisesCategory,
    saveCategory,
    removeCategory,
    saveExerciseCategory,
    removeExerciseCategory
}