import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Input } from "@rneui/themed";
import { COLORS } from "../../variables/color";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PortailScreen = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      {/* <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require('../../Assets/logo-removebg-preview.png')}
            style={styles.logo}
          />
          <Text style={{    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 14, top: -10}}>Bienvenue sur votre portail de recherche de bien immobilier </Text>
          <Text style={styles.textRegister}>Veuillez choisir votre option.</Text>
        </View>
        <View style={{margin: 10}}>
        <Button
          onPress={() => navigation.navigate('SearchScreen')}
          title="Rechercher une maison"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
                <Button
          onPress={() => navigation.navigate('PlacementScreen')}
          title="Mettre une maison en location"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        </View>
      </ScrollView> */}
      <View style={{ flex: 1 }}>
        <Image
          source={require("../../Assets/famille.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={{ flex: 2, backgroundColor: "transparent" }}>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{
              textAlign: "center",
              color: COLORS.black,
              fontWeight: "bold",
              fontSize: 14,
              top: -10,
            }}
          >
            Bienvenue sur votre portail de recherche de bien immobilier{" "}
          </Text>
          <Text style={styles.textRegister}>
            Veuillez choisir votre option.
          </Text>
        </View>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("SearchScreen", {
                data: data,
              })
            }
          >
            <Icon
              size={50}
              name="home-search-outline"
              pack="material"
              color={"#0b3155"}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: "#f8f8f8",
                width: "100%",
                borderRadius: 15,
              }}
            >
              <Text style={styles.cardText}>Trouver un appartement</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate("PlacementScreen", {
                data: data,
              })
            }
          >
            <Icon
              size={50}
              name="key-chain"
              pack="material"
              color={"#0b3155"}
              style={styles.cardIcon}
            />
            <View
              style={{
                backgroundColor: "#f8f8f8",
                width: "100%",
                borderRadius: 15,
              }}
            >
              <Text style={styles.cardText}>
                Mettre en location un appartement
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={require("../../Assets/image1-removebg-preview.png")}
            style={{ width: 250, height: 100, alignSelf: "center" }}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#74b5bb",
            flexDirection: "row",
            justifyContent: "center",
            height: "10%",
            width: "94%",
            alignSelf: "center",
            borderRadius: 5,
            position: "absolute",
            bottom: 0,
            marginBottom: 20,
          }}
          onPress={() => navigation.navigate("SocialScreen")}
        >
          <View>
            <Icon size={30} name="handshake" pack="material" />
          </View>
          <View style={{ justifyContent: "center", marginHorizontal: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              Nous rejoindre
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 40,
    flexDirection: "row",
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  logoView: {
    alignSelf: "center",
    marginBottom: 150,
    top: 10,
  },
  logo: {
    marginBottom: 20,
    alignSelf: "center",
    width: 150,
    height: 150,
  },
  textRegister: {
    textAlign: "center",
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 24,
  },
  signUpBtn: {
    height: 60,
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0b3155",
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  confidentialText: {
    textAlign: "center",
    fontSize: 14,
  },
  forgotPassButton: {
    margin: 10,
    top: -10,
  },
  forgotPassText: {
    color: "#1C4ED8",
    fontSize: 14,
  },
  newAccountView: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 10,
  },
  card: {
    width: "45%",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 5,
    elevation: 10,
    height: "auto",
  },
  cardIcon: {
    marginBottom: 80,
    top: 45,
  },
  cardText: {
    color: "#0b3155",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default PortailScreen;
