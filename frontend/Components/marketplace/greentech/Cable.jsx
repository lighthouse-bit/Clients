import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './cable.style'
import { COLORS, SIZES } from '../../../constants'

const Cable = () => {
  return (
    <SafeAreaView>
        <View style={styles.consult}>
            <View style={styles.conpic}>
             {/* <Image
                source={require('../../../assets/images/c2.png')} 
                style={styles.c1}
              /> */}
            </View>
            <View style={{top:15}}>
                <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Cable Installations</Text>
                <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default Cable