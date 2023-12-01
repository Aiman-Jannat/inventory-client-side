import { toast } from "react-toastify";
import useCheck from "../../hooks/useCheck";
import Title from "../../shared/Title";
import Off from "../../components/Off";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Pdf from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { LuAlertTriangle } from "react-icons/lu";



const CheckOut = () => {

    const [check,refetch] = useCheck();
    const axiosPublic = useAxiosPublic();
    let totalPrice = 0;
   totalPrice = check.reduce((total, item) => total + parseFloat(item.productSellingPrice), 0)

    const hanldePaid =  () =>{
        toast("you have paid for all these products");
        
        axiosPublic.delete('/check')
        .then(res=>{
            if(res.deletedCount)
            {
                refetch();
                toast("Empty checkOut");
                
            }
        })
        
        

    }

  
    
        
      
    return (
        <div >
            <div className="w-full px-5 mx-auto mt-14">



<div className=" mt-8" id="my-component">

  {/* <Title mainTitle={"Today's Sell"} subTitle={"All about today's sell"}></Title> */}
  <div className="flex flex-col items-start">

  <div className="flex items-center"><button onClick={hanldePaid} className="btn rounded-none hover:bg-blue-800 hover:cursor-pointer flex bg-orange-800 text-white">Get paid</button>
  <div className="App bg-green-800 hover:bg-blue-800 mt-5 text-white mb-5 w-fit p-3 px-5">
<PDFDownloadLink document={<Pdf totalSell={totalPrice} totalItem={check.length}></Pdf>} fileName="invoice.pdf">
  {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Invoice!')}
  
</PDFDownloadLink>
</div>
  
</div>
<div className="flex items-center"> <div className="text-yellow-800 text-3xl"><LuAlertTriangle></LuAlertTriangle></div> <p className="text-lg ms-3 text-orange-700 font-semibold">If you want to download invoice then download it first before get paid.Get paid will remove the checkout data.</p></div>
  </div>
  {
    check.length == 0 ? <><img className="flex items-center justify-center w-28 mx-auto mt-20" src="https://islamimart.com/media/products/noproduct.png" alt="" /></>
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
                


              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {check.map((item, index) =><><Off item={item}></Off><tr key={item._id} >
                
                <td>
                  {index + 1}


                </td>
                <td>{item._id}</td>
                <td><img src={item.productImage} className="w-16 h-16" alt="" /></td>

                <td>{item.ProductName}</td>
                <td>{item.productQuantity}</td>
                <td>{item.discount}</td>
                <td>{item.productSellingPrice}tk</td>
                


              </tr>
              </>)}



            </tbody>
            {/* foot */}

          </table>
        </div>
       
      </div>
  }




</div>




</div>
            
        </div>
    );
};

export default CheckOut