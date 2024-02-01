import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../consultation/renewEnergy.style'
import { COLORS, SIZES } from '../../../constants'

const RenewEnergy = () => {
  return (
    <SafeAreaView>
        <View style={styles.consult}>
            <View style={styles.conpic}>
                <Image
                      source={require('../../../assets/images/x2.png')} 
                      // style={styles.c1}
                  />
            </View>
            <View style={{top:15}}>
                <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Renewable Energy</Text>
                <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default RenewEnergy

