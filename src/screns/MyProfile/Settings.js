import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from 'react-native';
import {Item, Input, Button, Thumbnail, Spinner} from 'native-base';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import {Formik} from 'formik';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ModalError from '../../components/ModalError';
import ModalSucces from '../../components/ModalSuccess';

import {changePassword} from '../../helpers/formValidation';
import userAction from '../../redux/actions/user';
import {API_URL} from '@env';

export default function Settings() {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const user = useSelector((state) => state.user.data);
  const send = useSelector((state) => state.user);
  const token = useSelector((state) => state.auth.token);
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  useEffect(() => {
    if (send.isSuccess) {
      dispatch(userAction.getUser(token));
    }
  }, [send.isSuccess]);

  const renderInner = () => (
    <Animated.View>
      <View style={styles.shipContent}>
        <Formik
          initialValues={{
            oldPassword: '',
            newPassword: '',
            repeatPassword: '',
          }}
          validationSchema={changePassword}
          onSubmit={(values) => console.log(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <View>
                <View>
                  <Item
                    style={
                      errors.oldPassword && touched.oldPassword
                        ? styles.itemInputError
                        : styles.itemInput
                    }
                    regular>
                    <Input
                      style={styles.input}
                      placeholder="Old Password"
                      placeholderTextColor="#9b9b9b"
                      name="oldPassword"
                      value={values.oldPassword}
                      onChangeText={handleChange('oldPassword')}
                      onBlur={handleBlur('oldPassword')}
                      secureTextEntry
                    />
                  </Item>
                  <View style={styles.errorWrapper}>
                    {errors.oldPassword && touched.oldPassword && (
                      <Text style={styles.errorText}>{errors.oldPassword}</Text>
                    )}
                  </View>
                </View>
                <View style={styles.forgotTextWrapper}>
                  <Text style={styles.changeText}>Forgot Password? </Text>
                </View>
              </View>
              <View style={styles.inputShipWrapper}>
                <View>
                  <Item
                    style={
                      errors.newPassword && touched.newPassword
                        ? styles.itemInputError
                        : styles.itemInput
                    }
                    regular>
                    <Input
                      style={styles.input}
                      placeholder="New Password"
                      placeholderTextColor="#9b9b9b"
                      name="newPassword"
                      value={values.newPassword}
                      onChangeText={handleChange('newPassword')}
                      onBlur={handleBlur('newPassword')}
                      secureTextEntry
                    />
                  </Item>
                </View>
                <View style={styles.errorWrapper}>
                  {errors.newPassword && touched.newPassword && (
                    <Text style={styles.errorText}>{errors.newPassword}</Text>
                  )}
                </View>
              </View>
              <View style={styles.inputShipWrapper}>
                <View>
                  <Item
                    style={
                      errors.repeatPassword && touched.repeatPassword
                        ? styles.itemInputError
                        : styles.itemInput
                    }
                    regular>
                    <Input
                      style={styles.input}
                      placeholder="Repeat New Password"
                      placeholderTextColor="#9b9b9b"
                      name="repeatPassword"
                      value={values.repeatPassword}
                      onChangeText={handleChange('repeatPassword')}
                      onBlur={handleBlur('repeatPassword')}
                      secureTextEntry
                    />
                  </Item>
                </View>
                <View style={styles.errorWrapper}>
                  {errors.repeatPassword && touched.repeatPassword && (
                    <Text style={styles.errorText}>
                      {errors.repeatPassword}
                    </Text>
                  )}
                </View>
              </View>
              <View style={styles.btnSaveWrapper}>
                <Button
                  onPress={handleSubmit}
                  style={styles.btnSave}
                  full
                  rounded>
                  <Text style={styles.textSave}>SAVE PASSWORD</Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
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

  const openFile = () => {
    launchImageLibrary({mediaType: 'photo'}, (response) => {
      if (response.didCancel) {
        console.log('Fif cancel');
      } else {
        const image = new FormData();
        image.append('avatar', {
          uri: response.uri,
          name: response.fileName,
          type: response.type,
        });
        dispatch(userAction.updateAvatar(token, image));
      }
    });
  };
  const openCamera = () => {
    launchCamera({saveToPhotos: true}, (response) => {
      console.log(response.errorMessage);
      if (response.didCancel) {
        console.log('didCancel');
      } else {
        console.log(response.fileName);
      }
    });
  };

  const closeModal = () => {
    dispatch(userAction.clearMessage());
  };

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
      {send.isSuccess && (
        <ModalSucces
          modal={send.isSuccess}
          handleClose={closeModal}
          message={send.alertMsg}
        />
      )}
      {send.isError && (
        <ModalError
          modal={send.isError}
          handleClose={closeModal}
          message={send.alertMsg}
        />
      )}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.labelWrapper}>
            <Text style={styles.label}>Settings</Text>
          </View>
          <View style={styles.infoWrapper}>
            <View style={styles.labelInfoWrapper}>
              <Text style={styles.infoLabel}>Personal Information</Text>
            </View>
            <View style={styles.avatarWrapper}>
              <View>
                <Thumbnail
                  large
                  source={
                    user.details.avatar !== null
                      ? {uri: `${API_URL}${user.details.avatar}`}
                      : require('../../../assets/default-avatar.png')
                  }
                />
              </View>
              <View style={styles.btnChangeWrapper}>
                <Button
                  onPress={() => openFile()}
                  style={styles.btnChange}
                  full
                  rounded>
                  {/* {send.isLoading ? (
                    <Spinner color="white" size={30} />
                  ) : ( */}
                    <Text style={styles.textChange}>Change avatar</Text>
                  {/* )} */}
                </Button>
              </View>
            </View>
            <Formik
              initialValues={{
                username: user.name,
                dateOfBirth: moment(user.createdAt).format('DD/MM/YYYY'),
              }}
              onSubmit={(values) => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <Item style={styles.itemInput} regular>
                      <Input
                        style={styles.input}
                        placeholderTextColor="#9b9b9b"
                        placeholder="Full name"
                        name="username"
                        value={values.username}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                      />
                    </Item>
                  </View>
                  <View>
                    <Item style={styles.itemInput} regular>
                      <Input
                        style={styles.input}
                        placeholderTextColor="#9b9b9b"
                        placeholder="Date of Birth"
                        name="dateOfBirth"
                        value={values.dateOfBirth}
                        onChangeText={handleChange('dateOfBirth')}
                        onBlur={handleBlur('dateOfBirth')}
                      />
                    </Item>
                  </View>
                </>
              )}
            </Formik>

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
    marginTop: 4,
    marginBottom: 18,
  },
  itemInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderRadius: 4,
  },
  itemInputError: {
    backgroundColor: '#FFFFFF',
    borderColor: 'red',
    borderRadius: 4,
  },
  inputShipWrapper: {
    marginBottom: 14,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingTop: 3,
    marginLeft: 5,
  },
  errorWrapper: {
    height: 10,
  },
  avatarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 21,
    flex: 1,
  },
  btnChangeWrapper: {
    marginLeft: 50,
    flex: 1,
  },
  btnChange: {
    backgroundColor: '#DB3022',
  },
  textChange: {
    color: 'white',
  },
});
