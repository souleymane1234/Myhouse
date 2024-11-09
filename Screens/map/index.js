import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../variables/color";
import _ from "lodash";
import Image360Viewer from "@hauvo/react-native-360-image-viewer";

const { width, height } = Dimensions.get("window");
const images = _.reverse([
  require(`../../Assets/360/iris-1.jpg`),
  require(`../../Assets/360/iris-2.jpg`),
  require(`../../Assets/360/iris-3.jpg`),
  require(`../../Assets/360/iris-4.jpg`),
  require(`../../Assets/360/iris-5.jpg`),
  require(`../../Assets/360/iris-6.jpg`),
  require(`../../Assets/360/iris-7.jpg`),
  require(`../../Assets/360/iris-8.jpg`),
  require(`../../Assets/360/iris-9.jpg`),
  require(`../../Assets/360/iris-10.jpg`),
  require(`../../Assets/360/iris-11.jpg`),
  require(`../../Assets/360/iris-12.jpg`),
  require(`../../Assets/360/iris-13.jpg`),
  require(`../../Assets/360/iris-14.jpg`),
  require(`../../Assets/360/iris-15.jpg`),
  require(`../../Assets/360/iris-16.jpg`),
  require(`../../Assets/360/iris-17.jpg`),
  require(`../../Assets/360/iris-18.jpg`),
  require(`../../Assets/360/iris-19.jpg`),
  require(`../../Assets/360/iris-20.jpg`),
  require(`../../Assets/360/iris-21.jpg`),
  require(`../../Assets/360/iris-22.jpg`),
  require(`../../Assets/360/iris-23.jpg`),
  require(`../../Assets/360/iris-24.jpg`),
  require(`../../Assets/360/iris-25.jpg`),
  require(`../../Assets/360/iris-26.jpg`),
  require(`../../Assets/360/iris-27.jpg`),
  require(`../../Assets/360/iris-28.jpg`),
  require(`../../Assets/360/iris-29.jpg`),
  require(`../../Assets/360/iris-30.jpg`),
  require(`../../Assets/360/iris-31.jpg`),
  require(`../../Assets/360/iris-32.jpg`),
  require(`../../Assets/360/iris-33.jpg`),
  require(`../../Assets/360/iris-34.jpg`),
  require(`../../Assets/360/iris-35.jpg`),
  require(`../../Assets/360/iris-36.jpg`),
]);

const SearchResultScreenMap = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "none",
      }}
    >
      <Image360Viewer srcset={images} style={{ width: 100, height: 100 }} />
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
});

export default SearchResultScreenMap;
