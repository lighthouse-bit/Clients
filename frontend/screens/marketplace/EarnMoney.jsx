import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../constants'
import { Plastic, Bottles, Catton } from '../../Components'

const EarnMoney = () => {
  return (
    <SafeAreaView style={[{backgroundColor: "#fff"}]}>
        <View>
          <Text style={styles.titleTxt}>
            Earn money for discarding waste
          </Text>
        </View>

        <View>
          <Plastic/>
          <Bottles/>
          <Catton/>
        </View>

    </SafeAreaView>
  )
}

export default EarnMoney

const styles = StyleSheet.create({
    titleTxt: {
        marginTop: SIZES.small,
        marginHorizontal: SIZES.small,
        fontFamily: "medium"
    }
})