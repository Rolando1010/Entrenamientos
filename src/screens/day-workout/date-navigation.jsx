import { View, Text, TouchableOpacity } from "react-native";
import { BackIcon, ForwardIcon } from "../../components/icons";
import { dayWorkoutStyles } from "../../styles/pages";
import useDate from "../../hooks/useDate";

const DateNavigation = () => {
    const { detailDate, decrementDay, incrementDay } = useDate();

    return (
        <View>
            <View style={dayWorkoutStyles.dateNavigation}>
                <TouchableOpacity onPress={decrementDay}><BackIcon/></TouchableOpacity>
                <Text style={dayWorkoutStyles.dateNavigationText}>{detailDate}</Text>
                <TouchableOpacity onPress={incrementDay}><ForwardIcon/></TouchableOpacity>
            </View>
        </View>
    );
}

export default DateNavigation;