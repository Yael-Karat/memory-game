/**
 * Saves a value to the local storage.
 *
 * This function serializes a given value and saves it in the local storage
 * under the specified key.
 *
 * @param {string} key - The key under which the value will be stored.
 * @param {*} value - The value to be stored, which will be serialized to a JSON string.
 */
export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Loads a value from the local storage.
 *
 * This function retrieves a value from the local storage by the specified key,
 * deserializes the JSON string back to its original format, and returns it.
 * If the key does not exist, it returns null.
 *
 * @param {string} key - The key under which the value is stored.
 * @return {*} - The deserialized value from the local storage, or null if the key does not exist.
 */
export const loadFromLocalStorage = (key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
};