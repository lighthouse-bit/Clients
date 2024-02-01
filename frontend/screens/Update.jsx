import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './update.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UpdateHeader } from '../Components'
import { FlatList } from 'react-native-gesture-handler'
import UpdatePost from '../Components'

const Update = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
            <UpdateHeader/>
        </View>
        <View>
          <FlatList>
            <UpdatePost/>
          </FlatList>
          
        </View>

    </SafeAreaView>
  )
}

export default Update

