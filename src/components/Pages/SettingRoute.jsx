import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from "./Home/Home";
import Caces from "./Caces/Caces";
import Map from "./Maps/Map";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";

export default function SettingRoute() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Outlet/>}>
                    <Route index element={<Home/>}/>
                    <Route path="cases" element={<Caces/>}/>
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
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}