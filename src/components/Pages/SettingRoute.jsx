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

export default function SettingRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cases" element={<Navigate to="/cases/scales"/>}/>
                    {/*<Route path="cases" element={<Cases/>}/>*/}
                    <Route path="cases/cities" element={<Cities/>}/>
                    <Route path="city/:id" element={<CityInfo/>}/>
                    <Route path="cases/scales" element={<Scales/>}/>
                    <Route path="case/:id" element={<CaseInfo/>}/>
                    <Route path="map" element={<Map/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="search/:search" element={<Search/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Route>
            </Routes>
        </div>
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