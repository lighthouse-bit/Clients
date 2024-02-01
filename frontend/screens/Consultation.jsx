import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Consult, ClimChange, RenewEnergy } from '../Components'

import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from "../constants";

const Consultation = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }} >
        <View>
          
          <Text style={styles.titleTxt}>
            Earn money for discarding waste
          </Text>
        </View>
        <View>
          <Consult/>
          <RenewEnergy/>
          <ClimChange/>
        </View>

    </SafeAreaView>
  )
}

export default Consultation

const styles = StyleSheet.create({
    titleTxt: {
        marginTop: SIZES.small,
        marginHorizontal: SIZES.small,
        fontFamily: "medium"
    }
})