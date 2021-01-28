import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ModalSucces({modal, handleClose, message}) {
  return (
    <View>
      <Modal
        onBackButtonPress={handleClose}
        onBackdropPress={handleClose}
        animationIn="zoomIn"
        isVisible={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContent}>
            <View style={styles.modalLabelWrapper}>
              <Icon name="check" color="white" size={70} />
            </View>
            <View>
              <Text style={styles.textMessage}>{message}</Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '60%',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalLabelWrapper: {
    backgroundColor: 'rgb(38, 194, 129)',
    borderRadius: 65,
    padding: 5,
    marginBottom: 40,
  },
  textMessage: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});
