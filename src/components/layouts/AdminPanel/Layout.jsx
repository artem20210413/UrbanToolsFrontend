import '../../../styles/Bootstrap.5.3.1.min.css';


import {getItemWithExpiry} from '../../Helpers/LocalStorageHelper'

function isAuthenticated() {
    const token = getItemWithExpiry('token');
    // const token = localStorage.getItem('token');

    return !!token; // Вернет true, если токен существует, иначе false
}

console.log(isAuthenticated())

const currentPath = window.location.pathname;
const loginPath = '/administrator/login';
const homePath = '/administrator';

if (!isAuthenticated() && currentPath !== loginPath) {
    window.location.href = loginPath;
}

if (isAuthenticated() && currentPath === loginPath) {

    window.location.href = homePath;
}
