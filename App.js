import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/components/pages/splash';
import List from './src/components/pages/list';
import Content from './src/components/pages/content';
import AddHistory from './src/components/pages/add-history';
import EditHistory from './src/components/pages/edit-history';
import EditInfo from './src/components/pages/edit-info';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Content" component={Content} />
        <Stack.Screen name="AddHistory" component={AddHistory} />
        <Stack.Screen name="EditHistory" component={EditHistory} />
        <Stack.Screen name="EditInfo" component={EditInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
