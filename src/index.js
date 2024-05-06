import ReactDOM from "react-dom/client"
import React from "react"
import {pizzaData} from "./data";


const App = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <Pizza/>
        </>
    )
}

const Pizza = () => {
    return <h2>Pizza</h2>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<React.StrictMode><App/></React.StrictMode>)
