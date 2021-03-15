import React,{Component} from 'react'
import {View} from 'react-native'
import FlashMessage from 'react-native-flash-message';
import { UserContext } from './src/context/context';
import Routes from './src/Navigation/Routes'
import { clearUserData, getUserData } from './src/utils/utils';


 class App extends  Component{
   constructor(props){
     super(props);
     this.state={
       isLogin:false

     }
   }
   componentDidMount(){
      getUserData().then(res=>{
        if(res){
          this.setState({
            isLogin:true 
          })
        }
      }).catch(error=>{
        console.log(error)
      })
   }
   onLogin=()=>{
     this.setState({
       isLogin:true
     })
   }
   onLogout=()=>{
     this.setState({
       isLogin:false
     })
     clearUserData();
   }
   render(){
    const {isLogin}=this.state
     return(
    
      <>
      <UserContext.Provider value={{
        isLogin:this.state.isLogin,onLogin:this.onLogin,onLogout:this.onLogout
      }} >
         <Routes/>
         
         </UserContext.Provider>
         <FlashMessage position='top'/>
       </>
       
     
     )
   }
 }
 export default App;