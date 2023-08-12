import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import React from "react";

export default function Cases() {


    return (
        <div>

            <Header/>
            <div className={'content'}>
                <CaseMenu/>
                <h1>CASES</h1>
            </div>
            <Footer/>
        </div>
    );
}
