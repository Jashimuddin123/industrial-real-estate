// import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";


import Navbar from "../SharedPages/Navbar/Navbar";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto min-h-screen">
     
            <Navbar></Navbar>

            <Outlet></Outlet>
           

        </div>
    );
};

export default Root;