import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  JetBrainsMono_100Thin,
  CormorantGaramond_600SemiBold,
  DancingScript_400Regular,
} from '@expo-google-fonts/dev';

export default function JavaScript() {
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
        <Text style={styles.titulo}>
          Tecnologias para JavaScript.
        </Text>
        <ScrollView>
          <View>
            <FlatList
              data={array}
              renderItem={({ item }) => (
                <View style={styles.secondView}>
                  <Text style={styles.second}>{item.titulo}</Text>
                  <Image style={styles.imagem} source={item.imagem} />
                  <Text style={styles.text}>{item.descricao}</Text>
                </View>
              )}
            />
          </View>
        </ScrollView>
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
    marginVertical: 30,
    padding: 20,
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
  text: {
    fontFamily: 'CormorantGaramond_600SemiBold',
    fontSize: 20,
    color: '#ddd',
  },
});

const array = [
  {
    titulo: 'TypeScript',
    imagem: require('../assets/typescript.png'),
    descricao:
      'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
  },
  {
    titulo: 'NodeJS',
    imagem: require('../assets/nodejs.png'),
    descricao:
      'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web. A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.',
  },
  {
    titulo: 'React',
    imagem: require('../assets/react.jpg'),
    descricao:
      'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
  },
];
