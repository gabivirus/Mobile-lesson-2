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

export default function CSS() {
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
          Tecnologias para CSS.
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
    titulo: 'Sass',
    imagem: require('../assets/sass.jpg'),
    descricao:
      'Sass é uma linguagem de folhas de estilo concebida inicialmente por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Depois de suas versões iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma simples linguagem de script usada em arquivos Sass.',
  },
  {
    titulo: 'Bootstrap',
    imagem: require('../assets/bootstrap.jpeg'),
    descricao:
      'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.',
  },
  {
    titulo: 'Tailwind CSS',
    imagem: require('../assets/tailwind.png'),
    descricao:
      'Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.',
  },
];
