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
  const PublicationScreen = ({navigation}) => {
  
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
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: "bold"}}>Liste des biens publier</Text>
        </View>
        <TouchableOpacity
                style={styles.header}
                onPress={() => navigation.goBack()}>
                <View style={{justifyContent: 'center'}}>
                <Image source={require('../../Assets/chevron-left.png')} />
                </View>
                <View style={{justifyContent: 'center', marginHorizontal: 5}}>
                <Text style={styles.headerText}>retour</Text>
                </View>
            </TouchableOpacity>
        <ScrollView>
            <TouchableOpacity 
            style={{
                width: '80%',
                height: 30,
                backgroundColor: '#0b3155',
                flexDirection: 'row',
                justifyContent: 'center',
                top: 10,
                alignSelf: "center",
                borderRadius: 10,
                marginBottom: 10
            }} onPress={() => navigation.navigate("SearchResultScreenMap")}>
                <Text><Text style={{color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: "bold"}}>Voir sur la map</Text></Text>
            </TouchableOpacity>
            <View>
                <TouchableOpacity style={styles.hystotisConsultation} onPress={() => navigation.navigate("Details")}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/csalon.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison</Text>
                        <Text style={{fontSize: 11}}>2 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré 7e Tranche</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hystotisConsultation} onPress={() => navigation.navigate("Details")}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/2ch.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison</Text>
                        <Text style={{fontSize: 11}}>3 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré 8e Tranche</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hystotisConsultation}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/appar.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Appartement</Text>
                        <Text style={{fontSize: 11}}>2 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré Oscar</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.hystotisConsultation}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/studio.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Studio</Text>
                        {/* <Text style={{fontSize: 11}}>2 Chambres</Text> */}
                        <Text style={{fontSize: 11}}>Abidjan, Marcory</Text>
                    </View>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    selection: {
      borderBottomWidth: 1,
      borderBottomColor: COLORS.input_border_color,
    },
    signUpBtn: {
      height: 40,
      borderRadius: 39,
      marginVertical: 10,
      width: '90%',
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.button.principal,
      position: "absolute",
      bottom: 0,
    },
    signUpBtnTxt: {
      fontSize: 18,
      top: -3,
    },
    hystotisConsultation: {
        flexDirection: "row", 
        backgroundColor: "#EAFFFD",
        padding: 2,
        width: "95%",
        alignSelf: "center", 
        justifyContent: "space-between", 
        margin: 10, 
        borderRadius: 10,
        shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
    
    elevation: 1
      },
      header: {
        flexDirection: 'row',
        top: 10,
        marginHorizontal: 10,
        marginBottom: 20
      },
      headerText: {
        marginHorizontal: 5,
        color: COLORS.black,
      },
  });
  
  export default PublicationScreen;
  