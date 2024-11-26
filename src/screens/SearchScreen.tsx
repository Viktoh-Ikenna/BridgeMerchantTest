import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
     const navigation = useNavigation();

     return (
          <View style={styles.container}>
               <Button title="Go Back" onPress={() => navigation.goBack()} />
          </View>
     );
};

const styles = StyleSheet.create({
     container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default SearchScreen;
