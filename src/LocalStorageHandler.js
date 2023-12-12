// storageModule.js
//const STORAGE_KEY = 'objectStateArray';

export function LS_save(object, key) {
    localStorage.setItem(key, JSON.stringify(object));
}

export function LS_load(key) {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : [];
}