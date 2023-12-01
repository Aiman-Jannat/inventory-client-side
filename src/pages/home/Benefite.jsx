import { motion } from "framer-motion";
import { FaArrowRight, FaBuilding, FaCartArrowDown, FaCloud, FaCommentsDollar, FaDumbbell, FaFaceFrownOpen, FaLocationCrosshairs, FaMarker, FaMobileScreen} from "react-icons/fa6";

const Benefite = () => {
    return (
        <div className="w-9/11 mb-8 mx-auto grid grid-cols-2 p-5 lg:grid-cols-4 gap-5 bg-orange-50">
            <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="justify-center text-center items-center w-fit p-3"
    >
            <div className="justify-center hover:cursor-pointer  text-center items-center  w-fit p-3">
                <FaCartArrowDown className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaCartArrowDown>
                <p className="font-bold">Purchase Accurately</p>
                <p>Higher inventory turnover, lowerbr
                    <br /> operating cost</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            </motion.div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaMobileScreen className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaMobileScreen>
                <p className="font-bold">Mobile billing

</p>
                <p>Beautiful front end for complex backend operations & analytics

</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaCloud className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaCloud>
                <p className="font-bold">Cloud POS

</p>
                <p>Higher inventory turnover, lowerbr
                    <br /> operating cost</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaLocationCrosshairs className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaLocationCrosshairs>
                <p className="font-bold">Get Omnichannel ready

</p>
                <p>Set-up your online store app and delivery management app effortlessly

</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaBuilding className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaBuilding>
                <p className="font-bold">Digital ready

</p>
                <p>Payment, Loyalty, Bio-metric, Accounts

</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaMarker className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaMarker>
                <p className="font-bold">Compete efficiency

</p>
                <p>It will give you complete effeciency to manage order or other activity and 
                    you can use this very easily.
                </p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaDumbbell className="text-center text-blue-800 flex justify-center w-12 h-12 mx-auto"></FaDumbbell>
                <p className="font-bold">Efficient Inventory
</p>
                <p>Standard, Assembly, Reorder, Repacking, Kit, Home delivery

</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
            <div className="justify-center text-center items-center  w-fit p-3">
                <FaCommentsDollar className="text-blue-800 text-center flex justify-center w-12 h-12 mx-auto"></FaCommentsDollar>
                <p className="font-bold">Protect your margin</p>
                <p>Fix margins based on Supplier or Product/Landing cost calculation

</p>
                <p className="text-red-600 font-bold flex items-center justify-center gap-2 text-center">Show More <FaArrowRight className="text-red-600 flex "></FaArrowRight></p>

            </div>
        </div>
    );
};

export default Benefite;