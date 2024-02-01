import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",

    },
    welcomeTxt: (color, top)=> ({
        fontFamily: "bold",
        fontSize: SIZES.xLarge -5,
        marginTop: top,  
        color: color,
        marginHorizontal: 12
    }),
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: SIZES.small,
        backgroundColor: "#F0F0F0",
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium,
        height: 50
    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width: 50,
        height: "100%",
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",

    },
    dsbd: {
        flexDirection: "row",
        height: 180,
        backgroundColor: "#4CCF79",
        borderRadius: SIZES.small,
        marginHorizontal: SIZES.small,
        marginVertical: SIZES.medium,
        justifyContent: "center",
        alignItems: "center",
        
    },
    firstT: {
        fontFamily: "bold",
        color: COLORS.white,
        fontSize: SIZES.large,
        // marginHorizontal: 30,
    },

    scndT: {
        fontSize: SIZES.small,
        color: COLORS.white,
    },

    imageStyles: {
        width: 140,
        height: 140,
        top: 20
    },

    c1:{
        width:50
    },


    consult: {
        flexDirection: "row",
        borderRadius: SIZES.small,
        marginHorizontal: SIZES.small,
        borderColor: "#D3E0E2",
        borderWidth: 2,
        height: 100,
        padding: 10,
        marginTop: SIZES.small,
        
    },
    conpic: {
        backgroundColor: "#D2FAD1",
        width: 80,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
        alignItems: "center",
        justifyContent: "center"
    },
    conpic2: {
        backgroundColor: "#C6FAFF",
        width: 80,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
        alignItems: "center",
        justifyContent: "center"
    },

    gTech: {
        flexDirection: "row",
        borderRadius: SIZES.small,
        marginHorizontal: SIZES.small,
        borderColor: "#D3E0E2",
        borderWidth: 2,
        height: 100,
        padding: 10,
        marginTop: SIZES.small,
    }
})

export default styles