import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_100Thin,
  CormorantGaramond_600SemiBold,
  DancingScript_400Regular,
} from '@expo-google-fonts/dev';

export default function Home(props) {
  let [fontsLoaded] = useFonts({
    JetBrainsMono_100Thin,
    CormorantGaramond_600SemiBold,
    DancingScript_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Frameworks e bibliotecas.</Text>
        <Image style={styles.imagem} source={require('../assets/home.png')} />
        <TouchableOpacity style={styles.secondView}
          onPress={() => {
            props.navigation.navigate('CSS');
          }}>
          <Text style={styles.second}>CSS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondView}
          onPress={() => {
            props.navigation.navigate('JavaScript');
          }}>
          <Text style={styles.second}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondView}
          onPress={() => {
            props.navigation.navigate('Python');
          }}>
          <Text style={styles.second}>Python</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    backgroundColor: '#353d28',
  },
  titulo: {
    marginVertical: 20,
    fontSize: 40,
    color: '#aec571',
    fontFamily: 'JetBrainsMono_100Thin',
    fontWeight: 'bolder',
  },
  secondView: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    backgroundColor: '#3d472d',
    color: '#b6bab1',
  },
  second: {
    width: '100%',
    fontSize: 30,
    fontFamily: 'DancingScript_400Regular',
    color: '#ffde7d',
    borderBottomWidth: 2,
    borderColor: '#ffde7d',
  },
  imagem: {
    width: 320,
    height: 180,
    resizeImage: 'center',
    marginVertical: 20,
  },
});
