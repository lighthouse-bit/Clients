import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../constants";

const styles = StyleSheet.create({
    txt: {
        marginHorizontal: SIZES.small,
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
        fontFamily: "medium",
        
    },
    descri: {
        marginLeft: SIZES.small
    },
    row: {
        flexDirection: "row",
        marginHorizontal: SIZES.small,
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
        paddingRight: SIZES.large
     },
     descriText: {
        fontFamily: "regular"
     },
     icon: {
        width: 50,
        height: 50,
        backgroundColor: "#C6FAFF",
        borderRadius: SIZES.small,
        justifyContent: "center",
        alignItems: "center"
     },
     c1:{
        width:30,
        height: 30
    },
    date: {
        fontFamily: "regular",
        fontSize: SIZES.small
    }
})

export default styles