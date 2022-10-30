import { TouchableOpacity, Text, View } from "react-native";
import { buttonStyle } from "../styles/components";
import theme from "../styles/theme";

const Button = ({ type, children, ...properties }) => {
    return (
        <TouchableOpacity
            style={[buttonStyle.button, {backgroundColor: theme[type || "primary1"]}]}
            {...properties}
        >
            <Text style={buttonStyle.text}>{children}</Text>
        </TouchableOpacity>
    );
}

const IconButton = ({ icon, isNotTouchable, children, ...properties }) => {
    const Container = ({ children, ...containerProperties }) => (isNotTouchable ?
        <View {...containerProperties}>
            {children}
        </View>
        :
        <TouchableOpacity {...containerProperties}>
            {children}
        </TouchableOpacity>
    );

    return (
        <Container {...properties} style={buttonStyle.icon}>
            {icon}
            <Text style={buttonStyle.iconText}>{children}</Text>
        </Container>
    );
}

export {
    IconButton
}

export default Button;