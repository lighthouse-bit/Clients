import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { COLORS, SIZES } from '../../../../constants'
import styles from './farmPlus.style'

const FarmPlus = () => {
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate("")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>

                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>FarmPlus</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding waste</Text>
                </View>
            </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default FarmPlus