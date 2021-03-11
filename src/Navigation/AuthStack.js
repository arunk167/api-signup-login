import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import { Signup ,Login, Homepage} from '../Screen';

const Stack =createStackNavigator();
function AuthStack(){
    return (
        <React.Fragment>
            <Stack.Screen name={navigationStrings.LOGIN} component={Login} 
            options={{
                headerShown:false
            }} />
            <Stack.Screen name={navigationStrings.SIGNUP} component={Signup} 
            options={{
                headerShown:false
            }} />
            
           
            
        </React.Fragment>
    )
}
export default AuthStack;