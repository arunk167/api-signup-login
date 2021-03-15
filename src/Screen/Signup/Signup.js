import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  TextInput,
  ScrollView,
  Button,
  Modal,
  PermissionsAndroid
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

import colors from '../../styles/colors';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
import RoundButton from '../../Component/RoundButton';
import Header from '../../Component/Header';
import validator from '../../utils/validation';
import {showMessage} from 'react-native-flash-message';
import Loader from '../../Component/Loader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import api from '../../apis';
import navigationStrings from '../../constants/navigationStrings';
import imagePath from '../../constants/imagePath';



export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      profileImage:
        'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
      isDatePickerVisible: false,
      userEmail: '',
      userName: '',
      userPassword: '',
      confirmPassword: '',
      dateOfBirth: '',
      isLoading: false,
      avatarSource: imagePath.logo,
      ismodalVisable: false,
    };
  }
  moveBack=()=>{
      const {navigation}=this.props
    navigation.navigate(navigationStrings.LOGIN)
}

  _onChangeText(key) { 
    return (value) => {
      this.setState({
        [key]: value,
      });
    };
  }
  _onDatePicker = () => {
    this.setState({
      isDatePickerVisible: true,
    });
  };

  hideDatePicker = () => {
    this.setState({
      isDatePickerVisible: false,
    });
  };

  handleConfirm = (dateOfBirth) => {
    day = dateOfBirth.getDate();
    month = dateOfBirth.getMonth() + 1;
    year = dateOfBirth.getFullYear();

    exdate = day + '-' + month + '-' + year;

    this.setState({
      dateOfBirth: exdate,
      isDatePickerVisible: false,
    });
  };
  isValidData = () => {
    const {
      userEmail,
      userName,
      userPassword,
      confirmPassword,
      dateOfBirth,
    } = this.state;
    const error = validator({
      name: userName,
      email: userEmail,
      password: userPassword,
      confirmPassword: confirmPassword,
    });
    if (error) {
      showMessage({
        type: 'info',
        icon: 'info',
        message: error,
      });
      return false;
    }

    return true;
  };
  onSignUp = () => {

    const{navigation}=this.props
    const {
      userEmail,
      userName,
      userPassword,
      confirmPassword,
      dateOfBirth,
    } = this.state; 
    if (this.isValidData()) {
      this.setState({
        isLoading: true,
      });
      
        api.signup({
          email: userEmail,
          languageCode: 'EN',
          signupType: 'APP',
          name: userName, 
          password:userPassword,
          
        })
        .then((res) => {
          
            this.setState({   
              isLoading: false,
            });
            showMessage({
              type: 'success',
              icon: 'success',
              message: "signup success",
            });
            navigation.navigate(navigationStrings.LOGIN)
        })
        .catch(error=>{
          
            this.setState({  
              isLoading: false,
            });
            showMessage({
              type: 'danger', 
              icon: 'danger',
              message: "error",
            });

          }
        );
        
    }
  };
  movetoLogin=()=>{
   
    const {navigation}=this.props
    navigation.navigate(navigationStrings.LOGIN)
  }

//  openGallery

  openGallery = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: ' Gallery Permission',
          message: 'We needs access to your Gallery',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
       

        const options = {
          title: 'Select Avatar',
          customButtons: [{name: 'myntra', title: 'Choose Photo from gallery'}],
          storageOptions: {
            skipBackup: true,
            path: 'images',
            saveToPhotos: true,
          },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            const source = {uri: response.uri};
              this.uploadImage(response)
             
              this.setState({
              avatarSource: source, 
              ismodalVisable: false,
            });
          }
        });
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  uploadImage=(response)=>{
  
    const apiData =new FormData();
    apiData.append('image', {
      uri:response.uri,
      type: response.type,
       name: response.fileName,
      

     });
    api.uploadfile(apiData).then((res)=>{
      showMessage({
        type: 'success',
        icon: 'success',
        message: "Image uplaod success",
      });
      console.log(res)
     }).catch(error=>console.log(error,"fail")) 

      
  }



  render() {
    const {
      profileImage,
      isDatePickerVisible,
      userEmail,
      userName,
      userPassword,
      confirmPassword,
      dateOfBirth,
      isLoading,
      avatarSource,
      ismodalVisable
      
    } = this.state;
   
    return (
      <KeyboardAwareScrollView style={styles.mainView}>
        <Header moveBack={this.moveBack}/>
        <TouchableOpacity onPress={this.openGallery}  >
        <Image style={styles.userImage}  source={avatarSource} />
        </TouchableOpacity>
        <TextInput
          placeholder="Name"
          style={styles.textInput}
          value={userName}
          onChangeText={this._onChangeText('userName')}></TextInput>
        <TextInput
          placeholder="Date of birth"
          style={styles.textInput}
          value={dateOfBirth}
          onChangeText={this._onChangeText('dateOfBirth')}
          onFocus={this._onDatePicker}></TextInput>
        <TextInput
          placeholder="Email"
          value={userEmail}
          onChangeText={this._onChangeText('userEmail')}
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Password"
          value={userPassword}
          onChangeText={this._onChangeText('userPassword')}
          style={styles.textInput}></TextInput>
        <TextInput
          placeholder="Confirm password"
          value={confirmPassword}
          onChangeText={this._onChangeText('confirmPassword')}
          style={styles.textInput}></TextInput>
        <View style={styles.buttonView}>
          <TouchableOpacity onPress={this.movetoLogin}>
          <Text style={styles.alreadyRegisterText}>
            Already Register?
            <Text style={styles.loginText}> Login</Text>
          </Text>
          </TouchableOpacity>
          <RoundButton onSignUp={this.onSignUp} />
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={this.handleConfirm}
          onCancel={this.hideDatePicker}
        />

        <View style={styles.footerView}>
          <Text style={styles.footerText}>By signing up you agree to our</Text>
          <Text style={styles.footerText}>
            <Text style={styles.policyText}>Terms of service </Text>and
            <Text style={styles.policyText}> Privacy Policy</Text>
          </Text>
        </View>
        <Loader isLoading={isLoading} />
        
        
   
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
 
  userImage: {
    height: 90,
    width: 90,
    alignSelf: 'center',
    resizeMode: 'cover',
    borderRadius:90,
    marginVertical: 20,
  },
  textInput: {
    height: 40,
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.textGray,
    backgroundColor: colors.white,
borderRadius:5,
    borderBottomWidth:1,
  },
  buttonView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  alreadyRegisterText: {
    marginHorizontal:10,
    color:colors.textGray
  },
  loginText: {
    fontSize: 15,
    color:colors.themeColor,
  },
  footerView: {
    alignItems: 'center',
   marginVertical:90,
  },
  footerText: {
    color:colors.textGray,
    fontSize: 13,
  },
  policyText: {
    color: colors.themeColor,
  },
 
  
});
