import ReactDOM from "react-dom/client";
import React from "react";
import {pizzaData} from "./data";
import {Header} from "./Header";
import {Footer} from "./Footer";


const App = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Footer/>
        </>
    );
}

const Pizza = () => {
    return <h2>Pizza</h2>;
}

const Menu = () => {
    return (
        <>
            <h2>Our Menu</h2>
            <Pizza/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App/></React.StrictMode>)
