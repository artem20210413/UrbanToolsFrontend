import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./Home/Home";
import Cases from "./Caces/Cases";
import Map from "./Maps/Map";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import CaseInfo from "./CaseInfo/CaseInfo";

export default function SettingRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cases" element={<Cases/>}/>
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