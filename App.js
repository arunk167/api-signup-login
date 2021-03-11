import React,{Component} from 'react'
import {View} from 'react-native'
import FlashMessage from 'react-native-flash-message';
import Routes from './src/Navigation/Routes'
import { getUserData } from './src/utils/utils';


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
   render(){
    const {isLogin}=this.state
     return(
    
      <>
         <Routes isLogin={isLogin}/>
         <FlashMessage position='top'/>
       </>
       
     
     )
   }
 }
 export default App;