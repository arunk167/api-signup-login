import React ,{Component} from 'react'
import {View,Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigationStrings from '../../constants/navigationStrings';
import { clearUserData} from '../../utils/utils';
export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={ 

        }
    }
//    onLogout=()=>{
//        const {navigation}=this.props
//        clearUserData().then(res=>{
//            navigation.navigate(navigationStrings.LOGIN)
//        }).catch(error=>console.log(error))
         
          
//    }
    render(){
        return(
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>Homepage</Text>
                {/* <TouchableOpacity onPress={this.onLogout} >
                <Text>Logout</Text>
                </TouchableOpacity>  */}
               
            </View>
        )
    }
}