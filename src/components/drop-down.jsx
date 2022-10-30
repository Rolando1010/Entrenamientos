import { StyleSheet, Text } from "react-native";
import { Dropdown as DropDownElement } from "react-native-element-dropdown";
import theme from "../styles/theme";

const DropDown = ({ value, onChange, options, emptyStartMessage }) =>
    <DropDownElement
        data={options.map(o => ({ label: o, value: o }))}
        value={value}
        onChange={({ value }) => onChange(value)}
        placeholder={emptyStartMessage}
        labelField="label"
        valueField="value"
        style={styles.dropdown}
        containerStyle={styles.container}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemContainerStyle={styles.itemContainer}
        itemTextStyle={styles.itemText}
        renderItem={(item, selected) =>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item.label}</Text>
        }
    />

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: theme.background2,
        borderColor: "transparent",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10
    },
    container: {
        borderWidth: 0
    },
    placeholderStyle: {
        fontSize: 16,
        color: theme.fontColor1
    },
    selectedTextStyle: {
        fontSize: 16,
        color: theme.fontColor1
    },
    itemContainer: {
        backgroundColor: theme.background2
    },
    item: {
        color: theme.fontColor1,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    selectedItem: {
        color: theme.primary1,
        backgroundColor: theme.background2,
        fontWeight: "bold"
    },
    itemText: {
        color: theme.fontColor1
    }
});

export default DropDown;