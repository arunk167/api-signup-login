import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, Button} from 'react-native';

const {height, width} = Dimensions.get('screen');

export default function ItemList(props) {
    const {data}=props;
  return (
    <View style={styles.container}>
      <View style={styles.cartItemView}>
        <View >
        <View style={{justifyContent:'center',alignItems:'center'}}>   
        <Image
            style={styles.userImage}
            source={{uri: data.airline.logo}}></Image>
            </View>
            <View
            style={styles.websiteDetail}>
            <Text style={styles.heading}>WebSite- </Text>
            <Text>{data.airline.website}</Text>
          </View>
          <View
            style={styles.companyDetails}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.heading}>Company- </Text>
              <Text>{data.airline.name}</Text>
            </View>
            
          </View>
          
          <View style={{marginHorizontal:20}}>
          <Text style={styles.heading}>Headquaters- </Text>
              <Text style={{}}>{data.airline.head_quaters}</Text>
          </View>
          
          
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    marginHorizontal: 10,
  },
  cartItemView: {
    height: height /4,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  userImage: {
    width:100,
    height: 50,
    resizeMode: 'contain',
   
    
   
  },
  heading: {
   
    fontWeight: 'bold',
  },companyDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical:5
  },
  websiteDetail:{
    flexDirection: 'row',
    marginHorizontal: 20,
    marginVertical:5
  },buttonView:{
      marginTop:10,
      height:'18%',
      flexDirection:'row',
      justifyContent:'space-between',
      bottom:0,
      marginHorizontal:20
  },buttonContentText:{
      color:'white'
  }
});