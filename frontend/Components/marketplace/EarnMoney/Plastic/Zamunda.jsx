import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import styles from './zamunda.style'

const Zamunda = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate("Plastic")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                    <Image
                      source={require('../../../../assets/images/p1.png')} 
                      style={styles.c1}
                  />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Zamunda recycling</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding waste</Text>
                </View>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Zamunda

