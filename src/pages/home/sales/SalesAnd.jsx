import { GrStatusGood } from "react-icons/gr";


const SalesAnd = () => {
    return (
        <div>
             <div className="hero bg-blue-50 py-10">
<div className="hero-content  flex-col lg:flex-row-reverse">
<img src="https://image.slidesharecdn.com/inventorycontrol-220203112901/85/inventory-control-9-320.jpg?cb=1668177910" className="w-1/2 rounded-lg shadow-2xl" />
<div className="ms-5">
  <h1 className="text-5xl font-bold text-blue-900">Sales & Purchase</h1>
  <p className="mt-3">Manage sales and purchase orders, create invoices, and E-way bills from a single order management system.</p>
  <div className="grid grid-cols-2  gap-2 my-4">
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Order Confirmation  </p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Purchase Order</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Register</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Sales Order </p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Sales Order </p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Credit/Debit Note</p>
    </div>
    <div className="flex gap-2 justify-start items-center">
        <GrStatusGood className=" text-white w-6 h-6 rounded-full bg-orange-900"></GrStatusGood>
        <p>Service Transactions </p>
    </div>
  </div>
  <button className="btn border-0 bg-orange-600 rounded-none text-white hover:bg-blue-700 mt-5">Show More</button>
</div>
</div>
</div>
        </div>
    );
};

export default SalesAnd;
