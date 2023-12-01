import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";



const CreateStore = () => {
    
    const {userr} = useContext(AuthContext);
    const [user] = useUser();
    // console.log("user",user);
    const navigate = useNavigate();
    const axiosPublic  = useAxiosPublic();
    const handleSubmit= e =>{
        e.preventDefault();
        const form = e.target;
        const shopName = form.shopName.value;
        const shoplogo = form.shopLogo.value;
        const webUrl = form.webUrl.value;
        const description = form.description.value;
        const productLimit = 3;
        const createShop = {
            shopName,shoplogo,webUrl,description,
            ownerName:userr.displayName,
            ownerEmail:userr.email,
            productLimit
        }
        // console.log("create Shop:",createShop);
        axiosPublic.post('/shop',createShop)
        .then(res=>{
            if(res.data)
            {
                
                // console.log(createShop)
                axiosPublic.patch(`/users/manager/${user._id}`)
                .then(res=>{
                    if(res.data)
                    {
                        toast('Congratulation!! your shop has been created.Successfully');
                        navigate('/dashboard');
                    }
                })
            }
        })
        
    }


    return (
        <div className="" >
         <div className="w-9/11   p-10 lg:px-48">
        <p className="text-4xl text-white text-center font-extrabold mt-3 bg-blue-800 py-3">Create Store</p>
         <form onSubmit={handleSubmit} className="bg-sky-100 px-8 pb-10">
         
         <div className="grid w-full  text-black grid-cols-1 lg:grid-cols-2 gap-3">
         <div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop Name<span className="text-red-500">*</span></span>
</label>
<label className=" rounded-none">
 
 <input type="text" name="shopName" placeholder="Shop Name" className=" w-full input rounded-none" required/>
</label>
</div>

<div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop's Logo<span className="text-red-500">*</span></span>
</label>
<label className="rounded-none">
 
 <input type="text" name="shopLogo" placeholder="Shop's Logo" className="w-full input rounded-none" required/>
</label>
</div>
<div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop Location<span className="text-red-500">*</span></span> 
</label>
<label className="rounded-none">
<input name="location" className="px-2 py-3 rounded-none w-full " placeholder="Shop's location" required/>

 </label>
</div>
<div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Website URL (if applicable)</span> 
</label>
<label className="rounded-none">
<input name="webUrl" className="px-2 py-3 rounded-none w-full " placeholder="Shop's website URL" />

 </label>
</div>



         

         
         <div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop-Owner's name</span>
</label>
<label className="rounded-none">
 
 <input readOnly type="text" name="quantity" placeholder={userr?.displayName} className="w-full input rounded-none" />
</label>
</div>

<div className="form-control w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop-Owner Email</span>
</label>
<label className="rounded-none">
 
 <input readOnly type="text" name="rating" placeholder={userr?.email} className=" w-full input rounded-none" />
</label>
{/* <Product></Product> */}
</div>






         
         <div className="form-control lg:col-span-2 w-full">
<label className="label">
 <span className="label-text text-black font-bold">Shop Description<span className="text-red-500">*</span></span>
</label>
<label className="rounded-none">
 
 <textarea  name="description" placeholder="shop description" className="w-full input rounded-none h-28" required />
</label>
</div>
<div className="form-control lg:col-span-2  w-full ">

<label className="rounded none ">
 
 <input type="submit" placeholder="submit" value="Create Store" className=" text-black hover:cursor-pointer font-bold w-full input input-bordered rounded-none border-2 border-blue-800" />
</label>
</div>
</div>
         </form>





         </div> <ToastContainer></ToastContainer>
         
     </div>
    );
};

export default CreateStore;