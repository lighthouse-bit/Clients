import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styles from './thirdPage.style'

const ThirdPage = () => {
  return (
    <View>
      <View style={styles.mainImg}>
         <Image
            source={require('../../assets/images/tr2.png')} 
            style={styles.c1}
        />
      </View>
            
        <View style={styles.bg}>
            <Image
                source={require('../../assets/images/tr1.png')} 
                style={styles.circle}
            />
        </View>

        <View style={styles.txt}>
            <Text style={styles.innerTxt}>      Green {"\n"}Consultation</Text>
            <Text style={styles.innerTxt2}>Access 1,000+ beautifully designed layouts, wireframes, and assets. Paste.</Text>
        </View>

    </View>
  )
}

export default ThirdPage

