import Toast, { InfoToast, SuccessToast, ErrorToast } from "react-native-toast-message";
import theme from "../styles/theme";

const backgroundColor = "#2e2d2f";
const borderLeftWidth = 10;
const fontSize = 17;
const color = theme.fontColor1;

const toastConfig = {
    info: props => (
        <InfoToast
            {...props}
            style = {{
                backgroundColor,
                borderLeftWidth,
                borderLeftColor: "#074450"
            }}
            text1Style = {{
                fontSize,
                color
            }}
        />
    ),
    success: props => (
        <SuccessToast
            {...props}
            style = {{
                backgroundColor,
                borderLeftWidth,
                borderLeftColor: "#1c4d0f"
            }}
            text1Style = {{
                fontSize,
                color
            }}
        />
    ),
    error: props => (
        <ErrorToast
            {...props}
            style = {{
                backgroundColor,
                borderLeftWidth,
                borderLeftColor: "#d73640"
            }}
            text1Style = {{
                fontSize,
                color
            }}
        />
    )
};

const breakText = (text, indexBreak) => {
    let newText = "";
    let breakeableText = text;
    while(true){
        if(breakeableText.length > indexBreak){
            const breakedText = breakeableText.substring(0,indexBreak);
            newText += breakedText + "\n";
            breakeableText = breakeableText.substring(indexBreak);
        }else{
            newText += breakeableText;
            break;
        }
    }
    return newText;
}

const infoToast = (message, position = "bottom") => Toast.show({
    type: "info",
    text1: breakText(message, 26),
    position: position
});

const successToast = (message, position = "bottom") => Toast.show({
    type: "success",
    text1: breakText(message, 26),
    position: position
});

const errorToast = message => Toast.show({
    type: "error",
    text1: breakText(message, 26),
    position: "bottom"
});

const hideToast = () => Toast.hide();

const ToastContainer = () => <Toast config={toastConfig}/>;

export {
    infoToast,
    successToast,
    errorToast,
    hideToast
}

export default ToastContainer;