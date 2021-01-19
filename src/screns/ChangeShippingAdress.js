import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';

export default function ChangeShippingAdress() {
  return (
    <View style={styles.content}>
      <View>
        <View style={styles.InputWrapper}>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>
                Save address as (ex : home address, office address)
              </Label>
              <Input
                placeholder="Input home"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>Recipient’s name</Label>
              <Input
                placeholder="Input recepient's"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
        </View>
        <View style={styles.InputWrapper}>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>Address</Label>
              <Input
                placeholder="Input adress"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>City or Subdistrict</Label>
              <Input
                placeholder="Input City or Subdistrict"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>Postal code</Label>
              <Input
                placeholder="Input code"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
        </View>
        <View style={styles.InputWrapper}>
          <View style={styles.inputDisplay}>
            <Item style={styles.item} stackedLabel>
              <Label style={styles.labelInput}>
                recipient's telephone number
              </Label>
              <Input
                placeholder="Input number"
                placeholderTextColor="#9b9b9b"
                style={styles.input}
              />
            </Item>
          </View>
        </View>
        <View>
          <Button style={styles.btnSave} full rounded>
            <Text style={styles.btnText}>SAVE ADDRESS</Text>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
    paddingRight: 16,
  },
  labelInput: {
    fontSize: 10,
    lineHeight: 20,
    flex: 1,
    width: '100%',
    paddingTop: 14,
    color: '#9b9b9b',
  },
  InputWrapper: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    paddingRight: 14,
    paddingBottom: 18,
    paddingLeft: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    paddingBottom: 0,
    paddingLeft: 0,
    fontSize: 12,
    lineHeight: 20,
  },
  inputDisplay: {
    width: '100%',
  },
  item: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1.3,
  },
  btnSave: {
    backgroundColor: '#DB3022',
  },
  btnText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});
