import { Dimensions, StyleSheet, Platform } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { ECharts } from "react-native-echarts-wrapper";
import theme from "../styles/theme";

const LineGraph = props => getGraphByOS("line")(props);

const getGraphByOS = type => graphsByOS[type][Platform.OS];

const LineGraphWeb = ({ x, y }) =>
    <LineChart
        data={{
            labels: x,
            datasets: [{data: y}]
        }}
        width={Dimensions.get("window").width - 20}
        height={220}
        chartConfig={{
            backgroundGradientFrom: theme.background2,
            backgroundGradientTo: theme.background2,
            decimalPlaces: 2,
            color: () => theme.primary1,
            labelColor: () => theme.fontColor1,
            propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: theme.fontColor1
            }
        }}
        bezier
        style={styles.line}
    />

const styles = StyleSheet.create({
    line: {
        marginTop: 20,
        borderRadius: 10
    }
});

const LineGraphAndroid = ({ x, y }) =>
    <ECharts
        option={{
            a: console.log(),
            xAxis: {data: x},
            yAxis: {},
            series: [{
                data: y,
                type: "line"
            }]
        }}
        backgroundColor={theme.primary2}
    />

const graphsByOS = {
    "line": {
        "web": LineGraphWeb,
        "android": LineGraphAndroid
    }
}

export {
    LineGraph
}