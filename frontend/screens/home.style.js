import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants"; 


const styles = StyleSheet.create({
    textStyle: {
        fontFamily: "bold",
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: COLORS.gray,
        right: 80
    },
    cartCount: {
        position: "absolute",
        bottom: 13,
        width: 14,
        height: 14,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "red",
        justifyContent: "center",
        zIndex: 999,
        left: 9
    },
    cartNumber: {
        fontFamily: "regular",
        fontWeight: "600",
        fontSize: 10,
        color: COLORS.lightWhite
    },
    inner: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 2,  
        borderColor: 'white',
        zIndex: 999
    },
    c1: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover',
    },
    profile: {
        width: 35,
        height: 35,
        backgroundColor: "blue",
        borderRadius: "50%",
        // borderColor: "#D3E0E2",
        // borderWidth: 2,
        // alignItems: "center",
        // justifyContent: "center"
    }
})

export default styles