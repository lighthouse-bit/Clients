import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import HorizontalLine from '../../marketplace/EarnMoney/Plastic/HorizontalLine'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const SignupHeader = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
      };
  return (
    <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity onPress={handleBack}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}> Let's meet you</Text>
                {/* <HorizontalLine /> */}
            </View>
          
        </SafeAreaView>
  )
}

export default SignupHeader

const styles = StyleSheet.create({
    headerText: {
        fontFamily: "bold",
        left: SIZES.small,
        fontSize: SIZES.large
    },
    container: {
        // marginHorizontal: 12,
        marginTop: SIZES.large,
        flexDirection: "row",
        marginHorizontal: SIZES.small
    }
})