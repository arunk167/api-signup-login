import React,{Component} from 'react'
import {View,Text,TextInput, StyleSheet,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../apis';
import Loader from '../../Component/Loader';
import validator from '../../utils/validation';
import colors from '../../styles/colors';
import {showMessage} from 'react-native-flash-message';
import navigationStrings from '../../constants/navigationStrings';
import { UserContext } from '../../context/context';






export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            profileImage:
        'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg',
            userEmail:'',
            userPassword:'',
            isLoading: false,
        }
    }
    static contextType=UserContext;
    _onChangeText(key){
        return (value)=>{
            this.setState({
                [key]:value
            });
        }


    }
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
    onLogin=()=>{
        
        const{userPassword,userEmail}=this.state
        const {navigation}=this.props
        if(this.isValidData()){
            this.setState({
                isLoading:true
            })

            api.login({
                email:userEmail,
                password:userPassword
    
            }).then(res=>{
                
                    this.setState({   
                      isLoading: false,
                    });
                    showMessage({
                      type: 'success',
                      icon: 'success',
                      message: "Login success",
                    });
               this.context.onLogin();
        
                  
            }).catch(error=>{
                
                  this.setState({  
                    isLoading: false,
                  });
                  showMessage({
                    type: 'danger', 
                    icon: 'danger',
                    message: "Enter correct username password",
                  });
      
                }
              );

        }
        
    }
    movetoSignup=()=>{
      const {navigation}=this.props
      navigation.navigate(navigationStrings.SIGNUP)
    }
        
    render(){
        const{userEmail,userPassword,isLoading,profileImage}=this.state
        return(
            <View style={{flex:1,backgroundColor:colors.white}}>
              <View style={styles.loginHeader}>
                <Text style={styles.headerText}>Login</Text>
              </View>
                 <View style={styles.imageView}>
                 <Image style={styles.userImage} source={{uri: profileImage}} />
                 </View>
                <TextInput
                        placeholder="Email"
                        value={userEmail}
                        onChangeText={this._onChangeText('userEmail')}
                        style={styles.textInput}>

                </TextInput>
          <TextInput
                placeholder="Password"
                value={userPassword}
                 onChangeText={this._onChangeText('userPassword')}
                 style={styles.textInput}>

          </TextInput>
          <TouchableOpacity style={styles.loginButton} onPress={this.onLogin}>
                 <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <View style={styles.forgotPassword}>
          <Text >Forgot Password ?</Text>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity onPress={this.movetoSignup} style={styles.signupTextView}>
          <Text style={styles.alreadyRegisterText}>
            Don't have an account?
            <Text style={styles.signupText}> Signup</Text>
          </Text>
          </TouchableOpacity>
          </View>
          <Loader isLoading={isLoading} />

            </View>
        )
    }
}
const styles=StyleSheet.create({
    textInput: {
        height: 40,
     
        marginHorizontal: 20,
        marginVertical: 10,
        borderColor: colors.themeColor,
        borderBottomWidth:1,
        borderRadius:5,
      },
      loginButton:{
          justifyContent:'center',
          alignItems:'center',
          height:40,
          backgroundColor:colors.themeColor,
          marginVertical:20,
          marginHorizontal:20

      }, userImage: {
        height: 90,
        width: 90,
        alignSelf: 'center',
        resizeMode: 'cover',
        borderRadius: 90,
        marginVertical: 20,
      
      },
      loginText:{
        color:colors.white,
        fontSize:15
      },
      imageView:{
        marginVertical:40
      },
      alreadyRegisterText: {
       
        color:colors.textGray
      },
      loginText: {
        fontSize: 15,
        color:colors.white,
      },
       
  signupText: {
    fontSize: 15,
    color:colors.themeColor,
  },
  signupTextView:{
    justifyContent:'center',
    marginVertical:10,
    alignItems:'center'
    
  },
  forgotPassword:{
    
    color:colors.textGray,
    justifyContent:'center',
    alignItems:'center'
  },
  loginHeader:{
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    fontSize:22,
    marginVertical:10,
    color:colors.themeColor
  }
})