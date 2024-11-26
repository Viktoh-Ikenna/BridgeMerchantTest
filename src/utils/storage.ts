import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveSearchHistory = async (query: string) => {
     const history = JSON.parse((await AsyncStorage.getItem('history')) || '[]');
     const newHistory = [query, ...history];
     await AsyncStorage.setItem('history', JSON.stringify(newHistory));
};

export const getSearchHistory = async () => {
     return JSON.parse((await AsyncStorage.getItem('history')) || '[]');
};
