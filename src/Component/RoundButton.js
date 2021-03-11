import React from  "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, TextInput} from "react-native";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import {showMessage} from 'react-native-flash-message';

export default function RoundButton(props) {

const {onSignUp}=props;
    
        return(
            <TouchableOpacity style={styles.rightArrowTouch} onPress={onSignUp}>
                <Image source={imagePath.rightArrow} style={styles.rightArrow}/>
            </TouchableOpacity>
        )
  
}

const styles= StyleSheet.create({
    rightArrow:{
        height:20,
        width:20,
        resizeMode:"cover",
        tintColor:colors.white
    },
    rightArrowTouch:{
        height:50,
        width:50,
        borderRadius:30,
        backgroundColor:colors.themeColor,
        alignItems:"center",
        justifyContent:"center",
        marginHorizontal:30,
        marginVertical:10
    }
})