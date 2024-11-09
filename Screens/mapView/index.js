import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Modal,
  Linking,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import { COLORS } from "../../variables/color";
import MapView, { Marker, AnimatedRegion } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import {
  locationPermission,
  getCurrentLocation,
} from "../../helper/helperFunction";
import imagePath from "../../constants/imagePath";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const MapviewScreen = ({ navigation, route }) => {
  const { dataHome } = route.params;
  // const [myData, setMyData] = useState(dataHome[5]);
  // const [myData2, setMyData2] = useState(dataHome[6]);
  const [modalVisible, setModalVisible] = useState(false);

  const mapRef = useRef();
  const markerRef = useRef();
  // console.debug(myData);

  const [state, setState] = useState({
    curLoc: {
      latitude: 5.405315423401373,
      longitude: -4.006543312745738,
    },
    // destinationCords: {
    //   latitude: Number(myData.latitude),
    //   longitude: Number(myData.longitude),
    //   latitudeDelta: LATITUDE_DELTA,
    //   longitudeDelta: LONGITUDE_DELTA,
    // },
    destinationCords2: {
      latitude: 5.405681786850224,
      longitude: -4.007421268404192,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    isLoading: false,
    coordinate: new AnimatedRegion({
      latitude: 5.4053154234013737,
      longitude: -4.006543312745738,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
    time: 0,
    distance: 0,
    heading: 0,
  });

  const {
    curLoc,
    distance,
    destinationCords,
    destinationCords2,
    coordinate,
    heading,
  } = state;
  const updateState = (data) => setState((state) => ({ ...state, ...data }));

  useEffect(() => {
    getInitialLocation();
  }, []);
  useEffect(() => {
    getInitialLocation();
  }, []);

  const getInitialLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const { latitude, longitude, heading } = await getCurrentLocation();
      console.log("get live location after 1 second", heading);
      animate(latitude, longitude);
      // updateState({
      //   heading: heading,
      //   destinationCords: { latitude, longitude },
      //   coordinate: new AnimatedRegion({
      //     latitude: latitude,
      //     longitude: longitude,
      //     latitudeDelta: LATITUDE_DELTA,
      //     longitudeDelta: LONGITUDE_DELTA,
      //   }),
      // });
    }
  };

  const animate = (latitude, longitude) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == "android") {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };
  const initialLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const onCenter = () => {
    mapRef.current.animateToRegion({
      latitude: [curLoc.latitude, destinationCords.latitude],
      longitude: [curLoc.longitude, destinationCords.longitude],
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };
  const [myLocation, setMyLocation] = useState(initialLocation);
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <MapView
    //     style={{
    //       width: Dimensions.get("window").width,
    //       height: Dimensions.get("window").height,
    //     }}
    //     initialRegion={{
    //       latitude: myLocation.latitude,
    //       longitude: myLocation.longitude,
    //       latitudeDelta: 0.0922,
    //       longitudeDelta: 0.0421,
    //     }}
    //     provider="google"
    //   ></MapView>
    // </View>
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        style={StyleSheet.absoluteFill}
        initialRegion={{
          ...curLoc,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        <Marker.Animated
          ref={markerRef}
          coordinate={coordinate}
        ></Marker.Animated>

        {/* <Marker coordinate={destinationCords} image={imagePath.icGreenMarker} /> */}
        <Marker
          coordinate={destinationCords2}
          image={imagePath.icGreenMarker}
          onPress={() => setModalVisible(true)}
        />
      </MapView>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: "red",
          width: 100,
          height: 100,
        }}
        onPress={() => [onCenter()]}
      >
        <Text>Hello</Text>
      </TouchableOpacity>
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
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "#EAFFFD",
                padding: 2,
                width: "100%",
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
                height: "100%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ margin: 10 }}>
                  <Image
                    source={require("../../Assets/photo.jpeg")}
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                  />
                </View>
                <View style={{ justifyContent: "space-around" }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: COLORS.black,
                      fontWeight: "bold",
                    }}
                  >
                    Appartement
                  </Text>
                  <Text style={{ fontSize: 11 }}>2 Chambres</Text>
                  <Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      Prix:{" "}
                    </Text>
                    <Text style={{ fontSize: 11 }}> 200000 Fcfa</Text>
                  </Text>
                  <Text>
                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                      Publier par:{" "}
                    </Text>
                    <Text style={{ fontSize: 11 }}>Franck</Text>
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "67%",
                    }}
                  >
                    <View style={{ alignSelf: "center" }}>
                      <Text style={{ fontSize: 11 }}>Cocody</Text>
                    </View>
                    <View
                      style={{
                        backgroundColor: "green",
                        padding: 5,
                        borderRadius: 5,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Libre</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* <Image
            source={{
                  uri: props.image,
                }}
            style={{ width: 182, height: 182, borderRadius: 10 }}
          />
          <Text style={{textAlign: "center"}}> {props.nom} </Text> */}
            </View>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => [
                Linking.openURL(
                  "https://www.keypano.com/v/7518x5effc6w21-1727802136.html"
                ),
                setModalVisible(!modalVisible),
              ]}
            >
              <Text style={styles.textStyle}>Voir la maison en 3D</Text>
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
    width: "100%",
    height: "100%",
  },
  selection: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  header: {
    flexDirection: "row",
    top: 10,
    marginHorizontal: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  modalView: {
    margin: 1,
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
    height: "52%",
  },
  modalText: {
    textAlign: "center",
  },
});

export default MapviewScreen;
