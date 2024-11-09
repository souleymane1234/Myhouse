import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { COLORS } from "../../variables/color";
import { HomeList } from "../../components/HomeList";
import { COLORS } from "../../variables/color";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

const ResultCreationScreen = ({ navigation, route }) => {
  const { data } = route.params;
  const [valide, setValide] = useState();
  const [searcheData, setSearcheData] = useState();
  const [searchResult, setSearchResult] = useState();
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
        setValide(result);
        // let newData = result.filter((item) => {
        //   const itemData = item.createur;
        //   return itemData.includes(data.user.nom);
        // });
        // setSearcheData(newData);
      })
      .catch((error) => console.log("error", error));
  }, [valide]);

  let Loader;
  if (valide) {
    Loader = (
      <OrientationLoadingOverlay
        visible={false}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Chargement des offres publié"
      />
    );
  } else {
    Loader = (
      <OrientationLoadingOverlay
        visible={true}
        color="white"
        indicatorSize="large"
        messageFontSize={10}
        message="Chargement des offres publié"
      />
    );
  }

  const renderItemProductCard = ({ item }) => {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        // onPress={() =>
        //   navigation.navigate("Details", {
        //     data: item,
        //   })
        // }
      >
        <HomeList
          id={item._id}
          type={item.type}
          createur={item.createur}
          image={item.image}
          prix={item.prix}
          localisation={item.localisation}
          nombrePiece={item.nombrePiece}
        />
      </TouchableHighlight>
    );
  };

  return (
    <View style={styles.container}>
      {Loader}
      <StatusBar animated={true} backgroundColor="#0b3155" />
      <View
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "#0b3155",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Resultats en fonction de localisation
        </Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{
            height: 30,
            backgroundColor: "#0b3155",
            flexDirection: "row",
            justifyContent: "center",
            top: 10,
            alignSelf: "center",
            borderRadius: 10,
            marginBottom: 10,
            width: 100,
          }}
          onPress={() => navigation.goBack()}
        >
          <View style={{ justifyContent: "center" }}></View>
          <View style={{ justifyContent: "center", marginHorizontal: 5 }}>
            <Text style={styles.headerText}>retour</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 30,
            backgroundColor: "#0b3155",
            flexDirection: "row",
            justifyContent: "center",
            top: 10,
            alignSelf: "center",
            borderRadius: 10,
            marginBottom: 10,
            width: 100,
          }}
          onPress={() => navigation.navigate("PortailScreen")}
        >
          <Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Acceuil
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <TouchableOpacity
          style={{
            width: "80%",
            height: 30,
            backgroundColor: "#0b3155",
            flexDirection: "row",
            justifyContent: "center",
            top: 10,
            alignSelf: "center",
            borderRadius: 10,
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate("SearchResultScreenMap")}
        >
          <Text>
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Voir sur la carte
            </Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View>
        <FlatList
          style={{
            marginBottom: 100,
            alignSelf: "center",
            width: "100%",
          }}
          data={valide}
          keyExtractor={(item, index) => item.id}
          renderItem={renderItemProductCard}
        />
      </View>
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
    shadowRadius: 1.0,

    elevation: 1,
  },
  header: {
    flexDirection: "row",
    top: 10,
    marginHorizontal: 10,
    marginBottom: 20,
    justifyContent: "space-between",
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ResultCreationScreen;
