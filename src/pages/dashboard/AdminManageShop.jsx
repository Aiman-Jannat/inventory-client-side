import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaMessage, FaVoicemail } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
const AdminManageShop = () => {

    const [shop, setShop] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get('/shop')
    .then(res=>setShop(res.data));
    return (
        <div>
             <div className="  mt-8">
            {
                shop.length==0? <p></p>:
                <div> <p className="p-2 px-4 text-black ms-36 font-bold text-2xl uppercase">Total Shop: {shop.length}</p><div className="w-5/6 mx-auto rounded-tl-2xl rounded-tr-2xl  border-2 border-blue-800 overflow-x-auto  mt-5 flex justify-start items-center">
                <table className="table ">
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
                      
                      <th className="rounded-tr-2xl">Sent Email</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {shop.map((item,index)=><tr key={item._id} >
                      <th>
                        {index+1}
                        
              
                      </th>
                      <td><img src={item.shoplogo} className="w-16 h-16" alt="" /></td>
                      
                      <td>{item.
shopName}</td>
                      <td>{item.productLimit}</td>
                      <td>{item.description}</td>
                      
                      <td><button  className="btn bg-white border-none  "><MdOutlineMailOutline  className="text-orange-500 text-4xl"></MdOutlineMailOutline > </button></td>
                      
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

export default AdminManageShop;