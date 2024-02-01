import { StyleSheet, Text, View
     ,SafeAreaView, TextInput,KeyboardAvoidingView,
      Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity  } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../../constants'
import { useNavigation } from '@react-navigation/native';


const Details = () => {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (text) => {
        // setInputValue(text);
        setEmail(text);
        setPassword(text);
        
        setSecondname(text);
    };

    const handleFirstname = (text) => {
        setFirstname(text);
    };
    const handleLastname = (text) => {
        setSecondname(text);
    };
    const handleEmail = (text) => {
        setEmail(text);
    };
    const handlePassword = (text) => {
        setPassword(text);
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
      };
  return (
    <SafeAreaView>
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust the behavior based on the platform
                style={styles.container}
            >
                {/* Forst name */}
                
                <View>
                    <View style={styles.txt}>
                        <Text style={styles.details}>First Name</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            value={firstname}
                            onChangeText={handleFirstname}
                            placeholder="#John"
                        />
                    </View>
                </View>

                {/* Lastname */}
                <View>
                    <View style={styles.txt}>
                        <Text style={styles.details}>Last Name</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            value={secondname}
                            onChangeText={handleLastname}
                            placeholder="#Constantine"
                        />
                    </View>
                </View>

                {/* Email address */}
                <View>
                    <View style={styles.txt}>
                        <Text style={styles.details}>Email Address</Text>
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={styles.searchInput}
                            value={email}
                            onChangeText={handleEmail}
                            placeholder="#john@gmail.com"
                        />
                    </View>
                </View>

                {/* Password */}
                <View>
                    <View style={styles.txt}>
                        <Text style={styles.details}>Password</Text>
                    </View>

                    <View style={[styles.inputWrapper, {marginBottom: 40}]}>
                        <TextInput
                            style={styles.searchInput}
                            secureTextEntry={true}
                            value={password}
                            
                            onChangeText={handlePassword}
                            placeholder="********"
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={()=>navigation.navigate("ProfileUpload")}>
                    <View style={styles.btnContainer}>
                        <View style={styles.button}>
                            <Text style={styles.btnTxt}>Next</Text>
                        </View>  
                    </View>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    </SafeAreaView>
    
  )
}

export default Details

const styles = StyleSheet.create({
    details: {
        fontFamily: "medium",

    },
    txt: {
        marginHorizontal: SIZES.xxLarge,
        marginTop: SIZES.large,
        marginBottom: SIZES.small   
    },
    inputWrapper: {
        backgroundColor: "#F0F0F0",
        // marginRight: SIZES.small,
        borderRadius: SIZES.small,
        marginHorizontal: SIZES.small
    },
    searchInput: {
        fontFamily: "regular",
        width: "100%",
        height: 50,
        paddingHorizontal: SIZES.small,
        
    },
    // container: {
    //     flex: 1,
    //     // justifyContent: 'center',
    //     // paddingHorizontal: 20,
    //   },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
      },
      button: {
        width: "100%",
        height: 50,
        backgroundColor: "#19AA4B",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7,
        // marginTop: 60,
        // position: "relative",
        // bottom: -10
      },
      btnContainer: {
        marginHorizontal: SIZES.small,
      },
      btnTxt: {
        fontFamily: "regular",
        color: COLORS.white
      }

    
})