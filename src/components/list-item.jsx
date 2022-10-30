import { Text, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import { listItemStyle } from "../styles/components";
import { TrashIcon } from "./icons";

const ListItem = ({ text, url, deletion }) =>
    <View style={listItemStyle.container}>
        <View style={listItemStyle.listItem}>
            <Link to={url} style={{width: "80%"}} underlayColor="transparent">
                <Text style={listItemStyle.listItemText}>{text}</Text>
            </Link>
            <TouchableOpacity onPress={deletion}>
                <TrashIcon/>
            </TouchableOpacity>
        </View>
    </View>

export default ListItem;