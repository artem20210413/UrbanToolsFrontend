import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {useParams} from 'react-router-dom';

export default function Search() {
    const {search} = useParams();

    return (
        <div>

            <Header/>
            <h1>Search</h1>
            <h1>Search</h1>
            <h1>Search</h1>
            <h1>Search</h1>
            <h1>Search</h1>
            <h1>Search</h1>
            <h1>{search}</h1>
            <Footer/>
        </div>
    );
}