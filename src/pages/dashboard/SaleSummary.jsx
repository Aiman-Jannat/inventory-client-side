import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic"


const SaleSummary = () => {
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 6;
    const [save, setSave] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/checkout')
    .then(res=>{
        setSave(res.data);
    })
  // Calculate the indexes for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = save.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
    const  totalInvest = save.reduce((total,item) => total+parseFloat(item.productionCost),0)
    const  totalSale = save.reduce((total,item) => total+parseFloat(item.saleCount),0)
    const  product = save.reduce((total,item) => total+parseFloat(item.productSellingPrice),0);
    let  banani = product-totalInvest;
    if(banani<0)
    banani = banani*(-1)

    
    return (
        <div>
            <p className="text-yellow-400 text-4xl font-bold bg-blue-800 py-6 text-center my-3">Total Sales Summary</p>
            <div className="w-9/12 mx-auto flex gap-5 items-center justify-center mt-10">
                <div  className="  bg-orange-500 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-blue-800">Total Sale: <span className="text-3xl text-white">{totalSale}</span> </p></div>
                <div  className="  bg-pink-600 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-yellow-400">Total invest: <span className="text-3xl text-white">{totalInvest}$</span> </p></div>
                <div  className="  bg-cyan-400 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-pink-500">Total Profit: <span className="text-3xl text-blue-800">{banani}$</span> </p></div>

                
                
            </div>
            <div className=" rounded-tl-2xl rounded-tr-2xl  border-2 border-blue-800 overflow-x-auto w-3/4 mx-auto mt-10 flex justify-start items-center">

<table className="table">
  {/* head */}
  <thead>
    <tr className="bg-blue-800 text-white ">
      <th className="rounded-tl-2xl ">
        Item no.
      </th>
      <th className="">Selling Date</th>
      <th className="">Name</th>
      <th className="">Profit</th>
     
      


    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    {currentItems.map((item, index) =><><tr key={item._id} >
      
      <td>
        {index + 1}


      </td>
      
     
        
      <td>{item.sellingDate}</td>
      <td>{item.ProductName}</td>
      <td>{`${parseFloat(item.productSellingPrice)-parseFloat(item.productionCost)}`}</td>
      
      


    </tr>
    </>)}



  </tbody>
  {/* foot */}

</table>
</div>
<div className="w-fit mx-auto flex mt-10">
        {Array.from({ length: Math.ceil(save.length / itemsPerPage) }).map((_, index) => (
          <button className="bg-blue-400 border-2 p-6 text-xl" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        </div>
    );
};

export default SaleSummary;