import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './signup.style'
import { SignupHeader,Details } from '../../Components'

const Signup = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SignupHeader/>

      <Details/>
    </SafeAreaView>
  )
}

export default Signup

