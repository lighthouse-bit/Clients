import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../constants'
import { Solar, Agric, Cable } from '../../Components'


const GreenTech = () => {
  return (
    <SafeAreaView >
        <View>
          <Text style={styles.titleTxt}>
            Earn money for discarding waste
          </Text>
        </View>

        <View>
          <Solar/>
          <Agric/>
          <Cable/>
        </View>

    </SafeAreaView>
  )
}

export default GreenTech

const styles = StyleSheet.create({
    titleTxt: {
        marginTop: SIZES.small,
        marginHorizontal: SIZES.small,
        fontFamily: "medium"
    }
})