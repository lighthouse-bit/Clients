import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView  } from 'react-native'
import React, { useRef, useState }  from 'react'
import Swiper from 'react-native-swiper';
import IntroOne from './IntroOne';
import SecondPge from './SecondPge';
import ThirdPge from './ThirdPge';
import styles from './welcomeScreen.style';

const WelcomeScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const swiperRef = useRef(null);
    const handleSkip = () => {
        navigation.navigate('Signup');
      };

      const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.scrollBy(1, true);
          }
      };
      const handleContinue = () => {
        navigation.navigate('Signup');
      };
      
    
      return (
        <SafeAreaView style={styles.container}>
          {/* Swiper component for slide-through onboarding */}
          <Swiper loop={false} showsButtons={false} ref={swiperRef} onIndexChanged={(index) => setCurrentIndex(index)}>
            <View style={styles.slide}>
              <IntroOne />
            </View>
            <View style={styles.slide}>
              <SecondPge/>
            </View>
            <View style={styles.slide}>
              <ThirdPge/>
              <TouchableOpacity onPress={handleContinue}>
                <View style={styles.conti}>
                    <Text style={styles.contiTxt}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Swiper>
    
          {/* Navigation buttons */}
            {currentIndex < 2 && (
                <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={handleSkip}>
                    <View style={styles.btn1}>
                    <Text style={styles.btn1Txt}>Skip</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNext}>
                    <View style={styles.btn2}>
                    <Text style={styles.btn2Txt}>Next</Text>
                    </View>
                </TouchableOpacity>
                </View>
            )}
        </SafeAreaView>
      );
    };export default WelcomeScreen

