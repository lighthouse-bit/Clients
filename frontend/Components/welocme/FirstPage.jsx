import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './firstPage.style'

const FirstPage = () => {
  return (
    <View>
      
      <View style={styles.mainImg}>
         <Image
            source={require('../../assets/images/w1.png')} 
            style={styles.c1}
        />
      </View>
            
        <View style={styles.bg}>
            <Image
                source={require('../../assets/images/elp.png')} 
                style={styles.circle}
            />
        </View>
        <View style={styles.bg1}>
            <Image
                source={require('../../assets/images/Ellipse 1708.png')} 
                style={styles.circle1}
            />
        </View>

        <View style={styles.txt}>
            <Text style={styles.innerTxt}>      Green {"\n"}Consultation</Text>
            <Text style={styles.innerTxt2}>Access 1,000+ beautifully designed layouts, wireframes, and assets. Paste.</Text>
        </View>

    </View>
  )
}

export default FirstPage

