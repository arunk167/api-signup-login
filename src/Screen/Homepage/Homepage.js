import React ,{Component} from 'react'

import {View,FlatList,ActivityIndicator,Text} from 'react-native'
import axios from 'axios';



import imagePath from '../../constants/imagePath';
import ItemList from '../../Component/ItemList';
import Loader from '../../Component/Loader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { UserContext } from '../../context/context';
import colors from '../../styles/colors';

export default class Homepage extends Component{
    constructor(props){
        super(props);
        this.state={ 
          avatarSource: imagePath.logo,
            ismodalVisable: false,
            isLoading:true,
            data:'',
            page:1
        }
       
        
    }
    static contextType=UserContext;
    componentDidMount(){
      this.makeRequest()
    } 
    makeRequest = ()=>{
      axios.get(`https://api.instantwebtools.net/v1/passenger?page=4&size=${this.state.page}`)
      .then(res=>{
        this.setState({
          data:res.data.data
        
        })
     
      
      })
    }
 
    _ItemSeparatorComponent=()=>{
      return(
        <View style={{height:10}}>
        </View>
      )
    }
    loadnextPage =()=>{
      const{page}=this.state
      
     this.setState({
      page:page+1
    },()=>{
     this.makeRequest();
    })
    }
    _ListFooterComponent =()=>{
      if(this.state.isLoading){
    return(
      <View >
      <ActivityIndicator  size='large'color='green' />
    </View>
       
        )
     
    }else {
     return <></>;
   }
   }
    
      
      _onclosemodal = () => {
        this.setState({
          ismodalVisable: false,
        });
      };
      _openModal = () => {
        this.setState({
          ismodalVisable: true,
        });
      };
      onLogout=()=>{
        this.context.onLogout()
      }

    render(){
        const {ismodalVisable,avatarSource,data}=this.state
        return(
            <View  style={{flex:1}}>

             
                <FlatList 
                      data={data}
                      showsVerticalScrollIndicator={false}
                      keyExtractor = {(item)=> item.id}
                      onEndReached={this.loadnextPage}
                      ListFooterComponent={this._ListFooterComponent}
                      ItemSeparatorComponent={this._ItemSeparatorComponent}
                      
                      renderItem = {({item,index})=>{
                        return(
                          <ItemList data={item} />
                        )
                      }}
       />
             <TouchableOpacity onPress={this.onLogout} style={{backgroundColor:colors.themeColor}}>
             <Text style={{textAlign:'center',fontSize:18,marginVertical:5,color:'white'}}>Logout</Text> 
             </TouchableOpacity>
               
               
            </View>
        )
    }
}

    
  
    
  
   
   