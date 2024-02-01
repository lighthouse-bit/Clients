import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import HorizontalLine from '../../marketplace/EarnMoney/Plastic/HorizontalLine'

const UpdateHeader = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.headerText}> Updates</Text>    
        </View>   
        <HorizontalLine/>
    </SafeAreaView>
  )
}

export default UpdateHeader

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "bold",
        left: SIZES.small,
        fontSize: SIZES.large
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large,
        // marginBottom: SIZES.small
        
    },
    all: {
        backgroundColor: '#fff',
        
        justifyContent: "center",
       
    }
})