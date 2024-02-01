import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

import HorizontalLine from '../marketplace/EarnMoney/Plastic/HorizontalLine'
import { COLORS, SIZES } from "../../constants";

const Header = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.headerText}></Text>
            <HorizontalLine />
        </View>
      
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "bold",
        left: SIZES.small
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large
    }
})