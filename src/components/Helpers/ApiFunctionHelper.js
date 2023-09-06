// Функция для установки значения с сроком годности в localStorage
import axios from "axios";
import {SEARCH_CASE_BY_CITY, SEARCH_CITY_BY_ID} from "../../config/api";

export async function GET_CITY_BY_ID(cityId) {
    if (!cityId) {
        return;
    }
    try {
        const response = await axios.get(`${SEARCH_CITY_BY_ID}${cityId}`);
        console.log('API SEARCH_CITY_BY_ID response:', response.data);
        return response.data.data
    } catch (error) {
        console.error('API SEARCH_CITY_BY_ID error:', error);
    }
}

