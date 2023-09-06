import React, {useState, useEffect} from 'react';
import axios from "axios";
import "../../../layouts/AdminPanel/Layout";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";
import {GET_CASE, GET_CITIES} from "../../../../config/api";

export default function CityList() {

    const [cities, setCities] = useState([]);


    useEffect(() => {
        getCities();
    }, []);


    async function getCities() {
        try {
            const response = await axios.get(`${GET_CITIES}`);
            console.log('API get case response:', response.data);
            setCities(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    function onEditClick(caseItem = null) {
        console.log(caseItem);
        if (caseItem !== null) {
            window.location.href = `/administrator/city/ ${caseItem.id}`;
        } else {
            window.location.href = `/administrator/city/create`;
        }


        // window.location.href = `/administrator/case/` + caseItem !== null ? caseItem.id : `create`;

    }


    return (
        <div>
            <AdminHeader/>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <h1>List Cases</h1>
                    </div>
                    <div className="col text-end">
                        <button
                            onClick={() => onEditClick()}
                            className="btn btn-primary mt-3 align-self-center"
                        >
                            Create
                        </button>
                    </div>
                </div>


                <div className="row">
                    {cities.map((caseItem) => (
                        <div key={caseItem.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="card" style={{height: '100%'}}>
                                <img
                                    src={caseItem.image_main_path}
                                    alt={caseItem.name}
                                    className="card-img-top"
                                    style={{maxHeight: '200px'}}
                                />
                                <div className="card-body d-flex flex-column justify-content-center">
                                    <h5 className="card-title text-center">{caseItem.name}</h5>
                                    <button
                                        onClick={() => onEditClick(caseItem)}
                                        className="btn btn-primary mt-3 align-self-center"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
