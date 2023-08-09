// import React, {useState} from "react";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Content from "./components/Content";

/** CSS */
import './styles/App.css';

// import './Fonts.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <Footer/>
            {/*<Counter/>*/}
            {/*<Render/>*/}
        </div>
    );
}

export default App;
