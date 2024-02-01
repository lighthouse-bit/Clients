import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    consult: {
        flexDirection: "row",
        borderRadius: SIZES.small,
        marginHorizontal: SIZES.small,
        borderColor: "#D3E0E2",
        borderWidth: 2,
        height: 100,
        padding: 10,
        // marginTop: SIZES.xSmall,
    },
    conpic: {
        backgroundColor: "#DBEBFF",
        width: 80,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
        alignItems: "center",
        justifyContent: "center"
    },
    c1:{
        width:50
    },
})

export default styles