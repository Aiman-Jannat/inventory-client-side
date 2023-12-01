import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";


const Subsiption = () => {
    const axiosPublic = useAxiosPublic();
    const {userr} = useContext(AuthContext);
    const {data:shop=[]} = useQuery({
        queryKey:[userr],
        queryFn: async() =>{
            const res = await axiosPublic.get(`/shop/${userr?.email}`);
        //    console.log(res.data);
            return res.data;
        }
       })
    //    console.log(shop)
    const handleTen = (limit, doller) =>{

        axiosPublic.get('/users')
        .then(res=>{
            console.log("going ifelse",res);
            if(res.data[0].income){
                const income = res.data[0].income+doller;
                const data ={income}
            axiosPublic.put('/users',data)
            .then(res=>{
                console.log("if",res.data);
            })
    
            }
            else{
                const income = doller;
                const data ={income}
            axiosPublic.put('/users',data)
            .then(res=>{
                console.log("else",res.data);
            })
            }
        })

        

        // console.log("shop",shop.productLimit)
        const productLimit =parseInt(shop.productLimit)+limit+1;
                   const update = {
                    productLimit,
                    email:userr.email
                }
                    // console.log(update)
                     axiosPublic.put(`/shop`,update)
                    .then(res=>{
                        if(res.data)
                        toast(`Congratulations!! you product limit is extended to ${productLimit}.`)
                    })





    }


    return (
        <div>
            <p className="text-yellow-400 text-2xl font-bold bg-blue-800 py-6 text-center my-10">------Subscription Page---Increase your product limit</p>
            <div className="w-9/12 mx-auto flex gap-5 items-center justify-center mt-36">
                <div onClick={()=>handleTen(200,10)} className="  bg-orange-500 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-blue-800">Pay <span className="text-3xl text-white">10$</span> to increase <br />the limit to 200</p></div>
                <div  onClick={()=>handleTen(450,20)} className="  bg-pink-600 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-yellow-400">Pay <span className="text-3xl text-white">20$</span> to increase <br />the limit to 450</p></div>
                <div  onClick={()=>handleTen(1500,50)} className="  bg-cyan-400 py-5  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-pink-500">Pay <span className="text-3xl text-blue-800">50$</span> to increase <br />the limit to 1500</p></div>

                
                
            </div>
        </div>
    );
};

export default Subsiption;