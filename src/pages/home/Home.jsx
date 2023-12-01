import Title from "../../shared/Title";
import Banner from "./banner/Banner";
import { motion } from "framer-motion"
import AboutUs from "../home/AboutUs"
import AboutUs2 from "./AboutUs2";
import SalesAnd from "./sales/SalesAnd";
import Benefite from "./Benefite";
const Home = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    return (
        <div>
            <Banner></Banner>
            <motion.div
                animate={{ x: 100 }}
                transition={{ ease: "fadeOut", duration: 0.6 }}

            >
                <Title mainTitle={"Our Mission"} subTitle={"Wanna know more?"}></Title>
            </motion.div>

            <AboutUs></AboutUs>
            <motion.div
                
                
                exit={{ opacity: 0 }}
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Title mainTitle={"Explore Our System"} subTitle={"create and track documents and streamline production"}></Title>
            </motion.div>
            <AboutUs2></AboutUs2>
            <motion.div
                
                
                exit={{ opacity: 0 }}
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Title mainTitle={"Sales & Purchase"} subTitle={"Manage sales and purchase orders"}></Title>
            </motion.div>
            <SalesAnd></SalesAnd>
            <motion.div
                
                
                exit={{ opacity: 0 }}
                initial="hidden"
                animate="visible"
                variants={variants}
            >
                <Title mainTitle={"Benefits of Using our Store"} subTitle={"Create and track documents and streamline production"}></Title>
            </motion.div>
            <Benefite></Benefite>
            




        </div>
    );
};

export default Home;