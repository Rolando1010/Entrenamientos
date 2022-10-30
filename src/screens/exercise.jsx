import { useEffect, useMemo, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useParams } from "react-router-native";
import Button from "../components/button";
import { exerciseStyles } from "../styles/pages";
import useExercises from "../hooks/useExercises";
import Table from "../components/table";
import { ListIcon, TrashIcon } from "../components/icons";
import { NumberInput } from "../components/input";
import Modal from "../components/modal";
import ExerciseCard from "../components/exercise-card";
import { getDaysExercise } from "../services/exercises";

const defaultValues = {
    weight: 0,
    reps: 0
};

const Exercise = () => {
    const { exerciseName } = useParams();
    const [values, setValues] = useState(defaultValues);
    const { addExercise } = useExercises();

    const handleChange = (key) => (eventValue) => {
        setValues({...values, [key]: eventValue});
    }

    return (<>
        <View>
            <View style={exerciseStyles.header}>
                <Text style={exerciseStyles.title}>{exerciseName}</Text>
                <ExerciseHistory/>
            </View>
        </View>
        <NumberInput
            value={values.weight}
            onChange={handleChange("weight")}
            text="Peso (kgs)"
            step={.5}
        />
        <NumberInput
            value={values.reps}
            onChange={handleChange("reps")}
            text="Repeticiones"
            step={1}
        />
        <Button type="success1" onPress={addExercise(values)}>Guardar</Button>
        <Button type="secondary1" onPress={() => setValues(defaultValues)}>Limpiar</Button>
        <DayExerciseSeries/>
    </>);
}

const DayExerciseSeries = () => {
    const { exerciseName } = useParams();
    const { dayExercises, deleteSerie } = useExercises();

    const series = useMemo(() => dayExercises.find(e => e.name === exerciseName)?.series || [], [dayExercises]);

    return (
        <Table
            data={series.map(({weight, reps}, index) => [
                `${weight} kgs`,
                `${reps} reps`,
                <TouchableOpacity onPress={deleteSerie(index)}>
                    <TrashIcon/>
                </TouchableOpacity>
            ])}
            rowStyle={exerciseStyles.serie}
        />
    );
}

const ExerciseHistory = () => {
    const { exerciseName } = useParams();
    const modalRef = useRef();
    const [days, setDays] = useState([]);

    useEffect(() => {
        getDaysExercise(exerciseName).then(setDays);
    }, []);

    return (<>
        <TouchableOpacity style={exerciseStyles.history} onPress={() => modalRef.open()}>
            <ListIcon/>
        </TouchableOpacity>
        <Modal title={exerciseName} modalRef={modalRef}>
            {days.map(({date, series}, index) =>
                <ExerciseCard
                    key={`exercise-card-${index}`}
                    name={date}
                    series={series}
                    readonly
                />
            )}
        </Modal>
    </>);
}

export default Exercise;