import { StyleSheet } from "react-native";
import { COLORS, SI, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 200,
        marginEnd: 22,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        marginHorizontal: 12,
        position: "relative"
    },
    c1: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        width: 15,
        height: 15,
        
      },
})

export default styles