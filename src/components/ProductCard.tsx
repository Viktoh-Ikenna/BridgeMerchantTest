import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ProductCard = ({product}: {product: any}) => (
     <View style={styles.card}>
          <Image source={{uri: product.image}} style={styles.image} />
          <Text>{product.title}</Text>
     </View>
);

const styles = StyleSheet.create({
     card: {
          /* styles */
     },
     image: {
          /* styles */
     },
});

export default ProductCard;
