import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import JavaScript from './javascript';
import Python from './python';
import CSS from './css';
import Home from './home';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="JavaScript" component={JavaScript} />
        <Stack.Screen name="Python" component={Python} />
        <Stack.Screen name="CSS" component={CSS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
