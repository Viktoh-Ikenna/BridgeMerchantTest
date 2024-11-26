import React from 'react';
import {Box, HStack, Image, Pressable, Text} from 'native-base';
import {AddIcon} from '../assets/icons';

type Props = {
     product: {name: string; location: string; price: number; image: string};
};

const ProductCard: React.FC<Props> = ({product}) => {
     return (
          <Box
               flex={1}
               m={2}
               borderRadius="8"
               overflow="hidden"
               bg="#ffff"
               shadow={'1'}
               py={4}
               borderWidth={1}
               borderColor={'#E2E2E2'}
               minWidth={150}
               alignItems={'center'}
               maxWidth={'50%'}>
               <Image
                    source={{uri: product.image}}
                    alt={product.name}
                    size="lg"
                    resizeMode={'contain'}
               />
               <Box p={2} bg={'#fff'}>
                    <Text fontWeight="bold" isTruncated>
                         {product.name}
                    </Text>
                    <Text fontSize="xs" color="#C4C4C4" isTruncated>
                         {product.location}
                    </Text>
                    <HStack justifyContent="space-between" alignItems="center" mt={2}>
                         <Text color="#FD903E">₦{product.price}</Text>
                         <Pressable
                              onPress={() => console.log('Button Pressed')}
                              borderRadius="full"
                              bg="#087319"
                              size="12"
                              alignItems="center"
                              justifyContent="center"
                              shadow="4"
                              _pressed={{
                                   bg: '#0D8C2D',
                              }}>
                              <AddIcon width={24} height={24} fill="#FFFFFF" />{' '}
                         </Pressable>
                    </HStack>
               </Box>
          </Box>
     );
};

export default ProductCard;
