import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../../../../constants'
import { useNavigation } from '@react-navigation/native'
import styles from './pawuri.style'
import HorizontalLine from './HorizontalLine'


const Pawuri = () => {
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  return (
    <SafeAreaView>
      <View >
        <TouchableOpacity onPress={toggleModal}>
            <View style={styles.consult}>
                <View style={styles.conpic}>
                    <Image
                      source={require('../../../../assets/images/p2.png')} 
                      style={styles.c1}
                  />
                </View>
                <View style={{top:15}}>
                    <Text style={[{fontFamily:"bold"}, {fontSize:SIZES.medium}]}>Pawuri Plastics</Text>
                    <Text style={[{fontSize:SIZES.small},{fontFamily:"regular"}]}>Earn money for discarding waste</Text>
                </View>
            </View>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.content}>
                  {/* Close modal */}
                  <TouchableOpacity onPress={toggleModal}>
                    <View style={styles.hr}>

                    </View>
                  </TouchableOpacity>
                  
                  {/* logo */}
                  <View style={styles.icon}>
                    <Image
                        source={require('../../../../assets/images/p2.png')} 
                        style={styles.c1}
                    />
                  </View>

                  {/* company name */}
                  <View style={styles.textRow}>
                      <Text style={styles.firstText}>Company name</Text>
                      <Text style={styles.secText}>PAUWURI PLASTICS</Text>
                  </View>

                  <HorizontalLine />

                  {/* Address */}
                  <View style={styles.textRow}>
                      <Text style={styles.firstText}>Address</Text>
                      <Text style={styles.secText}>Plot 12 Calvary St. Downdown</Text>
                  </View>

                  <HorizontalLine />

                  {/* Reg. No */}
                  <View style={styles.textRow}>
                      <Text style={styles.firstText}>Reg. Number</Text>
                      <Text style={styles.secText}>0855591532</Text>
                  </View>

                  <HorizontalLine />

                  <Text style={styles.contact}>08055591532</Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  )
}

export default Pawuri