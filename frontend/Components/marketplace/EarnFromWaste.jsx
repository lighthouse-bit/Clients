import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES } from "../../constants";
import React from 'react'
import styles from './earnFromWaste.style';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'

const EarnFromWaste = () => {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView>
      <TouchableOpacity onPress={()=>navigation.navigate("EarnMoney")}>
        <View style={styles.consult}>
            <View style={styles.conpic}>
                <Image
                      source={require('../../assets/images/c3.png')} 
                      style={styles.c1}
                  />
            </View>
            <View style={{top:15}}>
                <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Earn money from waste</Text>
                <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
            </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default EarnFromWaste

