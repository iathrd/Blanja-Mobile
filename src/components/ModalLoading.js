import React from 'react';
import {View, Text, Modal, StyleSheet} from 'react-native';
import {Spinner} from 'native-base';

export default function ModalLoading({modal}) {
  return (
    <View>
      <Modal visible={modal}>
        <View style={styles.modalWrapper}>
          <View>
            <Spinner color="#DB3022" size={45} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
