import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import React from 'react'
import { UploadHeader, Upload } from '../../../Components'

const ProfileUpload = () => {
  return (
    <SafeAreaView>
      <UploadHeader/>
      <Upload/>
    </SafeAreaView>
  )
}

export default ProfileUpload

const styles = StyleSheet.create({})