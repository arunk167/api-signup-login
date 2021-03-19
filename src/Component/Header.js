import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import imagePath from '../constants/imagePath';
import {useNavigation} from '@react-navigation/native';

import navigationStrings from '../constants/navigationStrings';
function Header(props) {
  const navigation = useNavigation();
  const {count, data} = props;
  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={{marginVertical: 10, flexDirection: 'row'}}>
        <Image style={styles.logo1} source={imagePath.humburger} />
        <Image style={styles.logo} source={imagePath.logo} />
        <View style={{flexDirection: 'column', marginStart: 5}}>
          <Text style={{fontSize: 8}}>Become</Text>
          <Text style={{fontSize: 10, color: '#FF9130', marginTop: -2}}>
            INSIDER
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginEnd: 7}}>
        <Image style={styles.search} source={imagePath.search} />
        <Image style={styles.search} source={imagePath.notification} />
        <Image style={styles.search} source={imagePath.heart} />
        <View>
          <Text
            style={{position: 'absolute', top: 5, left: 30, color: '#FF527B'}}>
            {count}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.CART, {data})}>
            <Image style={styles.search} source={imagePath.beg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header_text: {
    fontSize: 20,
    color: 'white',

    marginHorizontal: 18,
  },
  logo: {
    height: 20,
    width: 25,
    marginVertical: 3,
    marginStart: 7,

    resizeMode: 'contain',
  },
  logo1: {
    height: 16,
    width: 20,
    marginHorizontal: 4,
    marginVertical: 6,
    resizeMode: 'contain',
    marginStart: 15,
  },
  search: {
    height: 20,
    width: 20,
    marginHorizontal: 12,
    marginVertical: 12,
    tintColor:'black'
  },
});
export default Header;
