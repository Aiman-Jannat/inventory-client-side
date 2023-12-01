import { GrStatusGood } from "react-icons/gr";

const AboutUs2 = () => {
    return (
        <div>
        <div className="hero bg-orange-50 ">
<div className="hero-content  flex-col lg:flex-row">
<img src="https://www.waoconnect.com/wp-content/uploads/2020/07/Inventory-Management-System-Pic.jpg" className="w-1/2 rounded-lg shadow-2xl" />
<div className="ms-5">
  <h1 className="text-5xl font-bold text-blue-900">Inventory Management</h1>
  <p className="mt-3">Our Inventory Management Software is designed to streamline your processes and increase profits.</p>
  <div className="grid grid-cols-2  gap-2 my-4">
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Min/Max Stock Levels</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Multiple Stores</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Inventory Valuation</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Negative Stock Restriction</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Auto Stock Adjustment</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Physical Stock Reconciliation</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-green-900"></GrStatusGood>
        <p>Inventory Rejected/Dead Stock</p>
    </div>
  </div>
  <button className="btn border-0 mt-4 bg-orange-600 rounded-none text-white hover:bg-blue-700">Show More</button>
</div>
</div>
</div>
    </div>
    );
};

export default AboutUs2;
