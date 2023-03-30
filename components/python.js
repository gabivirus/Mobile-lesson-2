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

export default function Python() {
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
          Tecnologias para Python.
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
    titulo: 'Django',
    imagem: require('../assets/django.png'),
    descricao:
      'Django é um framework para desenvolvimento rápido para web, escrito em Python, que utiliza o padrão model-template-view. Foi criado originalmente como sistema para gerenciar um site jornalístico na cidade de Lawrence, no Kansas. Tornou-se um projeto de código aberto e foi publicado sob a licença BSD em 2005.',
  },
  {
    titulo: 'Flask',
    imagem: require('../assets/flask.png'),
    descricao:
      'Flask é um pequeno framework web escrito em Python. É classificado como um microframework porque não requer ferramentas ou bibliotecas particulares, mantendo um núcleo simples, porém, extensível.',
  },
  {
    titulo: 'Pandas',
    imagem: require('../assets/pandas.jpg'),
    descricao:
      'Em programação de computadores, pandas é uma biblioteca de software criada para a linguagem Python para manipulação e análise de dados. Em particular, oferece estruturas e operações para manipular tabelas numéricas e séries temporais. É software livre sob a licença BSD.',
  },
];
