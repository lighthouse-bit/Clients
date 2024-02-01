import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './secondPage.style'

const SecondPage = () => {
  return (
    <View>
      
      <View style={styles.mainImg}>
         <Image
            source={require('../../assets/images/trash.png')} 
            style={styles.c1}
        />
      </View>
            
        <View style={styles.bg}>
            <Image
                source={require('../../assets/images/elp1.png')} 
                style={styles.circle}
            />
        </View>
        <View style={styles.bg1}>
            <Image
                source={require('../../assets/images/epl.png')} 
                style={styles.circle1}
            />
        </View>

        <View style={styles.txt}>
            <Text style={styles.innerTxt}>Earn Money {"\n"}from waste</Text>
            <Text style={styles.innerTxt2}>Access 1,000+ beautifully designed layouts, wireframes, and assets. Paste.</Text>
        </View>

    </View>
  )
}

export default SecondPage

