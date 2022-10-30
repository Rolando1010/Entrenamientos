import { AntDesign, Entypo, MaterialIcons, FontAwesome  } from "@expo/vector-icons";
import theme from "../styles/theme";

const BackIcon = () => <AntDesign
    name="caretleft"
    size={24}
    color={theme.fontColor1}
/>

const ForwardIcon = () => <AntDesign
    name="caretright"
    size={24}
    color={theme.fontColor1}
/>

const HomeIcon = () => <Entypo name="home" size={26} color={theme.fontColor1} style={{textAlign: "center"}}/>

const MinusIcon = () => <AntDesign name="minussquareo" size={24} color={theme.fontColor1}/>

const PlusIcon = () => <AntDesign name="plussquareo" size={24} color={theme.fontColor1}/>

const AddToListIcon = () => <Entypo
    name="add-to-list"
    size={30}
    color={theme.fontColor1}
/>

const TrashIcon = () => <MaterialIcons name="delete" size={30} color={theme.fontColor1}/>

const CalendarIcon = () => <FontAwesome name="calendar" size={26} color={theme.fontColor1} style={{textAlign: "center"}}/>

const GraphIcon = () => <Entypo name="bar-graph" size={26} color={theme.fontColor1} style={{textAlign: "center"}}/>

const CloseIcon = () => <AntDesign name="close" size={26} color={theme.fontColor1}/>

const ListIcon = () => <FontAwesome name="list" size={24} color={theme.fontColor1}/>

export {
    BackIcon,
    ForwardIcon,
    HomeIcon,
    MinusIcon,
    PlusIcon,
    AddToListIcon,
    TrashIcon,
    CalendarIcon,
    GraphIcon,
    CloseIcon,
    ListIcon
}