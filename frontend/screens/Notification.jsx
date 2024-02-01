import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import styles from './notification.style'

const Notification = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View>
        <Text style={styles.txt}>Today</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.icon}>
          <Image
              source={require('../assets/images/p2.png')} 
              style={styles.c1}
            />
        </View>
        <View style={styles.descri}>
          <Text style={styles.descriText}>Climrenew posted a video: the perks of onshore wind turbines</Text>
          <Text style={styles.date}>Today 12:00pm</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Notification

