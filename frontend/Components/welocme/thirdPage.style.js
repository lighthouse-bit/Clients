import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    c1: {
        width: 250,
        height: 250,
        top: 70,
        // position: "absolute"
    },
    mainImg: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 100,
        zIndex: 2,
    },
    bg: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        position: "absolute"
    },
    circle: {
        width: 290,
        height: 299,
        alignItems: "center",
        justifyContent: "center",
        left: 50,
        bottom: 70
    },
    bg1: {
        alignItems: "center",
        justifyContent: "center",
        
        position: "absolute"
    },
    circle1: {
        width: 120,
        height: 122,
        alignItems: "center",
        justifyContent: "center",
        left: 40,
        top: 200
    },
    txt: {
        justifyContent: "center",
        alignItems: "center",
        bottom: 140
    },
    innerTxt: {
        top: 130,
        fontFamily: "medium",
        fontSize: SIZES.xLarge
    },
    innerTxt2: {
        top: 130,
        paddingLeft: 50,
        paddingRight: 50,
        fontFamily: "regular"
    },
    btn1: {
        width: 70,
        height: 35,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        top: 130,
        marginRight: SIZES.medium,
        borderRadius: 7
    },
    btn1Txt: {
        color: "#19AA4B",
        fontFamily: "regular"
    },
    btn2: {
        width: 70,
        height: 35,
        backgroundColor: "#19AA4B",
        justifyContent: "center",
        alignItems: "center",
        top: 130,
        borderRadius: 7
    },
    btn2Txt: {
        color: COLORS.white,
        fontFamily: "regular"
    },
    btnWrapper: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: SIZES.xLarge
    }
})

export default styles