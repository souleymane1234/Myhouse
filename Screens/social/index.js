import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SocialScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          source={require('../../Assets/famille.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flex: 2, backgroundColor: 'transparent'}}>
        {/* first start  */}
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SearchScreen")}>
            <Icon
              size={50}
              name="facebook"
              pack="material"
              color={'#1877F2'}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: '#f8f8f8',
                width: '100%',
                borderRadius: 15,
              }}>
              <Text style={styles.cardText}>facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Icon
              size={50}
              name="instagram"
              pack="material"
              color={'#e65f1e'}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: '#f8f8f8',
                width: '100%',
                borderRadius: 15,
              }}>
              <Text style={styles.cardText}>Instagram</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{width: "100%"}}>
        <TouchableOpacity style={[styles.card, {alignSelf: "center"}]}>
        <Image
          source={require('../../Assets/tik-removebg-preview.png')}
          style={{width: '100%',  resizeMode: 'contain'}}
        />
            <View
              style={{
                backgroundColor: '#f8f8f8',
                width: '100%',
                borderRadius: 15,
              }}>
              <Text style={styles.cardText}>Tiktok</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* first end  */}
        {/* second start  */}
        {/* second end  */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 10,
    height: 'auto',
  },
  cardIcon: {
    marginBottom: 80,
    top: 45,
  },
  cardText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default SocialScreen;
