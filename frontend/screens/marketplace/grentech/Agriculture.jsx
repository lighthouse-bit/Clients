import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FarmPlus } from '../../../Components'


const Agriculture = () => {
  return (
    <SafeAreaView >

        <View>
            <FarmPlus/>
        </View>

    </SafeAreaView>
  )
}

export default Agriculture

const styles = StyleSheet.create({})