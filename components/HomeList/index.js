import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS } from "../../variables/color";
const windowHeight = Dimensions.get("window").height / 3.2;
const heightImage = windowHeight / 1.6;

export const HomeList = (props) => {
  return (
    <View
      style={{
        flex: 1,
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
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ margin: 10 }}>
          <Image
            source={{
              uri: props.image,
            }}
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
            {props.type}
          </Text>
          <Text style={{ fontSize: 11 }}>{props.nombrePiece} Chambres</Text>
          <Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>Prix: </Text>
            <Text style={{ fontSize: 11 }}> {props.prix}Fcfa</Text>
          </Text>
          <Text>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Publier par:{" "}
            </Text>
            <Text style={{ fontSize: 11 }}>{props.createur}</Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "67%",
            }}
          >
            <View style={{ alignSelf: "center" }}>
              <Text style={{ fontSize: 11 }}>{props.localisation}</Text>
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
  );
};
