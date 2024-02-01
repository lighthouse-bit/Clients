import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        marginHorizontal: SIZES.small,
        marginTop: SIZES.medium,
        marginBottom: SIZES.medium,
        paddingRight: SIZES.large
    },
    icon: {
       width: 50,
       height: 50,
       backgroundColor: "#C6FAFF",
       borderRadius: "100%",
       justifyContent: "center",
       alignItems: "center"
    },
    name: {
        fontFamily: "medium",
        // fontWeight: "bold",
        marginLeft: SIZES.small,
        fontSize: SIZES.large
    },
    userName: {
        marginLeft: SIZES.small,
        fontFamily: "light",
        color: COLORS.gray,
        fontSize: SIZES.small
    },
    description: {
        paddingRight: SIZES.large,
        fontFamily: "regular",
        paddingBottom: SIZES.medium
    },
    desc: {
        marginHorizontal: SIZES.small,
    },
    container: {
        marginTop: 5,
        backgroundColor: "#fff",
        
    },
    btns: {
        flexDirection: "row",
        marginHorizontal: SIZES.small,
        marginTop: SIZES.small,
        marginBottom: SIZES.medium,
        // justifyContent: "center",
        alignItems: "center"
    },
    likeCount: {
        marginLeft: 2
    },
    likeTxt: {
        color: "red",
        marginRight: SIZES.xxLarge,
        fontFamily: "regular",
        fontSize: SIZES.large
    },
    mssgTxt: {
        color: COLORS.gray,
        marginRight: SIZES.xxLarge,
        fontFamily: "regular",
        fontSize: SIZES.large
    },
    c1: {
        width: 20
    },
    rotatedIcon: {
        transform: [{ rotate: '320deg' }], 
      },
      imgPost: {
        paddingRight: SIZES.large,
      },
      img: {
        height: 200,
        borderRadius: SIZES.small,
        
      },
      plusButton: {
        position: 'absolute',
        bottom: 16,
        right: 16,
      },
})

export default styles