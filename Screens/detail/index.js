import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../variables/color";
import Carousel from "pinar";
import Button from "../../components/Button";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Details = ({ navigation, route }) => {
  const { data } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  // console.log(data);
  return (
    <View style={styles.container}>
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
          Details
        </Text>
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{ flexDirection: "row", top: 10, marginHorizontal: 10 }}
          onPress={() => navigation.goBack()}
        >
          <View style={{ justifyContent: "center" }}>
            <Image source={require("../../Assets/chevron-left.png")} />
          </View>
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
        <View style={styles.carouselContainer}>
          <Carousel
            style={styles.carousel}
            showsControls={false}
            dotStyle={styles.dotStyle}
            activeDotStyle={[styles.dotStyle, { backgroundColor: "white" }]}
          >
            <TouchableOpacity
              style={{
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: data?.image,
                }}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: data?.image2,
                }}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: data?.image3,
                }}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                margin: 10,
                borderRadius: 15,
                marginBottom: 80,
                height: "100%",
                width: "100%",
              }}
            >
              <Image
                source={{
                  uri: data?.image4,
                }}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>
          </Carousel>
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 20, color: "#0b3155", marginBottom: 10 }}>
            Description
          </Text>
          <Text>{data?.description}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image
                source={require("../../Assets/logo.jpeg")}
                style={{
                  alignSelf: "center",
                  resizeMode: "contain",
                  width: 60,
                  height: 60,
                  borderRadius: 50,
                }}
              />
            </View>
            <View style={{ marginHorizontal: 20, justifyContent: "center" }}>
              <Text
                style={{ marginBottom: 10, fontSize: 16, fontWeight: "bold" }}
              >
                {data?.createur}
              </Text>
              <Text>Proprietaire</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#0b3155",
                width: 35,
                height: 35,
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <Icon
                size={20}
                name="phone"
                pack="material"
                color={"#fff"}
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#0b3155",
                width: 35,
                height: 35,
                justifyContent: "center",
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            >
              <Icon
                size={20}
                name="message"
                pack="material"
                color={"#fff"}
                style={{ alignSelf: "center" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ margin: 10, fontSize: 20 }}>Prix</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 25, color: "#0b3155" }}>
                {data?.prix} Fcfa
              </Text>
            </View>

            <Button
              onPress={() => setModalVisible(true)}
              title="Je prends"
              style={styles.signUpBtn}
              textStyle={styles.signUpBtnTxt}
            />
          </View>
        </View>
        <Image
          source={require("../../Assets/image5-removebg-preview.png")}
          style={{
            width: 250,
            height: 80,
            alignSelf: "center",
            marginBottom: 20,
          }}
        />
        {/* <View>
            <View style={{margin: 10}}>
                <Text>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Type: </Text>
                    <Text style={{fontSize: 12}}>Maison 2 pieces</Text>
                </Text>
                <Text>
                    <Text style={{fontWeight: "bold", fontSize: 16}}>Localisation: </Text>
                    <Text style={{fontSize: 12}}>Abidjan, Cocody Angré 8e Tranche</Text>
                </Text>
            </View>
        </View> */}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Je prends la maison!</Text>
            <Image
              source={require("../../Assets/icon-removebg-preview.png")}
              style={{ width: 100, height: 100 }}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => [
                setModalVisible(!modalVisible),
                navigation.navigate("PortailScreen", {
                  data: data,
                }),
              ]}
            >
              <Text style={styles.textStyle}>Valider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: "40%",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#0b3155",
    // position: "absolute",
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
  successImageSize: {
    alignSelf: "center",
    marginBottom: 30,
    margin: 10,
  },
  bottomTextStatCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  titleBottomTextStatCard: {
    fontSize: 20,
    fontWeight: "bold",
  },
  sizeBottomTextStatCard: {
    fontSize: 8,
  },
  sizeMinAndKmBottomTextStatCard: {
    fontSize: 8,
    fontWeight: "bold",
    top: 12,
  },
  rowAndCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  rowAndBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dotStyle: {
    width: 30,
    height: 3,
    backgroundColor: "silver",
    marginHorizontal: 3,
    borderRadius: 3,
  },
  images: {
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  carousel: {
    height: "50%",
    width: "100%",
  },
  carouselContainer: {
    height: 300,
    marginHorizontal: 10,
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
    color: COLORS.black,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 150,
  },
  modalText: {
    textAlign: "center",
  },
});

export default Details;
