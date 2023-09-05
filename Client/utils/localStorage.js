// Set new localstorage item 
export const setLocalStorageItem = (key, content) => localStorage.setItem(key, content);

// Fetch localstorage item
export const fetchLocalStorageItem = (key) => localStorage.getItem(key);

// remove localstorage item 
export const removeLocalStorageItem = (key, content) => localStorage.setItem(key, content);

// Clear entire localstorage
export const clearLocalStorage = (key, content) => localStorage.setItem(key, content);
