import { TouchableOpacity, Text, View, ScrollView,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import {Welcome} from "../Components"
import {Updt} from '../Components'
import {ProductRow} from '../Components'
import { useNavigation } from '@react-navigation/native'



const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[{backgroundColor: "#fff"}]}>
      
        <View style={styles.appBarWrapper}>
          <View style={styles.appBar}>
            {/* <Ionicons name='location-outline' size={24}/> */}
            <View style={styles.profile}>
              <Image
                source={require('../assets/images/userDefault.png')} 
                style={styles.c1}
                resizeMode="cover"
              />
              {/* <View style={styles.inner}>

              </View> */}
            </View>

            <Text style={styles.location}> Welcome Deji</Text>

            <View style={{alignItems: 'flex-end'}}>
                <View style={styles.cartCount}>
                    {/* <Text style={styles.cartNumber}>8</Text> */}
                </View>
                {/* Notification */}
                <TouchableOpacity onPress={()=>navigation.navigate("Notification")}>
                  <Fontisto name='bell' size={24}/>
                </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView 
          style={{marginBottom:120}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <Welcome />
          <Updt/>
          <ProductRow/>
        </ScrollView>
     
    </SafeAreaView>
  )
}

export default Home
