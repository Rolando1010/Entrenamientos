import { StyleSheet } from "react-native";
import theme from "./theme";

const dayWorkoutStyles = StyleSheet.create({
    dateNavigation: {
        justifyContent: "space-between",
        color: theme.fontColor1,
        flexDirection: "row",
        alignItems: "center"
    },
    dateNavigationText: {
        color: theme.fontColor1,
        fontSize: 16
    },
    addExerciseButtonContainer: {
        marginTop: 30,
    }
});

const exerciseStyles = StyleSheet.create({
    header: {
        marginBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: theme.primary1,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        color: theme.fontColor1
    },
    serie: {
        borderBottomWidth: 1,
        borderBottomColor: theme.primary1
    },
    history: {
        backgroundColor: theme.primary1,
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 10
    }
});

const calendarStyles = StyleSheet.create({
    navigation: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5
    },
    title: {
        color: theme.fontColor1,
        fontSize: 16
    },
    day: {
        color: theme.fontColor1
    },
    workoutDay: {
        marginHorizontal: "auto",
        backgroundColor: theme.primary1,
        width: 15,
        height: 15,
        borderRadius: 100,
        flexDirection: "column"
    },
    emptyExercises: {
        color: theme.fontColor1,
        fontSize: 20,
    }
});

const statisticsStyles = StyleSheet.create({
    title: {
        color: theme.fontColor1,
        textAlign: "center",
        fontSize: 24,
        marginTop: 10
    },
    noGraph: {
        marginTop: 40,
        alignItems: "center"
    },
    noGraphImage: {
        width: 150,
        height: 150
    }
});

export {
    dayWorkoutStyles,
    exerciseStyles,
    calendarStyles,
    statisticsStyles
};