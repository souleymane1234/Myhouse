import {View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'pinar';
import { SearchBar } from 'react-native-elements';
import { COLORS } from '../../variables/color';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = ({navigation}) => {
  const [search, setSearch] = useState();
  const [venteVar, setVenteVar] = useState(true);
  const [locationVar, setLocationVar] = useState();

console.log(search)

const Vente = (
  <View style={{ width: windowWidth,
    height: windowHeight}}>
      <ScrollView>
    <Text style={{margin: 10, fontSize: 20}}>De belle maison en vente</Text>
    <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/home.jpg')}
                style={{alignSelf: 'center', width:"100%", height: "100%", borderRadius: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/appart1.jpeg')}
                style={{alignSelf: 'center', width:"100%", height: "100%"}}
              />
            </TouchableOpacity>
          </Carousel>
        </View>
        <View style={{marginBottom: 200}}>
          <Text style={{margin: 10, fontSize: 16}}>De bon plan pour vous</Text>
          <TouchableOpacity style={styles.hystotisConsultation} onPress={() => navigation.navigate("Details")}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/csalon.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en vente</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>100 Millions Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en vente</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>150 Millions Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Appartement en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>75 Millions Fcfa</Text>
                        <Text style={{fontSize: 11}}>2 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré Oscar</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
  </View>
);
const Location = (
  <View style={{ width: windowWidth,
    height: windowHeight}}>
      <ScrollView>
    <Text style={{margin: 10, fontSize: 20}}>De belle maison en location</Text>
    <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/home.jpg')}
                style={{alignSelf: 'center', width:"100%", height: "100%", borderRadius: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/appart1.jpeg')}
                style={{alignSelf: 'center', width:"100%", height: "100%"}}
              />
            </TouchableOpacity>
          </Carousel>
        </View>
        <View style={{marginBottom: 200}}>
          <Text style={{margin: 10, fontSize: 16}}>De bon plan pour vous</Text>
          <TouchableOpacity style={styles.hystotisConsultation} onPress={() => navigation.navigate("Details")}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/csalon.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>100 Millions Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>150 Millions Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Appartement en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>75 Millions Fcfa</Text>
                        <Text style={{fontSize: 11}}>2 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré Oscar</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
  </View>
);
  return (
    <View style={styles.container}>
        <View style={{ width: windowWidth,
    height: windowHeight}}>
      <ScrollView>
    <Text style={{margin: 10, fontSize: 20}}>Des offres incroyables</Text>
    <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, {backgroundColor: 'white'}]}>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/home.jpg')}
                style={{alignSelf: 'center', width:"100%", height: "100%", borderRadius: 10}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                // backgroundColor: "#000",
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: '100%',
                width: '100%',
              }}>
              <Image
                source={require('../../Assets/appart1.jpeg')}
                style={{alignSelf: 'center', width:"100%", height: "100%"}}
              />
            </TouchableOpacity>
          </Carousel>
        </View>
        <View style={{marginBottom: 200}}>
          <Text style={{margin: 10, fontSize: 16}}>De bon plan pour vous</Text>
          <TouchableOpacity style={styles.hystotisConsultation} onPress={() => navigation.navigate("Details")}>
                <View style={{flexDirection: "row"}}>
                    <View style={{margin: 10}}>
                        <Image source={require('../../Assets/csalon.jpeg')} style={{width: 100, height: 100, borderRadius: 10}}/>
                    </View>
                    <View style={{justifyContent: "space-around"}}>
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>200.000 Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Maison en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>250.000 Fcfa</Text>
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
                        <Text style={{fontSize: 16, color: COLORS.black, fontWeight: "bold"}}>Appartement en location</Text>
                        <Text style={{fontSize: 14, color: "#0b3155"}}>150.000 Fcfa</Text>
                        <Text style={{fontSize: 11}}>2 Chambres</Text>
                        <Text style={{fontSize: 11}}>Abidjan, Cocody Angré Oscar</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </ScrollView>
  </View>

      {/* <View style={{flex: 1}}>
        <Image
          source={require('../../Assets/famille.jpg')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{flex: 2, backgroundColor: 'transparent'}}>
        <View
          style={{
            margin: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("SearchScreen")}>
            <Icon
              size={50}
              name="home-search-outline"
              pack="material"
              color={'#0b3155'}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: '#f8f8f8',
                width: '100%',
                borderRadius: 15,
              }}>
              <Text style={styles.cardText}>Trouver un appartement</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("PlacementScreen")}>
            <Icon
              size={50}
              name="key-chain"
              pack="material"
              color={'#0b3155'}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: '#f8f8f8',
                width: '100%',
                borderRadius: 15,
              }}>
              <Text style={styles.cardText}>Mettre en location un appartement</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#74b5bb',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '10%',
            width: '94%',
            alignSelf: 'center',
            borderRadius: 5,
            position: "absolute",
            bottom: 0
          }} 
          onPress={() => navigation.navigate("SocialScreen")}
          >
          <View>
            <Icon size={30} name="handshake" pack="material" />
          </View>
          <View style={{justifyContent: 'center', marginHorizontal: 10}}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>
              Nous rejoindre
            </Text>
          </View>
        </TouchableOpacity>
      </View> */}
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
    color: '#0b3155',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: 'silver',
    marginHorizontal: 3,
    borderRadius: 3,
  },
  images: {
    height: '100%',
    width: '70%',
    borderRadius: 20,
  },
  carousel: {
    height: '100%',
    width: '100%',
  },
  carouselContainer: {
    height: 400,
    margin: 10,
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
});

export default HomeScreen;
