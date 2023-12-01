import { Outlet } from "react-router-dom";
import Navbar from "../pages/home/Navbar";
import Footer from "../pages/home/footer/Footer";
import { motion } from "framer-motion"
import Title from "../shared/Title";

const Main = () => {
    return (
        <div>


            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;