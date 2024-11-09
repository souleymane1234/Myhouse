import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../Screens/Login";
import Register from "../../Screens/Register";
import HomeScreen from "../../Screens/Home";
import SearchScreen from "../../Screens/Search";
import SearchResultScreen from "../../Screens/searchResult";
import SearchResultScreenMap from "../../Screens/map";
import SocialScreen from "../../Screens/social";
import Details from "../../Screens/detail";
import PlacementScreen from "../../Screens/placement";
import PortailScreen from "../../Screens/portail";
import PublicationScreen from "../../Screens/publication";
import MapSearch from "../../Screens/mapSearch";
import MapviewScreen from "../../Screens/mapView";
import ResultCreationScreen from "../../Screens/resultCreation";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen
          name={"Login"}
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Register"}
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"HomeScreen"}
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"SearchScreen"}
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"SearchResultScreen"}
          component={SearchResultScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"SearchResultScreenMap"}
          component={SearchResultScreenMap}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"SocialScreen"}
          component={SocialScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Details"}
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"PlacementScreen"}
          component={PlacementScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"PortailScreen"}
          component={PortailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"PublicationScreen"}
          component={PublicationScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"MapSearch"}
          component={MapSearch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"MapviewScreen"}
          component={MapviewScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"ResultCreationScreen"}
          component={ResultCreationScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
