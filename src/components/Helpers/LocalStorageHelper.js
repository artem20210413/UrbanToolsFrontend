// Функция для установки значения с сроком годности в localStorage
export function setItemWithExpiry(key, value, ttlInMinutes) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttlInMinutes * 60000 // Преобразуем минуты в миллисекунды
    };

    localStorage.setItem(key, JSON.stringify(item));
}

// Function to get value from localStorage with expiration check
export function getItemWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        // If the expiration date is expired, remove the entry and return null
        localStorage.removeItem(key);
        return null;
    }
    return item.value;
}

