import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Input, Icon} from '@rneui/themed';
import {COLORS} from '../../variables/color';
import Button from '../../components/Button';

const Register = ({navigation}) => {
  const [sexeChoiceHomme, setSexeChoiceHomme] = useState(false);
  const [sexeChoiceFemme, setSexeChoiceFemme] = useState(false);
  const [sexeChoiceAutre, setSexeChoiceAutre] = useState(false);
  const [myDate, setMyDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Date de naissance');
  // data state
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adresse, setAdresse] = useState('');
  const [photo, setPhoto] = useState('');
  const [imageBase64, setImageBase64] = useState('');
  const [title, setTitle] = useState('');
  const [taille, setTaille] = useState('');
  const [poids, setPoids] = useState('');
  const [Spinner, setSpinner] = React.useState(false);
  const [maData, setMaData] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || myDate;
    setShow(Platform.OS === 'ios');
    setMyDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getDate();
    setText(fDate);
    console.log(fDate);
  };
  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const sexeChoice = (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View>
        {sexeChoiceHomme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Mr');
            }}>
            <Text style={styles.sexeChoiceTextActif}>Homme</Text>
            <View style={[styles.sexeLineActif, {width: 65}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Mr');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Homme</Text>
            <View style={[styles.sexeLineNoActif, {width: 65}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceFemme == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Mr');
            }}>
            <Text style={styles.sexeChoiceTextActif}>Femme</Text>
            <View style={[styles.sexeLineActif, {width: 65}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(true);
              setSexeChoiceAutre(false);
              setTitle('Mme');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>Femme</Text>
            <View style={[styles.sexeLineNoActif, {width: 65}]}></View>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {sexeChoiceAutre == true ? (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(true);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(false);
              setTitle('Mr');
            }}>
            <Text style={styles.sexeChoiceTextActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineActif, {width: 150}]}></View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSexeChoiceHomme(false);
              setSexeChoiceFemme(false);
              setSexeChoiceAutre(true);
              setTitle('Yel');
            }}>
            <Text style={styles.sexeChoiceTextNoActif}>
              Je préfère ne pas le dire
            </Text>
            <View style={[styles.sexeLineNoActif, {width: 150}]}></View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={COLORS.white} />
      <ScrollView>
        <View style={styles.logoView}>
          <Image
            source={require('../../Assets/logo-removebg-preview.png')}
            style={styles.logo}
          />
                    <Text style={{    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 14, top: -10}}>La recherche de maison autrement</Text>
          <Text style={styles.textRegister}>Inscrivez-vous</Text>
        </View>
        <View style={{margin: 10}}>
          <Input
            placeholder="Nom"
            onChangeText={nom => setNom(nom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Prénom"
            onChangeText={prenom => setPrenom(prenom)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          {sexeChoice}
          <Input
            placeholder="Numéro de téléphone"
            onChangeText={numero => setNumero(numero)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            secureTextEntry
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <Input
            placeholder="Localisation"
            onChangeText={adresse => setAdresse(adresse)}
            inputContainerStyle={{
              borderColor: COLORS.input_border_color,
            }}
          />
          <TouchableOpacity
            onPress={() => showMode('date')}
            style={styles.birthButton}>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={myDate}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
            <View style={styles.birthView}>
              <Text style={styles.birthText}>{text}</Text>
            </View>
            <View style={styles.birthLine}></View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.confidentialText}>
            En adhérant, vous acceptez les conditions générales et confirmez que
            vous avez lu et compris la déclaration de confidentialité.
          </Text>
        </View>
        <Button
          onPress={() => navigation.navigate('HomeScreen')}
          title="S’inscrire"
          style={styles.signUpBtn}
          textStyle={styles.signUpBtnTxt}
        />
      </ScrollView>
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
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    marginHorizontal: 5,
    color: COLORS.black,
  },
  logoView: {
    alignSelf: 'center',
  },
  logo: {
    marginBottom: 10,
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  textRegister: {
    textAlign: 'center',
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 24,
  },
  sexeChoiceTextActif: {
    color: COLORS.button.principal,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 10,
  },
  sexeChoiceTextNoActif: {
    color: COLORS.input_border_color,
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center',
  },
  sexeLineActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.button.principal,
  },
  sexeLineNoActif: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  birthButton: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  birthView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  birthText: {
    marginBottom: 10,
  },
  birthLine: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.input_border_color,
  },
  addMediaText: {
    marginBottom: 10,
  },
  selectMediaButton: {
    borderRadius: 53,
    borderWidth: 1,
    borderColor: '#1C4ED8',
    width: '40%',
    justifyContent: 'center',
    height: 30,
  },
  selectMediaText: {
    color: '#1C4ED8',
    textAlign: 'center',
  },
  signUpBtn: {
    height: 40,
    borderRadius: 39,
    marginVertical: 10,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#0b3155",
  },
  signUpBtnTxt: {
    fontSize: 18,
    top: -3,
  },
  confidentialText: {
    textAlign: 'center',
    fontSize: 10,
  },
});

export default Register;
