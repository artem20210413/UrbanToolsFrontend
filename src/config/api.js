const PROTOCOL = 'http://';
const DOMAIN_NAME = '127.0.0.1:8000';
export const AUTHORIZATION_LIFE = 60; //MIN

export const DEFAULT_HEADERS = {
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json',
};

export function DEFAULT_HEADERS_AND_BEARER_TOKEN(bearerToken){
   return   {
        ...DEFAULT_HEADERS,
        'Authorization': `Bearer ${bearerToken}`,
    };
}
export const SEARCH_CASE = `${PROTOCOL}${DOMAIN_NAME}/api/v1/case/search/`
export const SEARCH_CASE_BY_CITY = `${PROTOCOL}${DOMAIN_NAME}/api/v1/case/city/`
export const GET_CASE = `${PROTOCOL}${DOMAIN_NAME}/api/v1/case`
export const SEARCH_CASE_BY_ID = `${PROTOCOL}${DOMAIN_NAME}/api/v1/case/`
export const GET_SCALES = `${PROTOCOL}${DOMAIN_NAME}/api/v1/cluster`
export const GET_CITIES = `${PROTOCOL}${DOMAIN_NAME}/api/v1/city`
export const SEARCH_CITY_BY_ID = `${PROTOCOL}${DOMAIN_NAME}/api/v1/city/`

/** ADMIN */
export const LOGIN = `${PROTOCOL}${DOMAIN_NAME}/api/v1/login`
export const SAVE_CASE = `${PROTOCOL}${DOMAIN_NAME}/api/v1/case`




