import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../layouts/CaseMenu/CaseMenu";
import React from "react";

export default function Cases() {


    return (
        <div>

            <Header/>
            <CaseMenu/>
            <div className={'content-bottom content-body'}>
                <h1>CASES</h1>
            </div>
            <Footer/>
        </div>
    );
}
