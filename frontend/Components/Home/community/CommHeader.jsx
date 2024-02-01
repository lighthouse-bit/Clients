import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import HorizontalLine from '../../marketplace/EarnMoney/Plastic/HorizontalLine'
import { COLORS, SIZES } from '../../../constants'

const CommHeader = () => {
  return (
    <View >
      <SafeAreaView style={styles.all}>
            <View style={styles.container}>
                <Text style={styles.headerText}> Community</Text>    
            </View>       
        </SafeAreaView>
        
    </View>
    
  )
}

export default CommHeader

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "bold",
        left: SIZES.small,
        fontSize: SIZES.large
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large,
        marginBottom: SIZES.small
        
    },
    all: {
        backgroundColor: '#fff',
        
        justifyContent: "center",
       
    }
    
})