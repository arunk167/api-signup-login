import React from 'react'
import {View,Text,StyleSheet,ActivityIndicator} from 'react-native'
export default function Loader(props) {
    const {isLoading}=props;
    if(isLoading)
    {
        return(
            <View style={styles.parentView}>

                <ActivityIndicator size="large" color="#0000ff" />
               

            </View>
        )
    }
    else{
        return(
            <View>

            </View>
        )
    }
}
const styles =StyleSheet.create({
    parentView:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"rgba(255,255,255,0.7)"
          
    }
})