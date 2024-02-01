import { StyleSheet, View, TouchableOpacity,Text } from "react-native";
import React from "react";
import styles from './updt.style'
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";

const Updt = () => {
  return (
    <View style={styles.container}>
      <View style={styles.update}>
        <Text style={styles.updateTitle}>Updates</Text>
        {/* <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary}/>
        </TouchableOpacity> */}
      </View>
    </View>
  )
}

export default Updt