import React ,{Component} from 'react'

import {View,Text} from 'react-native'




import imagePath from '../../constants/imagePath';
import ItemList from '../../Component/ItemList';
import Loader from '../../Component/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../../context/context';
import colors from '../../styles/colors';
import Header from '../../Component/Header';


export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={  
            isLoading:true,    
        }
       
        
    }
    static contextType=UserContext; 
      onLogout=()=>{
        this.context.onLogout()
      }

    render(){
        
        return(
            <View  style={{flex:1}}>
              <Header/>
   
             {/* <TouchableOpacity onPress={this.onLogout} style={{backgroundColor:colors.themeColor}}>
             <Text style={{textAlign:'center',fontSize:18,marginVertical:5,color:'white'}}>Logout</Text> 
             </TouchableOpacity>
                */}
               
            </View>
        )
    }
}

    
  
    
  
   
   