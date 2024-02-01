import { StyleSheet, TextInput, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS,SIZES } from '../constants/index'
import styles from './search.style'


const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.searchContainer}>
            <TouchableOpacity>
                <Ionicons
                    name='camera-outline' 
                    size={SIZES.xLarge}
                    style={styles.searchIcon}
                  />
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput
                    style={styles.searchInput}
                    value=''
                    onPressIn={()=>{}}
                    placeholder="what are you looking for"
                />
            </View>

            <View>
                <TouchableOpacity style={styles.searchBtn}>
                    <Feather 
                        name='search' 
                        size={24} 
                        color={COLORS.offwhite}
                    />
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  ) 
}

export default Search

