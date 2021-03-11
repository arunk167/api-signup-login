import React from  "react";
import {View, Text, TouchableOpacity, Image, StyleSheet, StatusBar} from "react-native";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";


export default function Header(props) {
const {moveBack}=props;
    
        return(
           
            <View>
                <StatusBar barStyle="dark-content" backgroundColor={colors.textGray}/>
                <View style={styles.headerView}>
                    <TouchableOpacity onPress={moveBack}>
                    <Image source={imagePath.back} style={styles.backButton}/>
                    </TouchableOpacity>
                    <Text style={styles.headerSignupText}>Sign Up</Text>
                </View>
            </View>
        )
  
}

const styles= StyleSheet.create({
    headerView:{
        flexDirection:"row", 
        height:50,
        alignItems:"center",
    },
    backButton:{
        height:25,
        width:25,
        marginHorizontal:15,
        resizeMode:"contain",
        
    },
    headerSignupText:{
        fontSize:18,
        marginHorizontal:90,
       
    }
})