import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import React from "react";

export default function Cities() {


    return (
        <div>

            <Header/>
            <CaseMenu/>
            <div className={'content-bottom content-body'}>
                <h1>Cities</h1>
            </div>
            <Footer/>
        </div>
    );
}
