import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import Main from "./Main";
import React from "react";

export default function Home() {


    return (
        <div>
            <Header/>
            <div className={'content'}>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}
