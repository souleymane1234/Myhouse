import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Input, Icon } from "@rneui/themed";
import { COLORS } from "../../variables/color";
import Button from "../../components/Button";
import { Picker } from "@react-native-picker/picker";
const SearchScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const [selectedMode, setSelectedMode] = useState();
  const [selectedChambre, setSelectedChambre] = useState();
  const [selectedPrixMini, setSelectedPrixMini] = useState();
  const [selectedPrixMaxi, setSelectedPrixMaxi] = useState();
  const [typeLocation, setTypeLocation] = useState();
  const [prixMini, setPrixMini] = useState();
  const [prixMaxi, setPrixMaxi] = useState();
  const [filtreValue, setFiltreValue] = useState();
  const [selectedLocation, setSelectedLocation] = useState();
  const [commune, setCommune] = useState();
  const [map, setMap] = useState(false);
  const [valide, setValide] = useState();
  const [searchData, setSearcheData] = useState();
  const [newDatas, setNewDatas] = useState();
  const [searchResult, setSearchResult] = useState();

  console.log("test", typeLocation);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Cache-Control", "no-cache");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Accept-Encoding", "gzip, deflate");
    myHeaders.append("Connection", "keep-alive");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://ticket-back-1.onrender.com/api/allEvent", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setValide(result);
        setSearcheData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const searchFilter = (text) => {
    if (text) {
      console.debug("search text ", text);
      // const itemData = item.name_proprietaire ? item.name_proprietaire.toUpperCase() : ''.toUpperCase();
      let newData = searchData.filter((item) => {
        const itemData = item.filtre;
        // const textData = text.toUpperCase();
        // return itemData.indexOf(textData) > -1;
        return itemData.includes(text);
      });
      console.debug("new data ", newData);
      setNewDatas(newData);

      // {
      //   typeLocation == "map"
      //     ? navigation.navigate("MapviewScreen", {
      //         dataHome: newData,
      //       })
      //     : navigation.navigate("SearchResultScreen", {
      //         dataHome: newData,
      //         data: data,
      //       });
      // }
      navigation.navigate("SearchResultScreen", {
        dataHome: newData,
        data: data,
      });
      // navigation.navigate("MapviewScreen", {
      //   dataHome: newData,
      // });
      setSearchResult(newData);
      setSearchResult(newData);
      //  setsearch(text);
    } else {
      setValide(searchData);
      // setsearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#0b3155" />
      {/* <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#e65f1e',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: '25%',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Acheter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '25%',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>Louer</Text>
        </TouchableOpacity>
      </View> */}
      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#0b3155",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Rechercher votre logement
        </Text>
      </View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.goBack()}
      >
        <View style={{ justifyContent: "center" }}>
          <Image source={require("../../Assets/chevron-left.png")} />
        </View>
        <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
          <Text style={styles.headerText}>retour</Text>
        </View>
      </TouchableOpacity>
      <ScrollView>
        <View style={{ margin: 10 }}>
          <View
            style={[
              styles.selection,
              { width: "95%", alignSelf: "center", margin: 10 },
            ]}
          >
            <Picker
              selectedValue={selectedMode}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedMode(itemValue)
              }
            >
              <Picker.Item
                label="Choisir votre type de logement"
                value="choixLogement"
              />
              <Picker.Item label="Appartement" value="appartement" />
              <Picker.Item label="Villa" value="villa" />
            </Picker>
          </View>
          <View
            style={[
              styles.selection,
              { width: "95%", alignSelf: "center", margin: 10 },
            ]}
          >
            <Picker
              selectedValue={selectedChambre}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedChambre(itemValue)
              }
            >
              <Picker.Item
                label="Choisir le nombre de pièce"
                value="choixChambres"
              />
              <Picker.Item label="Une pièce" value="1" />
              <Picker.Item label="Deux pièces" value="2" />
              <Picker.Item label="Trois pièces" value="3" />
              <Picker.Item label="Quatre pièces" value="3" />
            </Picker>
          </View>
          <View
            style={[
              styles.selection,
              {
                width: "95%",
                alignSelf: "center",
                margin: 10,
                flexDirection: "row",
                justifyContent: "space-between",
              },
            ]}
          >
            <View style={{ width: "50%" }}>
              <Picker
                selectedValue={selectedPrixMini}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedPrixMini(itemValue)
                }
              >
                <Picker.Item
                  label="Prix minimal"
                  value="choixChambres"
                  style={{ fontSize: 12 }}
                />
                <Picker.Item label="70000" value="1" />
                <Picker.Item label="120000" value="2" />
                <Picker.Item label="170000" value="3" />
                <Picker.Item label="220000" value="4" />
              </Picker>
            </View>
            <View style={{ width: "50%" }}>
              <Picker
                selectedValue={selectedPrixMaxi}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedPrixMaxi(itemValue)
                }
              >
                <Picker.Item
                  label="Prix maximal"
                  value="choixChambres"
                  style={{ fontSize: 12 }}
                />
                <Picker.Item label="120000" value="1" />
                <Picker.Item label="170000" value="2" />
                <Picker.Item label="220000" value="3" />
                <Picker.Item label="270000" value="4" />
              </Picker>
            </View>
          </View>
          <View
            style={[
              styles.selection,
              { width: "95%", alignSelf: "center", margin: 10 },
            ]}
          >
            <Picker
              selectedValue={typeLocation}
              onValueChange={(itemValue, itemIndex) =>
                setTypeLocation(itemValue)
              }
            >
              <Picker.Item label="Type de recherche" value="choixChambres" />
              <Picker.Item label="A 500 metres de moi" value="map" />
              <Picker.Item label="Choisir par commune" value="commune" />
            </Picker>
          </View>
          {typeLocation == "map" ? (
            <></>
          ) : (
            <View
              style={[
                styles.selection,
                { width: "95%", alignSelf: "center", margin: 10 },
              ]}
            >
              <Picker
                selectedValue={selectedLocation}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLocation(itemValue)
                }
              >
                <Picker.Item
                  label="Choisir la localisation"
                  value="choixChambres"
                />
                <Picker.Item label="Abobo" value="Abobo" />
                <Picker.Item label="Adjamé" value="Adjamé" />
                <Picker.Item label="Anyama" value="Anyama" />
                <Picker.Item label="Attécoubé" value="Attécoubé" />
                <Picker.Item label="Bingerville" value="Bingerville" />
                <Picker.Item label="Cocody" value="Cocody" />
                <Picker.Item label="Koumassi" value="Koumassi" />
                <Picker.Item label="Marcory" value="Marcory" />
                <Picker.Item label="Plateau" value="Plateau" />
                <Picker.Item label="Port bouët" value="Port bouët" />
                <Picker.Item label="Treichville" value="Treichville" />
                <Picker.Item label="Songon" value="Songon" />
                <Picker.Item label="Yopougon" value="Yopougon" />
              </Picker>
            </View>
          )}

          <Image
            source={require("../../Assets/image2-removebg-preview.png")}
            style={{ width: 250, height: 150, alignSelf: "center" }}
          />
        </View>
      </ScrollView>
      <Button
        onPress={() => {
          typeLocation == "map"
            ? navigation.navigate("MapviewScreen", {
                dataHome: valide,
              })
            : [searchFilter(selectedPrixMini)];
        }}
        title="Lancer la recherche"
        style={styles.signUpBtn}
        textStyle={styles.signUpBtnTxt}
      />
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
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0b3155",
    position: "absolute",
    bottom: 0,
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  header: {
    flexDirection: "row",
    top: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
});

export default SearchScreen;
