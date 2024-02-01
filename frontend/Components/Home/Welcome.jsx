import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS,SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {
    const navigation= useNavigation();
  return (
    <View>

        {/* Search Container */}
        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Feather name='search' size={24} style={styles.searchIcon}/>
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=''
                    onPressIn={()=>navigation.navigate("Search")}
                    placeholder="what are you looking for"
                />
            </View>

            {/* <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons
                        
                        name='camera-outline' size={SIZES.xLarge}
                        color={COLORS.offwhite}
                    />
                </TouchableOpacity>
            </View> */}
        </View>

        {/* Earn money for discarding waste */}
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate("EarnMoney")}>
                <View style={styles.dsbd}>
                    <View>
                        <Text style={styles.firstT}>Earn money {"\n"}for discarding {"\n"}waste</Text>
                        <Text style={styles.scndT}>Earn money for discarding waste</Text>
                    </View>
                    
                    <Image
                        source={require('../../assets/images/r1.png')} 
                        style={styles.imageStyles}
                    />
                </View>
            </TouchableOpacity>
        </View>

        {/* Quick Services */}
        <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}> Quick Services</Text>
        </View>

        {/* Consultation */}
        <TouchableOpacity onPress={()=>navigation.navigate("Consultation")}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                        <Image
                            source={require('../../assets/images/c1.png')} 
                            style={styles.c1}
                        />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Consultation</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
                </View>
            </View>
        </TouchableOpacity>
        {/* Green-tech solutions */}
        <TouchableOpacity onPress={()=>navigation.navigate("GreenTech")}>
            <View style={styles.gTech}>
                <View style={styles.conpic2}>
                        <Image
                            source={require('../../assets/images/c2.png')} 
                            style={styles.c1}
                        />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Green-tech solutions</Text>
                    <Text style={{fontSize:SIZES.small}}>Earn money for discarding wste</Text>
                </View>
            </View>

        </TouchableOpacity>
        {/*Updates */}
        {/* <View style={styles.container}>
            <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}> Updates</Text>
        </View> */}
       
    </View>
  );
};

export default Welcome