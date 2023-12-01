import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Title from "../../shared/Title";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaTrash, FaUpload } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import Swal from "sweetalert2";


const ManageProduct = () => {

    const {userr} = useContext(AuthContext);
    // console.log(userr?.email);
    const id = userr?.email;
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const {data:shop=[],refetch} = useQuery({
    queryKey:[id],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/products/${userr?.email}`);
        // console.log(res.data);
        return res.data;
    }
   })
  //  console.log("shop",shop.length)
   const handleAdd =()=>{
    navigate('/dashboard/addProduct');
   }
   const handleUpdate =(id)=>{
    navigate(`/dashboard/updateProduct/${id}`)
   }
   const handleDelete = id =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        
       axiosPublic.delete(`/products/delete/${id}`)
       .then(res=>{
          // console.log(id)
          if(res.data.deletedCount>0)
          {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch();
          }
       })
       .catch(error=>console.log(error));
        
       
        
      }
    });
      

  }
    return (
        <div className="w-full px-5 mx-auto mt-14">
        
<form>
    <div className="flex">
       
       
    
  
        
        {
            shop.length==0
            ?  <div className="relative mt-40 w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={`Total ${shop.length} Product Added`}/>
            <button onClick={handleAdd} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 -ms-14 dark:focus:ring-blue-800">
                Add a product
                <span className="sr-only">Add a product</span>
            </button>
        </div>
            :
            <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={`Total ${shop.length} Product Added`} required/>
            <button onClick={handleAdd} type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 -ms-14 dark:focus:ring-blue-800">
                Add a product
                <span className="sr-only">Add a product</span>
            </button>
        </div>
        }
        
    </div>
</form>

        <div className=" mt-8">
            {
                shop.length==0? <p></p>:<div> <p className="p-2 px-4 text-black font-bold text-2xl uppercase">Total Products: {shop.length}</p><div className=" rounded-tl-2xl rounded-tr-2xl  border-2 border-blue-800 overflow-x-auto w-full mt-5 flex justify-start items-center">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="bg-blue-800 text-white ">
                      <th className="rounded-tl-2xl ">
                        Item no.
                      </th>
                      <th className="">Image</th>
                      <th className="">Name</th>
                      <th className="">Quantity</th>
                      <th className="">Sale Count</th>
                      
                      <th className="">Update</th>
                      <th className="rounded-tr-2xl">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {shop.map((item,index)=><tr key={item._id} >
                      <th>
                        {index+1}
                        
              
                      </th>
                      <td><img src={item.productImage} className="w-16 h-16" alt="" /></td>
                      
                      <td>{item.ProductName}</td>
                      <td>{item.productQuantity}</td>
                      <td>{item.saleCount}</td>
                      
                      <td><button onClick={()=>handleUpdate(item._id)}  className="btn bg-yellow-800"><FaUpload className="text-white text-xl"></FaUpload> </button></td>
                      <th>
                        <button onClick={()=>handleDelete(item._id)} className="btn bg-red-800"><FaTrash className="text-white"></FaTrash></button>
                      </th>
                    </tr>)}
                    
                    
                    
                  </tbody>
                  {/* foot */}
                
                </table>
              </div></div>
            }
            
          
            
            
        </div>
        
        
        

        </div>
    );
};

export default ManageProduct;