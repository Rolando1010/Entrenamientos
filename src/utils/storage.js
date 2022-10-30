import AsyncStorage from "@react-native-async-storage/async-storage";

const get = (key) => new Promise(resolve => AsyncStorage.getItem(key).then(data => {
    resolve(JSON.parse(data));
}));

const set = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

const deleteKey = AsyncStorage.removeItem;

const { getAllKeys } = AsyncStorage;

const getMany = (keys) => new Promise(resolve => {
    AsyncStorage.multiGet(keys).then(data => {
        resolve(data.reduce((acc, [key, value]) => {
            acc[key] = JSON.parse(value);
            return acc;
        }, {}));
    });
});

const getAll = () => new Promise(resolve => {
    getAllKeys().then(keys => {
        getMany(keys).then(resolve);
    });
});

const storage = {
    get,
    set,
    delete: deleteKey,
    getAllKeys,
    getMany,
    getAll
};

export default storage;