import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import useExercises from "../hooks/useExercises";
import { exerciseCardStyle } from "../styles/components";
import { TrashIcon } from "./icons";
import Table from "./table";

const ExerciseCard = ({ name, series, readonly }) => {
    const { deleteExercise } = useExercises();

    return(
        <View style={[exerciseCardStyle.container, readonly ? {marginVertical: 10, width: "100%"} : {}]}>
            <Link to={readonly ? "" : `/exercises/${name}`} underlayColor="transparent"><>
                <View style={exerciseCardStyle.titleContainer}>
                    <Text style={exerciseCardStyle.title}>{name}</Text>
                    {!readonly &&
                        <TouchableOpacity onPress={deleteExercise(name)}>
                            <TrashIcon/>
                        </TouchableOpacity>
                    }
                </View>
                <Table
                    data={series.map(({weight, reps}) => [`${weight} kgs`, `${reps} reps`])}
                />
            </></Link>
        </View>
    );
}

export default ExerciseCard;