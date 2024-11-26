import React from 'react';
import {HStack, Input, Icon, Box, Pressable} from 'native-base';
import {CancelIcon, SearchFilterIcon, SearchIcon2} from '../assets/icons';

const SearchHeader: React.FC<{
     searchQuery: string;
     setSearchQuery: (query: string) => void;
     onClearSearch: () => void;
}> = ({searchQuery, setSearchQuery, onClearSearch}) => {
     return (
          <HStack
               alignItems="center"
               justifyContent="space-between"
               bg="#FFFFFF"
               pb={2}
               borderRadius="10">
               {/* Search Input */}
               <Box flex={1} mr={3}>
                    <Input
                         variant="unstyled"
                         placeholder="Rice"
                         value={searchQuery}
                         onChangeText={setSearchQuery}
                         InputLeftElement={
                              <Icon as={<SearchIcon2 />} size="5" color="#E6A869" ml={4} />
                         }
                         InputRightElement={
                              searchQuery ? (
                                   <Pressable onPress={onClearSearch} mr="2">
                                        <CancelIcon  />
                                   </Pressable>
                              ) : (
                                   <></>
                              )
                         }
                         fontSize="16"
                         color="#E6A869"
                         borderRadius="8"
                         bg="#FAFAFA"
                         outlineColor={'#EFEFEF'}
                         focusOutlineColor={'#EFEFEF'}
                         borderWidth={1}
                         borderColor={'#EFEFEF'}
                         py={4}
                         pl={2}
                         placeholderTextColor={'#E6A869'}
                    />
               </Box>

               {/* Filter Button */}
               <Pressable
                    bg="#FFFFFF"
                    borderRadius="12"
                    p="3"
                    shadow="1"
                    justifyContent="center"
                    alignItems="center"
                    _pressed={{
                         bg: '#E6E6E6',
                    }}>
                    <SearchFilterIcon width={20} height={20} fill="#6FAF4A" />
               </Pressable>
          </HStack>
     );
};

export default SearchHeader;
