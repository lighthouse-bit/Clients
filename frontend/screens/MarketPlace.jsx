import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './marketPlace.style'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Mkt, EarnFromWaste, GreenTech, MktHeader } from '../Components'
import { useNavigation } from '@react-navigation/native'


const MarketPlace = () => {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View>
          <MktHeader/>
          <Text style={styles.titleTxt}>
            Earn money for discarding waste
          </Text>
        </View>
        <View>
            <EarnFromWaste/>  
            <Mkt/>
            <GreenTech/>
        </View>

    </SafeAreaView>
  )
}

export default MarketPlace

