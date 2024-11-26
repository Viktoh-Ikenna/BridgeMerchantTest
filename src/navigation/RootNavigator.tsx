import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TrendScreen from '../screens/TrendScreen';
import OrderScreen from '../screens/OrderScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {enableScreens} from 'react-native-screens';
import {Box, Text} from 'native-base';
import Animated from 'react-native-reanimated';
import {HomeIcon, OrderIcon, ProfileIcon, SearchIcon, TrendIcon} from '../assets/icons';

enableScreens();

type RootTabParamList = {
     Home: undefined;
     Search: undefined;
     Trend: undefined;
     Order: undefined;
     Profile: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootNavigator: React.FC = () => {
     return (
          <NavigationContainer>
               <Tab.Navigator
                    screenOptions={({route}) => ({
                         tabBarIcon: ({focused, color, size}) => {
                              const icons = {
                                   Home: HomeIcon,
                                   Search: SearchIcon,
                                   Trend: TrendIcon,
                                   Order: OrderIcon,
                                   Profile: ProfileIcon,
                              };

                              const IconComponent = icons[route.name];

                              //   if (!IconComponent) {
                              //        console.error(`Icon for route "${route.name}" is not defined.`);
                              //        return <Box alignItems="center"></Box>;
                              //   }

                              return (
                                   <Box alignItems="center">
                                        <Animated.View
                                             style={{
                                                  transform: [
                                                       {
                                                            scale: focused ? 1.3 : 1,
                                                       },
                                                  ],
                                             }}>
                                             <IconComponent
                                                  width={size || 24}
                                                  height={size || 24}
                                                  color={focused ? '#12AF37' : '#0000009E'}
                                             />
                                        </Animated.View>
                                   </Box>
                              );
                         },
                         tabBarActiveTintColor: '#12AF37',
                         tabBarLabel: ({focused}) => {
                              return (
                                   <Text
                                        style={{
                                             color: focused ? '#12AF37' : '#0000009E',
                                             fontSize: 9.8,
                                        }}>
                                        {route.name}
                                   </Text>
                              );
                         },
                         tabBarInactiveTintColor: '#0000009E',
                         tabBarStyle: {
                              height: 80,
                              borderWidth: 1,
                              paddingBottom: 10,
                              paddingTop: 10,
                              backgroundColor: '#ffffff',
                              shadowColor: '#000',
                              shadowOpacity: 0.1,
                              shadowOffset: {width: 0, height: -1},
                              elevation: 5,
                         },
                         tabBarLabelStyle: {fontSize: 12},
                         marginTop: 0,
                         headerShown: false,
                    })}>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="Search" component={SearchScreen} />
                    <Tab.Screen name="Trend" component={TrendScreen} />
                    <Tab.Screen name="Order" component={OrderScreen} />
                    <Tab.Screen name="Profile" component={ProfileScreen} />
               </Tab.Navigator>
          </NavigationContainer>
     );
};

export default RootNavigator;
