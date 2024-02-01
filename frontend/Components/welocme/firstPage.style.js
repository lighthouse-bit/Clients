import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../constants"

const styles = StyleSheet.create({
    c1: {
        width: 280,
        height: 260,
        top: 70,
        right: 15
    },
    mainImg: {
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    },
    bg: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        position: "absolute"
    },
    circle: {
        width: 200,
        height: 230,
        alignItems: "center",
        justifyContent: "center",
        top: 40
        
    },
    bg1: {
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        position: "absolute"
    },
    circle1: {
        width: 200,
        height: 230,
        alignItems: "center",
        justifyContent: "center",
        top: 150
        
    },
    txt: {
        justifyContent: "center",
        alignItems: "center",
        
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