import React from 'react';
import {FlatList, HStack, Pressable, Text, Icon} from 'native-base';
import {CancelIcon} from '../assets/icons';

type Props = {
     history: string[];
     onClear: () => void;
     onRemoveItem: (item: string) => void; // Callback to handle item removal
};

const SearchHistory: React.FC<Props> = ({history, onClear, onRemoveItem}) => {
     return (
          <>
               <HStack justifyContent="space-between" alignItems="center" mb={2} mt={2}>
                    <Text fontSize="md" fontWeight="bold">
                         Search History
                    </Text>
                    <Pressable onPress={onClear}>
                         <Text color="#FF882E70">clear</Text>
                    </Pressable>
               </HStack>
               <FlatList
                    data={history}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                         <HStack
                              px={3}
                              py={2}
                              bg="#F5F5F5"
                              borderRadius="20"
                              mr={2}
                              alignItems="center"
                              justifyContent="space-between">
                              <Text color="#0000009E" mr={2}>
                                   {item}
                              </Text>
                              <Pressable onPress={() => onRemoveItem(item)}>
                                   <Icon as={<CancelIcon width={8} />} size="1" color="#FF882E70" />
                              </Pressable>
                         </HStack>
                    )}
                    keyExtractor={(item, index) => index.toString()}
               />
          </>
     );
};

export default SearchHistory;
