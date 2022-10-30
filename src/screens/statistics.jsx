import { useEffect, useState } from "react";
import { Text, Image, View } from "react-native";
import DropDown from "../components/drop-down";
import { LineGraph } from "../components/graphs";
import { getCategories, getExercisesCategory } from "../services/categories";
import { getMaxRepsExercise, getMaxWeightsExercise, getRMsExercise } from "../services/exercises";
import { statisticsStyles } from "../styles/pages";

const statisticsOptions = [
    "1RM Estimado",
    "Máximo peso",
    "Máximas repeticiones"
];

const statisticsFunctions = {
    "1RM Estimado": async (exercise) => {
        const { days, rms } = await getRMsExercise(exercise);
        return {x: days, y: rms};
    },
    "Máximo peso": async (exercise) => {
        const { days, weights } = await getMaxWeightsExercise(exercise);
        return {x: days, y: weights};
    },
    "Máximas repeticiones": async (exercise) => {
        const { days, reps } = await getMaxRepsExercise(exercise);
        return {x: days, y: reps};
    }
};

const Statistics = () => {
    const [optionSelected, setOptionSelected] = useState();
    const [categories, setCategories] = useState([]);
    const [categorySelected, setCategorySelected] = useState();
    const [exercises, setExercises] = useState([]);
    const [exerciseSelected, setExerciseSelected] = useState();
    const [graphData, setGraphData] = useState({ isNotGenerated: true });

    useEffect(() => {
        getCategories().then(setCategories);
    }, []);

    useEffect(() => {
        if(categorySelected){
            getExercisesCategory(categorySelected).then(setExercises);
        }
    }, [categorySelected]);

    useEffect(() => {
        if(exerciseSelected){
            statisticsFunctions[optionSelected](exerciseSelected).then(({ x, y, ySuffix }) => {
                if(x.length && y.length){
                    setGraphData({x, y, ySuffix});
                }
                else{
                    setGraphData({ isEmpty: true });
                }
            });
        }
    }, [optionSelected, exerciseSelected]);

    return (<>
        <DropDown
            value={optionSelected}
            onChange={setOptionSelected}
            options={statisticsOptions}
            emptyStartMessage="Seleccione una opción"
        />
        {optionSelected && <DropDown
            value={categorySelected}
            onChange={setCategorySelected}
            options={categories}
            emptyStartMessage="Seleccione una categoría"
        />}
        {categorySelected && <DropDown
            value={exerciseSelected}
            onChange={setExerciseSelected}
            options={exercises}
            emptyStartMessage="Seleccione un ejercicio"
        />}
        {graphData.isNotGenerated ?
            <NoGraph>
                No se ha generado ningún gráfico
            </NoGraph>
            :
            graphData.isEmpty ?
                <NoGraph>
                    No hay datos disponibles para las opciones seleccionadas
                </NoGraph>
                :
                <>
                    <Text style={statisticsStyles.title}>{optionSelected} de {exerciseSelected}</Text>
                    <LineGraph
                        x={graphData.x}
                        y={graphData.y}
                    />
                </>
        }
    </>);
}

const NoGraph = ({ children }) =>
    <View style={statisticsStyles.noGraph}>
        <Image
            style={statisticsStyles.noGraphImage}
            source={require("../../assets/no-graph.png")}
        />
        <Text style={statisticsStyles.title}>{children}</Text>
    </View>

export default Statistics;