// import Home from "../Pages/Home/Home";
import { Outlet } from "react-router-dom";

import Header from "../SharedPages/Header/Header";
import Navbar from "../SharedPages/Navbar/Navbar";


const Root = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Navbar></Navbar>

            <Outlet></Outlet>
           

        </div>
    );
};

export default Root;