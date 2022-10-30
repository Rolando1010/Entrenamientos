import { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";
import Button, { IconButton } from "../components/button";
import { PlusIcon } from "../components/icons";
import { LabelInput } from "../components/input";
import ListItem from "../components/list-item";
import Modal from "../components/modal";
import { errorToast, infoToast, successToast } from "../components/toast";
import { getExercisesCategory, saveExerciseCategory, removeExerciseCategory } from "../services/categories";
import { listItemStyle } from "../styles/components";

const ExercisesCategory = () => {
    const { categoryName } = useParams();
    const [exercises, setExercises] = useState([]);
    const [name, setName] = useState("");
    const modalRef = useRef();

    const updateExercises = () => {
        getExercisesCategory(categoryName).then(setExercises);
    }

    const addExercise = () => {
        saveExerciseCategory(categoryName, name)
        .then(() => {
            updateExercises();
            modalRef.close();
            setName("");
            successToast("Ejercicio añadido");
        })
        .catch(errorToast);
    }

    const deleteExercise = exerciseName => () => {
        removeExerciseCategory(categoryName, exerciseName).then(() => {
            updateExercises();
            infoToast("Ejercicio eliminado");
        });
    }

    useEffect(updateExercises, []);

    return (<>
        <View style={listItemStyle.container}>
            <IconButton icon={<PlusIcon/>} onPress={() => modalRef.open()}>
                Añadir ejercicio
            </IconButton>
        </View>
        {exercises.map((exercise, index) =>
            <ListItem
                key={`exercise-${index}`}
                text={exercise}
                url={`/exercises/${exercise}`}
                deletion={deleteExercise(exercise)}
            />
        )}
        <Modal
            title="Nuevo ejercicio"
            footerElement={
                <Button onPress={addExercise}>Añadir</Button>
            }
            modalRef={modalRef}
        >
            <LabelInput
                text="Nombre de ejercicio"
                value={name}
                onChange={setName}
                autoFocus
            />
        </Modal>
    </>);
}

export default ExercisesCategory;