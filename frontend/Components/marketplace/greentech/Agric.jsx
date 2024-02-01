import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './agric.style'
import { COLORS, SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native'

const Agric = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.navigate("Agriculture")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                  <Image
                  source={require('../../../assets/images/a1.png')} 
                  // style={styles.c1}
                  />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Agriculture</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding waste</Text>
                </View>
            </View>
        </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Agric