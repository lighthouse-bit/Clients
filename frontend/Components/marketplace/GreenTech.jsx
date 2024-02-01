import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './greenTech.style'
import { COLORS,SIZES } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'


const GreenTech = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate("GreenTech")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                  <Image
                      source={require('../../assets/images/c2.png')} 
                      style={styles.c1}
                  />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Green-tech solutions</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding waste</Text>
                </View>
            </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default GreenTech

