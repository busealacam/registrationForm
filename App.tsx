import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { HomeScreen } from './screens/HomeScreen';
import { InscriptionPlusScreen } from './screens/InscriptionPlusScreen';
import { InscriptionScreen } from './screens/InscriptionScreen';
import { LoginScreen } from './screens/LoginScreen';
import { ValidationScreen } from './screens/ValidationScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Inscription Next" component={InscriptionPlusScreen} />
        <Stack.Screen name="Validation" component={ValidationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
