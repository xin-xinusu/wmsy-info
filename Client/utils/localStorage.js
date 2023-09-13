// Set new localstorage item 
export const setLocalStorageItem = (key, content) => localStorage.setItem(key, content);

// Fetch localstorage item
export const fetchLocalStorageItem = (key) => localStorage.getItem(key);

// remove localstorage item 
export const removeLocalStorageItem = (key) => localStorage.setItem(key);

// Clear entire localstorage
export const clearLocalStorage = () => localStorage.setItem();
