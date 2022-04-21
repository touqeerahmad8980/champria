import React from "react";
import { Routes , Route } from 'react-router-dom'
import Home from "../pages/home/Home";

const PagesRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default PagesRoute;