import {Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Home from "./Home/Home";
import Cases from "./Caces/Cases";
import Map from "./Maps/Map";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import CaseInfo from "./CaseInfo/CaseInfo";
import Scales from "./Scales/Scales";
import Cities from "./Cities/Cities";
import CityInfo from "./CityInfo/CityInfo";
import HomeAdmin from "../layouts/AdminPanel/Home/HomeAdmin";
import LoginForm from "../layouts/AdminPanel/Login/LoginForm";
import Logout from "../layouts/AdminPanel/Login/Logout";
import FormCase from "../layouts/AdminPanel/Case/FormCase";

export default function SettingRoute() {
    return (
        <Routes>
            <Route path="/"> {/* element={<Outlet/>}*/}
                {/*<Route index element={<Home/>}/>*/}
                <Route path="/" element={<Navigate to="/home"/>}/>
                {/*<Route path="cases" element={<Cases/>}/>*/}
                <Route path="home" element={<Home/>}/>
                {/*<Route path="cases" element={<Navigate to="/cases/scales"/>}/>*/}
                <Route path="cases">
                    <Route index element={<Scales/>}/>
                    <Route path="cities" element={<Cities/>}/>
                    <Route path="scales" element={<Scales/>}/>
                    <Route path=":id" element={<CaseInfo/>}/>
                </Route>
                <Route path="map" element={<Map/>}/>
                <Route path="map/city/:id" element={<CityInfo/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="search/:search" element={<Search/>}/>
                <Route path="*" element={<NoMatch/>}/>


                <Route path="administrator">
                    <Route index element={<HomeAdmin/>}/>
                    <Route path="case" element={<FormCase/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="logout" element={<Logout/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>404</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}