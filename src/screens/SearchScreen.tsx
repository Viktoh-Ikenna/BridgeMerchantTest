import React, {useEffect, useState} from 'react';
import {
     ScrollView,
     Skeleton,
     VStack,
     Box,
     HStack,
     Text,
     Center,
     Animated as RNAnimated,
} from 'native-base';
import SearchHeader from '../components/SearchHeader';
import SearchHistory from '../components/SearchHistory';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import {useCategories} from '../hooks/useCategories';
import {useProducts} from '../hooks/useProducts';
import {SafeAreaView} from 'react-native-safe-area-context';
import {getSearchHistory, saveSearchHistory} from '../utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from 'react-native-reanimated';

const categoryColors = [
     {color: '#F8A44C1A', border: '#F8A44CB2'},
     {color: '#53B1751A', border: '#53B175B2'},
     {color: '#F7A5931a', border: '#F7A593b2'},
     {color: '#D3B0E01a', border: '#D3B0E0b2'},
];

const SearchScreen = () => {
     const [searchQuery, setSearchQuery] = useState('');
     const [searchHistory, setSearchHistory] = useState<string[]>([]);
     const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
     const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
     const [currentSessionQuery, setCurrentSessionQuery] = useState<string | null>(null);

     // Animation state
     const opacity = useSharedValue(0);
     const translateY = useSharedValue(10);

     const animationStyle = useAnimatedStyle(() => ({
          opacity: withTiming(opacity.value, {duration: 500}),
          transform: [{translateY: withTiming(translateY.value, {duration: 500})}],
     }));

     const {
          data: categories = [],
          isLoading: loadingCategories,
          isError: categoryError,
     } = useCategories();
     const {
          data: products = [],
          isLoading: loadingProducts,
          isError: productError,
     } = useProducts(searchQuery);

     useEffect(() => {
          if (searchQuery) {
               const filteredCats = categories.filter(category =>
                    category.toLowerCase().includes(searchQuery.toLowerCase()),
               );
               const filteredProds = products.filter(product =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase()),
               );
               setFilteredCategories(filteredCats);
               setFilteredProducts(filteredProds);
          } else {
               setFilteredCategories([]);
               setFilteredProducts([]);
          }
     }, [searchQuery, categories, products]);

     useEffect(() => {
          const loadHistory = async () => {
               const history = await getSearchHistory();
               setSearchHistory(history);
          };
          loadHistory();
     }, []);

     useEffect(() => {
          // Trigger animation on query change
          opacity.value = 1;
          translateY.value = 0;
     }, [searchQuery]);

     const handleSearch = async (query: string) => {
          setSearchQuery(query);

          if (query) {
               if (!currentSessionQuery) {
                    await saveSearchHistory(query);
               } else {
                    const history = await getSearchHistory();
                    const updatedHistory = history.map(item =>
                         item === currentSessionQuery ? query : item,
                    );
                    await AsyncStorage.setItem('history', JSON.stringify(updatedHistory));
               }
               setCurrentSessionQuery(query);
               const refreshedHistory = await getSearchHistory();
               setSearchHistory(refreshedHistory);
          } else {
               setCurrentSessionQuery(null);
          }
     };

     const handleClearHistory = async () => {
          await AsyncStorage.removeItem('history');
          setSearchHistory([]);
     };

     const handleRemoveHistoryItem = async (item: string) => {
          const updatedHistory = searchHistory.filter(historyItem => historyItem !== item);
          setSearchHistory(updatedHistory);
          await AsyncStorage.setItem('history', JSON.stringify(updatedHistory));
     };

     const handleClearSearch = () => {
          setSearchQuery('');
          setCurrentSessionQuery(null);
     };

     return (
          <SafeAreaView
               style={{flex: 1, backgroundColor: '#FFFFFF'}}
               edges={['top', 'left', 'right']}>
               <ScrollView flex={1} bg="#fff" p={4}>
                    <SearchHeader
                         searchQuery={searchQuery}
                         setSearchQuery={handleSearch}
                         onClearSearch={handleClearSearch}
                    />
                    <SearchHistory
                         history={searchHistory}
                         onClear={handleClearHistory}
                         onRemoveItem={handleRemoveHistoryItem}
                    />

                    <VStack mt={6}>
                         <Animated.View style={[animationStyle]}>
                              {loadingCategories ? (
                                   <HStack flexWrap="wrap" justifyContent="space-between">
                                        {[...Array(4)].map((_, index) => (
                                             <Skeleton
                                                  key={index}
                                                  h="100px"
                                                  w="45%"
                                                  m={2}
                                                  borderRadius="12"
                                                  startColor="gray.300"
                                                  endColor="gray.100"
                                             />
                                        ))}
                                   </HStack>
                              ) : categoryError ? (
                                   <Center>
                                        <Text color="red.500">Failed to load categories.</Text>
                                   </Center>
                              ) : searchQuery && filteredCategories.length > 0 ? (
                                   <>
                                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                                             Matching Categories
                                        </Text>
                                        <Box
                                             display={'flex'}
                                             flexDirection={'row'}
                                             alignItems={'flex-start'}
                                             justifyContent={'flex-start'}
                                             flexWrap={'wrap'}>
                                             {filteredCategories.map((category, index) => (
                                                  <CategoryCard
                                                       key={index}
                                                       category={{
                                                            name: category,
                                                            bgColor: categoryColors[
                                                                 index % categoryColors.length
                                                            ]?.color,
                                                            border: categoryColors[
                                                                 index % categoryColors.length
                                                            ]?.border,
                                                       }}
                                                  />
                                             ))}
                                        </Box>
                                   </>
                              ) : (
                                   <Box
                                        display={'flex'}
                                        flexDirection={'row'}
                                        alignItems={'flex-start'}
                                        justifyContent={'flex-start'}
                                        flexWrap={'wrap'}>
                                        {categories.map((category, index) => (
                                             <CategoryCard
                                                  key={index}
                                                  category={{
                                                       name: category,
                                                       bgColor: categoryColors[
                                                            index % categoryColors.length
                                                       ]?.color,
                                                       border: categoryColors[
                                                            index % categoryColors.length
                                                       ]?.border,
                                                  }}
                                             />
                                        ))}
                                   </Box>
                              )}
                         </Animated.View>

                         <Animated.View style={[animationStyle]}>
                              {loadingProducts ? (
                                   <HStack flexWrap="wrap" justifyContent="space-between">
                                        {[...Array(4)].map((_, index) => (
                                             <Box key={index} w="45%" m={2}>
                                                  <Skeleton
                                                       h="150px"
                                                       borderRadius="8"
                                                       startColor="gray.300"
                                                       endColor="gray.100"
                                                  />
                                                  <VStack mt={2} space={2}>
                                                       <Skeleton
                                                            h="10px"
                                                            w="70%"
                                                            startColor="gray.300"
                                                            endColor="gray.100"
                                                       />
                                                       <Skeleton
                                                            h="10px"
                                                            w="50%"
                                                            startColor="gray.300"
                                                            endColor="gray.100"
                                                       />
                                                  </VStack>
                                             </Box>
                                        ))}
                                   </HStack>
                              ) : productError ? (
                                   <Center>
                                        <Text color="red.500">Failed to load products.</Text>
                                   </Center>
                              ) : searchQuery && filteredProducts.length > 0 ? (
                                   <>
                                        <Text fontSize="lg" fontWeight="bold" mt={4} mb={2}>
                                             Matching Products
                                        </Text>
                                        <Box
                                             display={'flex'}
                                             flexDirection={'row'}
                                             alignItems={'flex-start'}
                                             justifyContent={'flex-start'}
                                             flexWrap={'wrap'}>
                                             {filteredProducts.map((product, index) => (
                                                  <ProductCard
                                                       key={index}
                                                       product={{
                                                            name: product.title,
                                                            location: 'Sample Location',
                                                            price: product.price,
                                                            image: product.image,
                                                       }}
                                                  />
                                             ))}
                                        </Box>
                                   </>
                              ) : (
                                   <Box
                                        display={'flex'}
                                        flexDirection={'row'}
                                        alignItems={'flex-start'}
                                        justifyContent={'flex-start'}
                                        flexWrap={'wrap'}>
                                        {products.map((product, index) => (
                                             <ProductCard
                                                  key={index}
                                                  product={{
                                                       name: product.title,
                                                       location: 'Sample Location',
                                                       price: product.price,
                                                       image: product.image,
                                                  }}
                                             />
                                        ))}
                                   </Box>
                              )}
                         </Animated.View>
                    </VStack>
               </ScrollView>
          </SafeAreaView>
     );
};

export default SearchScreen;
