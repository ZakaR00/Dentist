import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  get: async (name, defaultValue = null) => {
    return JSON.parse(await AsyncStorage.getItem(name)) || defaultValue;
  },
  set: async (name, value) => {
    return AsyncStorage.setItem(name, JSON.stringify(value));
  },
  remove: async name => {
    return await AsyncStorage.removeItem(name);
  },
};
