import { useNavigate } from "react-router-dom";
import Title from "../../shared/Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import useCheck from "../../hooks/useCheck";
import CheckOut from "./CheckOut";
import useUpdateCheck from "../../hooks/useUpdateCheck";


const SalesCollection = () => {

  const [check,refetch] = useCheck(0);
  const { userr } = useContext(AuthContext);
  // console.log(userr?.email);
  const id = userr?.email;
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const [shop, setShop] = useState([]);
  const { data } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${userr?.email}`);
      // console.log("dk",res.data)
      setShop(res.data)
      return res.data;
    }
  })


  const handleSearch = (e) => {
    e.preventDefault();
    const id = e.target.searchId.value;

    // console.log(id)
    axiosPublic.get(`/products/get/specific/${id}`)
      .then(res => {
        const value = res.data;
        const data = [
          {
            _id: value._id, ProductName: value.ProductName, discount: value.discount, productionCost: value.productionCost, productLocation: value.productLocation,
            productQuantity: value.productQuantity,
            productImage: value.productImage,
            productSellingPrice: value.productSellingPrice



          }
        ]
        setShop(data);
      })
  }

  const handleCheck = (item) => {
    // console.log(item)
    
    const data = {
      ProductName: item.ProductName,
      discount: item.discount,
      productionCost: item.productionCost,
      productLocation: item.productLocation,
      productQuantity: item.productQuantity,
      profitMargin: item.profitMargin,
      productImage: item.productImage,
      productSellingPrice: item.productSellingPrice,
      saleCount: item.saleCount,
      productId:item._id


    }

    axiosPublic.post('/check',data)
    .then(res=>{
      if(res.data){
        refetch();
        // console.log(res.data)
        toast("you add this product to your check list.")
      }
    })
    
    
    



  }


  const hanldeChecOut=()=>{
    navigate('/dashboard/checkOut');
  }


  return (
    <div className="w-full px-5 mx-auto mt-14">

      <form>
        <div className="flex">

        </div>
      </form>

      <div className=" mt-8">

        <div className="relative w-full">
          <form onSubmit={handleSearch}>
            <input name="searchId" type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder={`Serach product by id`} required />
            <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 -ms-14 dark:focus:ring-blue-800">
              Search
              <span className="sr-only"></span>
            </button>
          </form>
        </div>
        <button onClick={hanldeChecOut} className="p-3 mx-auto bg-red-500 mt-4 text-white flex justify-center">Check Out({check.length})</button>
        {
          shop.length == 0 ? <><img src="https://islamimart.com/media/products/noproduct.png" alt="" /></>
            :
            <div>

              <div className=" rounded-tl-2xl rounded-tr-2xl  border-2 border-blue-800 overflow-x-auto w-full mt-5 flex justify-start items-center">

                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="bg-blue-800 text-white ">
                      <th className="rounded-tl-2xl ">
                        Item no.
                      </th>
                      <th className="">Id</th>
                      <th className="">Image</th>
                      <th className="">Name</th>
                      <th className="">Quantity</th>
                      <th className="">Discount</th>
                      <th className="">Selling Price</th>
                      <th className="">Check out</th>


                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {shop.map((item, index) =><><tr key={item._id} >
                      <th>
                        {index + 1}


                      </th>
                      <td>{item._id}</td>
                      <td><img src={item.productImage} className="w-16 h-16" alt="" /></td>

                      <td>{item.ProductName}</td>
                      <td>{item.productQuantity}</td>
                      <td>{item.discount}</td>
                      <td>{item.productSellingPrice}tk</td>
                      <td><button onClick={() => handleCheck(item)} className="bg-yellow-700 font-semiBold text-white  p-4">Check Out</button></td>


                    </tr>
                    </> )}



                  </tbody>
                  {/* foot */}

                </table>
              </div>
            </div>
        }




      </div>




    </div>
  );
};

export default SalesCollection;