import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import AuthStack from './AuthStack';
import MainStack from './MainStack';
const Stack=createStackNavigator();
export default function(props){
   const {isLogin}=props
    return(
   
      
        <NavigationContainer>
            <Stack.Navigator>
               {!isLogin && AuthStack()}
                {MainStack()}
            </Stack.Navigator>
        </NavigationContainer>
    )
}