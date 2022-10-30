import { getCategories } from "./categories"
import storage from "../utils/storage";

const defaultCategories = [
    "Hombros",
    "Triceps",
    "Biceps",
    "Pectoral",
    "Espalda",
    "Piernas",
    "Abdominales"
];

const defaultExercisesCategories = {
    Hombros: [
        "Press Arnold con mancuernas",
        "Press de barra trasnuca",
        "Facepull en polea",
        "Press de hombro frontal",
        "Elevaciones laterales con mancuernas",
        "Elevaciones posteriores",
        "Elevaciones laterales con polea",
        "Press militar",
        "Press de hombros con mancuernas",
        "Remo al mentón"
    ],
    Triceps: [
        "Extensión de codo en polea",
        "Extensión de codo con mancuernas",
        "Extensión de codo sobre la cabeza",
        "Press de banca con agarre cerrado",
        "Press de banca con agarre cerrado en Smith",
        "Rompecráneos con barra",
        "Romprecráneos en banco inclinado",
        "Fondos"
    ],
    Biceps: [
        "Curl de bíceps con barra recta",
        "Press francés",
        "Extensión de tríceps en polea",
        "Dominadas con agarre supino",
        "Martillo ó curl con mancuernas"
    ],
    Pectoral: [
        "Mancuernas acostado",
        "Lagartijas",
        "Superman",
        "Apertura de pecho",
        "Press de pecho con banda elástica",
        "Peso muerto con piernas rígidas"
    ],
    Espalda: [
        "Peso muerto",
        "Dominadas",
        "Remo con barra en banco inclinado",
        "Jalón de espalda",
        "Remo con manuernas"
    ],
    Piernas: [
        "Sentadilla trasera",
        "Sentadilla frontal",
        "Extensión de rodilla",
        "Flexión de rodilla",
        "Peso muerto",
        "Zancadas",
        "Hip thrust"
    ],
    Abdominales: [
        "Crunch",
        "Hipopresivos",
        "Isométricos",
        "Crunch con piernas elevadas",
        "Elevación de piernas",
        "Planchas",
        "Planchas oblicuas"
    ]
};

const loadInitialData = () => {
    getCategories().then(data => {
        if(!data.length){
            storage.set("categories", defaultCategories);
        }
    });
    storage.get("exercises-categories").then(data => {
        if(!data){
            storage.set("exercises-categories", defaultExercisesCategories);
        }
    });
}

export default loadInitialData;