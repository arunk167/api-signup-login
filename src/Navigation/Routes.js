import React,{useContext} from 'react'
import {NavigationContainer} from '@react-navigation/native';   
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import { UserContext } from '../context/context';

const Stack=createStackNavigator();
export default function(props){
  
   const userContextData=useContext(UserContext)
    return(
   
      
        <NavigationContainer>
            <Stack.Navigator>
               {/* {!isLogin && AuthStack()}
                {MainStack()} */}
                {userContextData.isLogin ? <>{MainStack()}</>  : <>{ AuthStack()}</> }
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}