import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Item, Input, Label, Button} from 'native-base';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const renderInner = () => (
    <Animated.View>
      <View style={styles.shipContent}>
        <View>
          <View>
            <Item style={styles.itemInput} regular>
              <Input
                style={styles.input}
                placeholder="Old Password"
                placeholderTextColor="#9b9b9b"
              />
            </Item>
          </View>
          <View style={styles.forgotTextWrapper}>
            <Text style={styles.changeText}>Forgot Password? </Text>
          </View>
        </View>
        <View style={styles.inputShipWrapper}>
          <View>
            <Item style={styles.itemInput} regular>
              <Input
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor="#9b9b9b"
              />
            </Item>
          </View>
        </View>
        <View style={styles.inputShipWrapper}>
          <View>
            <Item style={styles.itemInput} regular>
              <Input
                style={styles.input}
                placeholder="Repeat New Password"
                placeholderTextColor="#9b9b9b"
              />
            </Item>
          </View>
        </View>
        <View style={styles.btnSaveWrapper}>
          <Button style={styles.btnSave} full rounded>
            <Text style={styles.textSave}>SAVE PASSWORD</Text>
          </Button>
        </View>
      </View>
    </Animated.View>
  );

  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      <View style={styles.tab}></View>
      <View style={styles.labelShipWrapper}>
        <Text style={styles.labelShip}>Password Change</Text>
      </View>
    </View>
  );

  return (
    <>
      <BottomSheet
        ref={bs}
        snapPoints={[400, 0]}
        initialSnap={1}
        renderContent={renderInner}
        renderHeader={renderHeader}
        callbackNode={fall}
        enabledBottomInitialAnimation={true}
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Settings</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.labelInfoWrapper}>
              <Text style={styles.infoLabel}>Personal Information</Text>
            </View>
            <View style={styles.inputWrapper}>
              <Item style={styles.itemInput} regular>
                <Input
                  style={styles.input}
                  placeholderTextColor="#9b9b9b"
                  placeholder="Full name"
                />
              </Item>
            </View>
            <View>
              <Item style={styles.itemInput} regular>
                <Input
                  style={styles.input}
                  placeholderTextColor="#9b9b9b"
                  placeholder="Date of Birth"
                />
              </Item>
            </View>
            <View style={styles.changePasswordWrapper}>
              <View style={styles.changeLabelWrapper}>
                <View>
                  <Text style={styles.infoLabel}>Password</Text>
                </View>
                <View>
                  <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                    <Text style={styles.changeText}>Change</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Item style={styles.itemInput} regular>
                  <Input
                    style={styles.input}
                    placeholderTextColor="#9b9b9b"
                    disabled
                    value={'12312314194'}
                    placeholder="Password"
                    secureTextEntry
                  />
                </Item>
              </View>
            </View>
            <View>
              <View style={styles.notifLabelWrapper}>
                <Text style={styles.infoLabel}>Notifications</Text>
              </View>
              <View style={styles.contentNotif}>
                <View>
                  <Text style={styles.notifLabel}>Sales</Text>
                </View>
                <View>
                  <Switch
                    trackColor={{
                      false: 'rgba(155,155,155,0.2)',
                      true: 'rgba(155,155,155,0.1)',
                    }}
                    thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>

              <View style={styles.contentNotif}>
                <View>
                  <Text style={styles.notifLabel}>New arrivals</Text>
                </View>
                <View>
                  <Switch
                    trackColor={{
                      false: 'rgba(155,155,155,0.2)',
                      true: 'rgba(155,155,155,0.1)',
                    }}
                    thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
              <View style={styles.contentNotif}>
                <View>
                  <Text style={styles.notifLabel}>Delivery status changes</Text>
                </View>
                <View>
                  <Switch
                    trackColor={{
                      false: 'rgba(155,155,155,0.2)',
                      true: 'rgba(155,155,155,0.1)',
                    }}
                    thumbColor={isEnabled ? '#2AA952' : '#FFFFFF'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 14,
    paddingRight: 16,
  },
  label: {
    fontSize: 34,
    lineHeight: 34,
    fontWeight: 'bold',
    color: '#222222',
  },
  labelWrapper: {
    marginBottom: 24,
  },
  infoWrapper: {
    paddingLeft: 2,
  },
  labelInfoWrapper: {
    marginBottom: 21,
  },
  infoLabel: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
    color: '#222222',
  },
  inputWrapper: {
    marginBottom: 24,
  },
  changePasswordWrapper: {
    marginTop: 55,
    marginBottom: 55,
  },
  changeLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 21,
  },
  changeText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#9B9B9B',
  },
  notifLabelWrapper: {
    marginBottom: 23,
  },
  contentNotif: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  notifLabel: {
    fontSize: 14,
    lineHeight: 20,
    color: '#222222',
  },
  headerWrapper: {
    backgroundColor: '#F9F9F9',
    paddingTop: 14,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    alignItems: 'center',
  },
  tab: {
    width: 60,
    height: 6,
    backgroundColor: '#9B9B9B',
    borderRadius: 3,
  },
  labelShipWrapper: {
    marginTop: 16,
    marginBottom: 18,
  },
  labelShip: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  shipContent: {
    backgroundColor: '#F9F9F9',
    paddingLeft: 16,
    paddingRight: 16,
    height: 450,
  },
  forgotTextWrapper: {
    alignSelf: 'flex-end',
    marginTop: 14,
    marginBottom: 18,
  },
  itemInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 4,
  },
  inputShipWrapper: {
    marginBottom: 24,
  },
  btnSave: {
    backgroundColor: '#DB3022',
  },
  textSave: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF',
  },
  input: {
    fontSize: 14,
    lineHeight: 20,
  },
  btnSaveWrapper: {
    marginTop: 8,
  },
});
