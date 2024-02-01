import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './mkt.style'
import { COLORS,SIZES } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import {ConHeader} from './consultation/ConHeader'

const Mkt = () => {
    const navigation = useNavigation();
  return (

    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate("Consultation")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                    <Image
                        source={require('../../assets/images/c1.png')} 
                        style={styles.c1}
                    />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Consultation</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
                </View>
            </View>
        </TouchableOpacity>
    </SafeAreaView>
    
  )
}

export default Mkt

