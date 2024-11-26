import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {useNavigation} from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const OrderScreen = () => {
     const navigation = useNavigation<HomeScreenNavigationProp>();

     return (
          <View style={styles.container}>
               <Button
                    title="Go to Search From Trend"
                    onPress={() => navigation.navigate('Search')}
               />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default OrderScreen;
