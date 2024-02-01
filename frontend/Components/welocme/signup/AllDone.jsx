import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { SIZES,COLORS } from '../../../constants'
import { useNavigation } from '@react-navigation/native';


const AllDone = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={[styles.container, {marginBottom: 120}]}>
            <View style={styles.icon}>
                <View style={styles.innerLayer}>

                </View>
                <View style={styles.innerLayer2}>

                </View>
                <View style={styles.innerLayer3}>

                </View>

                <MaterialIcons name='done' size={30} color={"white"}/>
            </View>

            <View style={styles.textWrapper}>
                <Text style={styles.success}>Successful!</Text>
                <Text style={styles.success2}>Your photo has been uploaded successfully</Text>
            </View>

            <View style={styles.icon}>
            
                <View style={styles.innerLayer31}>

                </View>
                <View style={styles.innerLayer4}>
                    <Image
                        source={require('../../../assets/images/userDefault.png')} 
                        style={styles.c1}
                    />
                </View>
            </View>
        
        </View>

        <View style={styles.btnContainer}>
            <TouchableOpacity onPress={()=>navigation.navigate('Bottom Navigation', { screen: 'Home' })}>
                <View style={styles.buttonx}>
                    <Text style={styles.btnTxt}>Get Started</Text>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default AllDone

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",   
    },
    textWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 70   
    },
    success: {
        fontFamily: "bold",
        color: "green",
        fontSize: SIZES.large,
        marginBottom: 10
    },
    success2: {
        fontFamily: "regular"
    },
    innerLayer: {
        height: 95,
        width: 95,
        borderColor: "#DAF2E2",
        borderRadius: 50,
        marginTop: 200,
        borderWidth: 7,
        position: 'absolute',
    },
    innerLayer2: {
        height: 80,
        width: 80,
        borderColor: "#B8E1C6",
        borderRadius: 50,
        marginTop: 200,
        borderWidth: 7,
        position: 'absolute',
    },
    innerLayer3: {
        height: 65,
        width: 65,
        backgroundColor: "#19AA4B",
        borderRadius: 50,
        marginTop: 200,
        position: 'absolute',
    },
    innerLayer31: {
        height: 105,
        width: 105,
        borderColor: "#B8E1C6",
        borderRadius: 50,
        marginTop: 200,
        position: 'absolute',
        borderWidth: 5,
        zIndex: 2
    },
    innerLayer4: {
        height: 120,
        width: 120,
        backgroundColor: "#19AA4B",
        borderRadius: 60,
        marginTop: 200,
        position: 'absolute',
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 100,
    },
    c1: {
        width: 120,
         height: 120
    },
    buttonx: {
      width: "100%",
      height: 50,
      backgroundColor: "#19AA4B",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 7,
    //   marginTop: 60,
    //   position: "absolute",
    //   flex: 2
    },
    btnContainer: {
      marginHorizontal: SIZES.small,
    //   marginTop: 80
    },
    btnTxt: {
      fontFamily: "regular",
      color: COLORS.white
    }
})