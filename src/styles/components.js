import { StyleSheet } from "react-native";
import theme from "./theme";

const listItemStyle = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    listItem: {
        backgroundColor: theme.background2,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    listItemText: {
        color: theme.fontColor1,
        fontSize: 16
    }
});

const inputStyle = StyleSheet.create({
    labelText: {
        color: theme.fontColor1,
        fontSize: 16
    },
    label: {
        backgroundColor: theme.background2,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        borderRadius: 5,
        color: theme.fontColor1,
        outlineColor: theme.background2,
        marginBottom: 10
    },
    number: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    }
});

const buttonStyle = StyleSheet.create({
    button: {
        marginVertical: 10,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    text: {
        color: theme.fontColor1,
        marginLeft: 10,
        fontSize: 16
    },
    icon: {
        flexDirection: "row",
        backgroundColor: theme.primary1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    iconText: {
        color: theme.fontColor1,
        marginLeft: 10,
        fontSize: 16
    }
});

const menuStyle = StyleSheet.create({
    menu: {
        borderBottomWidth: 1,
        borderBottomColor: theme.primary1,
        backgroundColor: theme.background1
    },
    title: {
        color: theme.fontColor1,
        fontSize: 20,
        marginTop: 25,
        marginBottom: 10,
        marginBottom: 15,
        textAlign: "center"
    },
    sectionContainer: {
        flexDirection: "row"
    },
    section: {
        width: "33%",
        borderBottomWidth: 2,
        borderBottomColor: theme.background1
    },
    sectionActive: {
        borderBottomColor: theme.primary1
    }
});

const exerciseCardStyle = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: theme.background2,
        fontSize: 16,
        borderRadius: 5
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.primary1,
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: theme.fontColor1,
        fontSize: 20
    }
});

export {
    listItemStyle,
    inputStyle,
    buttonStyle,
    menuStyle,
    exerciseCardStyle
}