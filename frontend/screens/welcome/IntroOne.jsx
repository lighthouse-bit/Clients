import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { FirstPage, SecondPage } from '../../Components'

const IntroOne = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FirstPage/>
      {/* <SecondPage/> */}
    </SafeAreaView>
  )
}

export default IntroOne

const styles = StyleSheet.create({})