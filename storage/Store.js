import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key, data) {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        return error;
    }
}

export async function getData(key) {
    console.log(key);
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) return JSON.parse(value);
    } catch (error) {
        return error;
    }
}