import { StyleSheet, View, Text } from "react-native";
import theme from "../styles/theme";

const Table = ({ titles, data, rowStyle }) =>
    <View horizontal={true}>
        <View>
            {titles &&
                <Row row={titles} ishead={true}/>
            }
            {data.map((row, index) =>
                <Row key={`row-${index}`} row={row} style={rowStyle}/>
            )}
        </View>
    </View>

const Row = ({ row, ishead, style }) =>
    <View style={[styles.row, style]}>
        {row.map((data, index) =>
            <Cell
                key={`cell-${ishead ? "title-" : ""}${index}`}
                data={data}
                isTitle={ishead}
                width={`${100 / row.length}%`}
            />
        )}
    </View>

const Cell = ({ data, isTitle, width }) =>
    <View style={{ width }}>
        <Text style={[styles.cell, {fontWeight: isTitle ? "bold" : ""}]}>
            {data}
        </Text>
    </View>

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        padding: 10,
    },
    cell: {
        color: theme.fontColor1,
        fontSize: 16,
        textAlign: "center"
    }
});

export default Table;