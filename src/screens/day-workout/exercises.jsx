import { View } from "react-native";
import { Link } from "react-router-native";
import { dayWorkoutStyles } from "../../styles/pages";
import useExercises from "../../hooks/useExercises";
import { AddToListIcon } from "../../components/icons";
import ExerciseCard from "../../components/exercise-card";
import { IconButton } from "../../components/button";

const Exercises = () => {
    const { dayExercises } = useExercises();

    return (<>
        <AddExerciseButton/>
        {dayExercises.map((exercise, index) =>
            <ExerciseCard key={`dayExercise-${index}`} {...exercise}/>
        )}
    </>);
}

const AddExerciseButton = () =>
    <View style={dayWorkoutStyles.addExerciseButtonContainer}>
        <Link to="/categories">
            <IconButton icon={<AddToListIcon/>} isNotTouchable>
                Añadir ejercicio
            </IconButton>
        </Link>
    </View>


export default Exercises;