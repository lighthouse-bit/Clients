import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS } from '../../../constants'
import { Zamunda, Pawuri, Carton } from '../../../Components'

const Plastic = () => {
  return (
    <SafeAreaView >
        
        <View>
          <Zamunda/>
          <Pawuri/>
          <Carton/>
        </View>

    </SafeAreaView>
  )
}

export default Plastic

const styles = StyleSheet.create({})