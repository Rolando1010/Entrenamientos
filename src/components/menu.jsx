import { useEffect, useState } from "react";
import { View, Text, BackHandler, Image } from "react-native";
import { Link, useLocation, useNavigate } from "react-router-native";
import { menuStyle } from "../styles/components";
import { CalendarIcon, GraphIcon, HomeIcon } from "./icons";

const sections = [
    {link: "/", icon: <HomeIcon/>},
    {link: "/calendar", icon: <CalendarIcon/>},
    {link: "/statistics", icon: <GraphIcon/>},
];

const Menu = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [sectionActive, setSectionActive] = useState(0);
    const [visitedURLs, setVisitedURLs] = useState([]);

    const putCorrectSectionByURL = () => {
        let currentSectionByURL;
        sections.forEach(({ link }, index) => {
            if(pathname.indexOf(link) === 0){
                currentSectionByURL = index;
            }
        });
        setSectionActive(currentSectionByURL);
    }

    const updateVisitedURLs = () => {
        setVisitedURLs([...visitedURLs, pathname]);
    }

    const backURL = () => {
        const firstURLs = visitedURLs.slice(0, -1);
        if(firstURLs.length){
            navigate(firstURLs[firstURLs.length - 1]);
        }else{
            BackHandler.exitApp();
        }
        setVisitedURLs(firstURLs);
        return true;
    }

    useEffect(() => {
        putCorrectSectionByURL();
        updateVisitedURLs();
    }, [pathname]);

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", backURL);
        return () => BackHandler.removeEventListener("hardwareBackPress", backURL);
    }, [visitedURLs]);

    return (
        <View style={menuStyle.menu}>
            <View style={menuStyle.title}>
                <Image style={menuStyle.icon} source={require("../../assets/icon.png")}/>
                <Text style={menuStyle.titleText}>Entrenamientos</Text>
            </View>
            <View style={menuStyle.sectionContainer}>
                {sections.map(({link, icon}, index) =>
                    <View
                        key={`section-${index}`}
                        style={[menuStyle.section, sectionActive === index ? menuStyle.sectionActive : null]}
                    >
                        <Link
                            to={link}
                            onPress={() => setSectionActive(index)}
                            underlayColor="transparent"
                        >{icon}</Link>
                    </View>
                )}
            </View>
        </View>
    );
}


export default Menu;