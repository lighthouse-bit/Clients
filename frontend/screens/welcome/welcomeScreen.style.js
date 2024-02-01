import { StyleSheet } from "react-native";
import { SIZES,COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        position: 'absolute',
        bottom: 50, // Adjust this value to set the distance from the bottom
        width: '100%',
      },
      c1: {
        width: 250,
        height: 250,
        top: 70,
        // position: "absolute"
    },
    mainImg: {
        justifyContent: "center",
        alignItems: "center"
    },
    bg: {
        alignItems: "center",
        justifyContent: "center",
    },
    circle: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        // left: 100,
        // bottom: 70
    },
    txt: {
        justifyContent: "center",
        alignItems: "center"
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
        
        marginRight: SIZES.medium,
        borderRadius: 7
    },
    btn1Txt: {
        color: "#19AA4B",
        fontFamily: "regular"
    },
    conti: {
        width: 120,
        height: 35,
        backgroundColor: "#19AA4B",
        justifyContent: "center",
        alignItems: "center",
        top:40,
        marginRight: SIZES.medium,
        borderRadius: 7
    },
    contiTxt: {
        color: COLORS.white,
        fontFamily: "regular"
    },
    btn2: {
        width: 70,
        height: 35,
        backgroundColor: "#19AA4B",
        justifyContent: "center",
        alignItems: "center",
        
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