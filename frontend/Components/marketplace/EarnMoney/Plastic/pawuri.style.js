import { StyleSheet } from "react-native";
import { COLORS, SIZES } from '../../../../constants'
// import Fonts from "../../../../assets/fonts/fonts";

const styles = StyleSheet.create({
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

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 16,
        width: '100%',
        borderTopLeftRadius: 20,  
        borderTopRightRadius: 20, 
      },
      content: {
        alignItems: "center",
        justifyContent: "center"
      },
      icon: {
        height: 80,
        width: 80,
        backgroundColor: "#DBEBFF",
        borderRadius: SIZES.small,
        alignItems: "center",
        justifyContent: "center"
      },
      textRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: SIZES.large,
        marginBottom: SIZES.small
      },
      firstText: {
        flex: 1,
        fontFamily: "regular"
      },
      secText: {
        fontFamily: "regular"
      },

      contact: {
        marginTop: SIZES.large,
        marginBottom: 60,
        fontFamily: "regular"
      },
      hr: {
        borderBottomColor: '#F0F0F0', 
        borderBottomWidth: 5,    
        marginBottom: 30,
        width: 50,
        borderRadius: 3
      }
})

export default styles