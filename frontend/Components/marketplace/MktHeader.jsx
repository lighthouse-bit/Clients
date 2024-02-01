import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import HorizontalLine from './EarnMoney/Plastic/HorizontalLine'
import { COLORS,SIZES } from '../../constants'

const MktHeader = () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.headerText}> Marketplace</Text>
                <HorizontalLine />
            </View>
          
        </SafeAreaView>
      )
}

export default MktHeader

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "bold",
        left: SIZES.small,
        fontSize: SIZES.large
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large
    }
})