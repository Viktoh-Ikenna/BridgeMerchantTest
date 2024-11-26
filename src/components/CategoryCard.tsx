import React from 'react';
import {Box, Text, Image} from 'native-base';
import electronicsImage from '../assets/images/electronics.png';
import jeweleryImage from '../assets/images/jewelery.png';
import mensImage from '../assets/images/men-clothing.png';
import womanImage from '../assets/images/women-clothing.png';

const getCategoryImage = (name: string): any => {
     const imageMap: {[key: string]: any} = {
          electronics: electronicsImage,
          jewelery: jeweleryImage,
          "men's clothing": mensImage,
          "women's clothing": womanImage,
     };

     // Return the mapped image or a fallback placeholder
     return imageMap[name] || require('../assets/images/placeholder.png'); // Add a placeholder image
};

type Props = {
     category: {name: string; image?: string; bgColor?: string; border?: string};
};

const CategoryCard: React.FC<Props> = ({category}) => {
     return (
          <Box
               flex={1}
               m={2}
               bg={category.bgColor || '#FAFAFA'}
               borderRadius="16"
               //    shadow="2"
               borderWidth={1}
               borderColor={category.border || '#afafaf'}
               justifyContent="center"
               alignItems="center"
               p="2"
               minWidth={150}
               flexGrow={1}
               maxWidth={'50%'}>
               <Image
                    source={getCategoryImage(category.name)}
                    alt={category.name}
                    size="80px"
                    resizeMode="contain"
                    mb={4}
               />

               <Text
                    textAlign="center"
                    fontWeight="bold"
                    fontSize="14"
                    color="#4A4A4A"
                    textTransform={'capitalize'}>
                    {category.name}
               </Text>
          </Box>
     );
};

export default CategoryCard;
