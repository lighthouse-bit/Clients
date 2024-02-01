import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../../constants'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const UploadHeader = () => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
      };
  return (
    <View>
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerText}> Upload a Picture</Text>
           
        </View>
    </View>
  )
}

export default UploadHeader

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