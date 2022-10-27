import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Collect from './screen/collects/Collect';
import Main from './screen/mains/Main';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Main}/>
        <Stack.Screen name="Collect" component={Collect} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

