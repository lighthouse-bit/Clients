import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import HorizontalLine from '../EarnMoney/Plastic/HorizontalLine'
import { COLORS, SIZES } from '../../../constants'

const ConHeader = () => {
  return (
    <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerText}> Choose consultation</Text>
                <HorizontalLine />
            </View>
          
        </SafeAreaView>
  )
}

export default ConHeader

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "medium",
        left: SIZES.small
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large
    }
})