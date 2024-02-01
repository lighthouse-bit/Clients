import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';
import { useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart } from './screens';
import {Consultation} from './screens';
import {GreenTech} from './screens';
import {Agriculture} from './screens';
import {EarnMoney, Plastic, Notification,
   PostDetail, IntroOne,
    SecondPge, WelcomeScreen,
     Signup, ThirdPge,
     ProfileUpload, Success
    } from './screens';


const Stack = createNativeStackNavigator();



export default function App() {
  
  const [fontsLoaded] = useFonts({
     regular: require("./assets/fonts/Poppins-Regular.ttf"),
     light: require("./assets/fonts/Poppins-Light.ttf"),
     bold: require("./assets/fonts/Poppins-Bold.ttf"),
     medium: require("./assets/fonts/Poppins-Medium.ttf"),
     extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async() => {

    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }   
  },[fontsLoaded] );

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    onLayoutRootView();
  }, [onLayoutRootView]);

  if(!fontsLoaded){
    return null;
  }    

  
  return ( 
    <>

    <NavigationContainer >
      <Stack.Navigator  initialRouteName="WelcomeScreen" >
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
          
        />

        <Stack.Screen
          name='Cart'
          component={Cart} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='WelcomeScreen'
          component={WelcomeScreen} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='IntroOne'
          component={IntroOne} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='SecondPge'
          component={SecondPge} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ThirdPge'
          component={ThirdPge} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Signup'
          component={Signup} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProfileUpload'
          component={ProfileUpload} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Success'
          component={Success} 
          options={{headerShown:false}}
        />
        
        <Stack.Screen
          name='Consultation'
          component={Consultation} 
          options={ ({ navigation }) =>({
            title: 'Choose Consultation',

            headerTitleStyle: {
              fontSize: 18, 
              fontWeight: 'bold',
              color: 'black', 
              left: 10
            },
          
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black" // Adjust the color as needed
                onPress={() => navigation.goBack()}
                style={{ marginLeft: -5 }}
              />
            ),
            cardStyle: {
              flex: 1,
              backgroundColor: '#fffff', 
              opacity: 1,
            },
          })}
        />
        <Stack.Screen
          name='GreenTech'
          component={GreenTech} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Agriculture'
          component={Agriculture} 
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='EarnMoney'
          component={EarnMoney} 
          options={ ({ navigation }) =>({
            title: 'Select waste',

            headerTitleStyle: {
              fontSize: 18, 
              fontWeight: 'bold',
              color: 'black', 
              left: 10
            },
            
            // headerTitleAlign: 'left',
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black" // Adjust the color as needed
                onPress={() => navigation.goBack()}
                style={{ marginLeft: -5 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name='Plastic'
          component={Plastic } 
          options={ ({ navigation }) =>({
            title: 'Select company',

            headerTitleStyle: {
              fontSize: 18, 
              fontWeight: 'bold',
              color: 'black', 
              marginLeft: -10
            },
          
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black" // Adjust the color as needed
                onPress={() => navigation.goBack()}
                style={{ marginLeft: -5 }}
              />
            ),
            cardStyle: {
              flex: 1,
              backgroundColor: '#fffff', 
              opacity: 1,
            },
          })}
        />
        <Stack.Screen
          name='Notification'
          component={Notification } 
          options={ ({ navigation }) =>({
            title: 'Notifications',

            headerTitleStyle: {
              fontSize: 18, 
              fontWeight: 'bold',
              color: 'black', 
              marginLeft: -10
            },
          
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black" // Adjust the color as needed
                onPress={() => navigation.goBack()}
                style={{ marginLeft: -5 }}
              />
            ),
            cardStyle: {
              flex: 1,
              backgroundColor: '#fffff', 
              opacity: 1,
            },
          })}
        />
        <Stack.Screen
          name='PostDetail'
          component={PostDetail } 
          options={ ({ navigation }) =>({
            title: 'Post details',

            headerTitleStyle: {
              fontSize: 18, 
              fontWeight: 'bold',
              color: 'black', 
              marginLeft: -10
            },
          
            headerLeft: () => (
              <Ionicons
                name="arrow-back"
                size={24}
                color="black" // Adjust the color as needed
                onPress={() => navigation.goBack()}
                style={{ marginLeft: -5 }}
              />
            ),
            cardStyle: {
              flex: 1,
              backgroundColor: '#fffff', 
              opacity: 1,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>

    </>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyles: {
    fontFamily: "extrabold",
    fontSize: 20,
  }
});
