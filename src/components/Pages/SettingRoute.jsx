import {Routes, Route, Outlet, Link, Navigate} from "react-router-dom";
import Home from "./Home/Home";
import Map from "./Maps/Map";
import Contact from "./Contact/Contact";
import Search from "./Search/Search";
import CaseInfo from "./CaseInfo/CaseInfo";
import Scales from "./Scales/Scales";
import Cities from "./Cities/Cities";
import CityInfo from "./CityInfo/CityInfo";
import LoginForm from "./AdmitPanel/Login/LoginForm";
import Logout from "./AdmitPanel/Login/Logout";
import FormCase from "./AdmitPanel/Case/FormCase";
import FormCity from "./AdmitPanel/City/FormCity";
import CaseList from "./AdmitPanel/Case/CaseList";
import CityList from "./AdmitPanel/City/CityList";
import ChangePassword from "./AdmitPanel/ChangePassword/ChangePassword";

export default function SettingRoute() {
    return (
        <Routes>
            <Route path="/" element={<Outlet/>}> {/* element={<Outlet/>}*/}
                {/*<Route index element={<Home/>}/>*/}
                <Route path="/" element={<Navigate to="/home"/>}/>
                {/*<Route path="cases" element={<Cases/>}/>*/}
                <Route path="home" element={<Home/>}/>
                {/*<Route path="cases" element={<Navigate to="/cases/scales"/>}/>*/}
                <Route path="cases" element={<Outlet/>}>
                    <Route path="" element={<Navigate to="scales"/>}/>
                    {/*<Route index element={<Scales/>}/>*/}
                    <Route path="scales" element={<Scales/>}/>
                    <Route path="cities" element={<Cities/>}/>
                    <Route path=":id" element={<CaseInfo/>}/>
                </Route>
                <Route path="map" element={<Map/>}/>
                <Route path="map/city/:id" element={<CityInfo/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="search/:search" element={<Search/>}/>

                <Route path="administrator" element={<Outlet/>}>

                    <Route path="" element={<Navigate to="/administrator/case"/>}/>
                    {/*<Route index element={<HomeAdmin/>}/>*/}

                    <Route path="case">
                        <Route index element={<CaseList/>}/>
                        <Route path=":id" element={<FormCase/>}/>
                        <Route path="create" element={<FormCase/>}/>
                    </Route>

                    <Route path="city">
                        <Route index element={<CityList/>}/>
                        <Route path=":id" element={<FormCity/>}/>
                        <Route path="create" element={<FormCity/>}/>
                    </Route>
                    {/*<Route path="case" element={<CaseList/>}/>*/}
                    {/*<Route path="case/:id" element={<FormCase/>}/>*/}
                    {/*<Route path="case/create" element={<FormCase/>}/>*/}
                    {/*<Route path="city" element={<FormCity/>}/>*/}

                    <Route path="user">
                        {/*<Route index element={<CityList/>}/>*/}
                        {/*<Route path=":id" element={<FormCity/>}/>*/}
                        <Route path="change-password" element={<ChangePassword/>}/>
                    </Route>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="login" element={<LoginForm/>}/>
                    <Route path="logout" element={<Logout/>}/>
                </Route>


                <Route path="*" element={<NoMatch/>}/>
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