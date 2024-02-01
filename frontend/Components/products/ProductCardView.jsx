import { View,  Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./productCardView.style";


const ProductCardView = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
            <Image
                source={require('../../assets/images/u1.png')} 
                style={styles.c1}
                resizeMode="cover"
              />

                {/* <View style={styles.overlay}>
                    <Image
                        source={require('../../assets/images/u1.png')} 
                        style={styles.c1}
                        
                    />
                </View> */}
            </View>
        </TouchableOpacity>
    )
}

export default ProductCardView