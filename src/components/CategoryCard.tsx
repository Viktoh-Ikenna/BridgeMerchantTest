import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CategoryCard = ({title}: {title: string}) => (
     <View style={styles.card}>
          <Text>{title}</Text>
     </View>
);

const styles = StyleSheet.create({
     card: {
          /* styles */
     },
});

export default CategoryCard;
