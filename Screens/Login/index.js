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
import { Input, Icon } from "@rneui/themed";
import { COLORS } from "../../variables/color";
import Button from "../../components/Button";
import OrientationLoadingOverlay from "react-native-orientation-loading-overlay";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Spinner, setSpinner] = useState(false);
  const al = () => {
    Alert.alert(
      "Identifiants incorrects",
      "Nom d’utilisateur ou mot de passe incorrect"
    );
  };
  // email: "franck@gmail.com",
  // password: "12345",
  const SendData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email: email,
      password: password,
    });
    setSpinner(!Spinner);
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ticket-back-1.onrender.com/api/signin", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSpinner(!Spinner);
        if (result.token) {
          setSpinner(false);
          navigation.navigate("PortailScreen", {
            data: result,
          });
          setSpinner(false);
        } else {
          setSpinner(false);
          Alert.alert("connexion échouer, veuillez vérifié vos informations");
        }
      })
      .catch((error) => {
        setSpinner(false);
        console.error(error);
        Alert.alert("erreur de serveur");
        setSpinner(false);
      });
  };

  const Loader = (
    <OrientationLoadingOverlay
      visible={Spinner}
      color="white"
      indicatorSize="large"
      messageFontSize={10}
      message="Veillez patienter un moment!!"
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      {Loader}
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require("../../Assets/logo-removebg-preview.png")}
            style={styles.logo}
          />
          <Text
            style={{
              textAlign: "center",
              color: COLORS.black,
              fontWeight: "bold",
              fontSize: 14,
              top: -10,
            }}
          >
            La recherche de maison autrement
          </Text>
          <Image
            source={require("../../Assets/image3.jpeg")}
            style={{
              alignSelf: "center",
              width: 320,
              height: 100,
            }}
          />
          <Text style={styles.textRegister}>Connectez-vous</Text>
        </View>
        <View style={{ margin: 10 }}>
          <Input
            placeholder="Email"
            onChangeText={(email) => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            secureTextEntry
            placeholder="Mots de passe"
            onChangeText={(password) => setPassword(password)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <TouchableOpacity style={styles.forgotPassButton}>
            <Text style={styles.forgotPassText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <Button
          onPress={() => SendData()}
          title="Se connecter"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
        <View style={styles.newAccountView}>
          <Text style={styles.confidentialText}>
            Vous n’avez pas de compte ?
          </Text>
          <TouchableOpacity onPress={() => SendData()}>
            <Text style={styles.forgotPassText}> Créer un compte</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 50,
    top: 10,
  },
  logo: {
    alignSelf: "center",
    width: 100,
    height: 100,
  },
  textRegister: {
    textAlign: "center",
    color: COLORS.black,
    fontWeight: "bold",
    fontSize: 24,
  },
  signUpBtn: {
    height: 40,
    borderRadius: 39,
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
});

export default Login;
