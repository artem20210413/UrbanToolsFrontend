import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import React from "react";

export default function Clusters() {


    return (
        <div>

            <Header/>
            <CaseMenu/>
            <div className={'content-bottom content-body'}>
                <h1>Clusters</h1>
            </div>
            <Footer/>
        </div>
    );
}
