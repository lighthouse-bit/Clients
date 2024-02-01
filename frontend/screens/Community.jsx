import { TouchableOpacity, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './community.style'
import { CommHeader } from '../Components'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Community = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{marginBottom:180}}>
      <View >
          <CommHeader/>

          <ScrollView 
          
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.icon}>
                {/* <Image
                  source={require('../assets/images/p2.png')} 
                  style={styles.c1}
                /> */}
              </View>

              <View>
                <Text style={styles.name}>Anderson Femi</Text>
                <Text style={styles.userName}>@andreyecochain 18h</Text>
              </View>         
            </View>

            <View style={styles.desc}>
              <Text style={styles.description}>
                    According to the trade association PlasticEurope, worldwide
                    plastic production grew from 1.5 million metric tons per year
                    in 1950 to and estimated 275 million metric tons by 2018.
                    Compared with the materials in common use in the first half
                    of the 20th century, such as glass, paper, iron...  See more
              </Text>
            </View>

            <View style={styles.btns}>
                <View>
                  <Ionicons name="heart" size={28} color="red" />
                </View>
                <View style={styles.likeCount}>
                  <Text style={styles.likeTxt}>123</Text>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("PostDetail")}>
                  <View>
                    <Ionicons name="chatbox" size={28} color="gray" />
                  </View>
                </TouchableOpacity>
                <View>
                  <Text style={styles.mssgTxt}>123</Text>
                </View>

                <View>
                  <Ionicons name="send" size={28} color="gray" style={styles.rotatedIcon}/>
                </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.row}>
              <View style={styles.icon}>
                {/* <Image
                  source={require('../assets/images/p2.png')} 
                  style={styles.c1}
                /> */}
              </View>

              <View>
                <Text style={styles.name}>Anderson Femi</Text>
                <Text style={styles.userName}>@andreyecochain 18h</Text>
              </View>         
            </View>

            <View style={styles.desc}>
              <Text style={styles.description}>
                According to the trade association PlasticEurope, worldwide
                plastic production grew from 1.5 million metric tons per year
                See more
              </Text>
              <View style={styles.imgPost}>
                <Image
                  source={require('../assets/images/post.png')} 
                  style={styles.img}
                />
              </View>
            </View>

            <View style={styles.btns}>
                <View>
                  <Ionicons name="heart" size={28} color="red" />
                </View>
                <View style={styles.likeCount}>
                  <Text style={styles.likeTxt}>123</Text>
                </View>

                <View>
                  <Ionicons name="chatbox" size={28} color="gray" />
                </View>
                <View>
                  <Text style={styles.mssgTxt}>123</Text>
                </View>

                <View>
                  <Ionicons name="send" size={28} color="gray" style={styles.rotatedIcon}/>
                </View>
            </View>
          </View>
        </ScrollView>
      <TouchableOpacity style={styles.plusButton}>
        <Ionicons name="add-circle" size={60} color="#19AA4B" />
      </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Community

