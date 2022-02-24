import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/pages/splash';
import List from './src/pages/list';
import Content from './src/pages/content';
import AddHistory from './src/pages/add-history';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="AddHistory" component={AddHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
