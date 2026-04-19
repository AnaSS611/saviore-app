import CadastroScreen from './src/screens/CadastroScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProdutosScreen from './src/screens/ProdutosScreen';

import  {NavigationContainer} from '@react-navigation/native';
import  {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Produtos'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Produtos" component={ProdutosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}