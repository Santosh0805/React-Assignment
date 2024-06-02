import { Routes,Route } from "react-router-dom";

import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetailsPages from "../Pages/Product Details Page";


export default function AllRoutes (){
    return (
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path = "/Product details pages" element ={<ProductDetailsPages/>} />
        </Routes >
    )
}