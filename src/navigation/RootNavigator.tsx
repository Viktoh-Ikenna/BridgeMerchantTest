import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export type RootStackParamList = {
     Home: undefined;
     Search: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => (
     <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
               <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
               <Stack.Screen name="Search" component={SearchScreen} options={{title: 'Search'}} />
          </Stack.Navigator>
     </NavigationContainer>
);

export default RootNavigator;
