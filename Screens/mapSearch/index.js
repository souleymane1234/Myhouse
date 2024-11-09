import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    ScrollView
  } from 'react-native';
  import React, {useState} from 'react';
  import { COLORS } from '../../variables/color';
  
  const MapSearch = ({navigation}) => {
  
    return (
      <View style={styles.container}>
        <StatusBar animated={true} backgroundColor="#0b3155" />
          <View
          style={{
            width: '100%',
            height: 30,
            backgroundColor: '#0b3155',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: "bold"}}>Resultats sur carte</Text>
        </View>
        <View style={styles.header}>
              <TouchableOpacity
              style={{        flexDirection: 'row',
              top: 10,
              marginHorizontal: 10,}}
                  onPress={() => navigation.goBack()}>
                  <View style={{justifyContent: 'center'}}>
                  <Image source={require('../../Assets/chevron-left.png')} />
                  </View>
                  <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                  <Text style={styles.headerText}>retour</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity 
              style={{
                  height: 30,
                  backgroundColor: '#0b3155',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  top: 10,
                  alignSelf: "center",
                  borderRadius: 10,
                  marginBottom: 10,
                  width: 100
              }} onPress={() => navigation.navigate("PortailScreen")}>
                  <Text><Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: "bold"}}>Acceuil</Text></Text>
              </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SearchResultScreen')}>
          < Image source={require('../../Assets/map.jpeg')} style={{width: "100%", height: "100%"}} resizeMode='center'/>
        </TouchableOpacity>
            
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      height: "100%"
    },
    selection: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.input_border_color,
    },
    header: {
        flexDirection: 'row',
        top: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        margin: 10,
      },
      headerText: {
        marginHorizontal: 5,
        color: COLORS.black,
      },
  });
  
  export default MapSearch;
  