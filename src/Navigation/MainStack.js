import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import navigationStrings from '../constants/navigationStrings';
import {  Homepage} from '../Screen';

const Stack =createStackNavigator();
function MainStack(){
    return (
        <React.Fragment>
           
            <Stack.Screen name={navigationStrings.HOMEPAGE} component={Homepage} 
            options={{
                headerShown:false
            }} />
            
        </React.Fragment>
    )
}
export default MainStack;