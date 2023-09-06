import '../../../styles/Bootstrap.5.3.1.min.css';


import {getItemWithExpiry} from '../../Helpers/LocalStorageHelper';


function isAuthenticated() {
    const token = getItemWithExpiry('token');

    return !!token; // Returns true if the token exists, otherwise false
}

console.log('isAuthenticated:' , isAuthenticated())

const currentPath = window.location.pathname;
const loginPath = '/administrator/login';
const homePath = '/administrator';
const isAdminPanel = currentPath.includes("administrator");


if (isAdminPanel && !isAuthenticated() && currentPath !== loginPath) {
    window.location.href = loginPath;
}

if (isAdminPanel && isAuthenticated() && currentPath === loginPath) {

    window.location.href = homePath;
}
