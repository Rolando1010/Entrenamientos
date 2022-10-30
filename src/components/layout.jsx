import { View } from "react-native";
import appStyle from "../styles/app";
import Menu from "./menu";
import ToastContainer from "./toast";

const Layout = ({ children }) => <>
    <Menu/>
    <View style={appStyle.layout}>
        {children}
    </View>
    <ToastContainer/>
</>;

export default Layout;