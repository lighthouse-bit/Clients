import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SIZES,COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native';


const Upload = () => {
    const navigation = useNavigation();
  return (
        <SafeAreaView>
            <View style={[styles.container, {marginBottom: 120}]}>
                <View style={styles.button}>
                    {/* <Image
                        source={require('../../../assets/images/c3.png')} 
                        style={styles.c1}
                    /> */}
                    <Ionicons name='camera' size={54} color={"#C4C4C4"}/>
                </View>
            </View>

            
            <View style={[styles.btnContainer]}>
                <TouchableOpacity onPress={()=>navigation.navigate("Success")}>
                    <View style={styles.buttonx}>
                        <Text style={styles.btnTxt}>Upload from gallery</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    
    
  )
}

export default Upload

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",   
    },
    button: {
        width: 150,
        height: 150,
        backgroundColor: "#F2F2F2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 75,
        marginTop: 60,
        borderColor: "#5153C3",
        borderWidth: 3
      },
      buttonx: {
        width: "100%",
        height: 50,
        backgroundColor: "#19AA4B",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        // marginTop: 60,
      },
      btnContainer: {
        marginHorizontal: SIZES.small,
        // marginTop: 80
      },
      btnTxt: {
        fontFamily: "regular",
        color: COLORS.white
      }
})