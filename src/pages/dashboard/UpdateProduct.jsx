import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = () => {
    const product = useLoaderData();
    console.log("data",product)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        // console.log(data)
        const imageFile = { image: data.productImage[0] };
        // console.log(data,imageFile);
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        if (res.data.success) {
            // console.log(data)
            const sellingPrice= parseFloat(data.productionCost)+parseFloat((7.5*data.productionCost)/100)+parseFloat((data.profitMargin*data.productionCost)/100);
            const productSellingPrice = ((sellingPrice - ((sellingPrice*parseFloat(sellingPrice*data.discount)/100))),2).toFixed(2);
            const saleCount = 0;
            const updateProduct = {
                ProductName: data.ProductName,
                discount: data.discount,
                productionCost: data.productionCost,
                productLocation: data.productLocation ,
                productQuantity: data.productQuantity,
                profitMargin : data.profitMargin,
                productImage: res.data.data.display_url,
                productSellingPrice,
                saleCount,
                

            }
            
                
                axiosPublic.put(`/products/update/${product._id}`,updateProduct)
            .then(res=>{
                if(res.data)
                {
                     toast("Product updated Successfully!")
                     reset();
                }
            })
            
            

            // console.log(res.data)
        }

    }




    return (
        <div>
             <div className="   p-5 lg:px-10">
                <p className="text-4xl text-white text-center font-semibold mt-3 bg-blue-800 py-3">Update Product</p>
                <form onSubmit={handleSubmit(onSubmit)} className="bg-sky-100 px-8 pb-10">

                    <div className="grid w-full  text-black grid-cols-1 lg:grid-cols-2 gap-3">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Product Name<span className="text-red-500">*</span></span>
                            </label>
                            <label className=" rounded-none">

                                <input type="text" {...register("ProductName")} placeholder="Product Name" className=" w-full input rounded-none" required />
                            </label>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Product image<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">

                                <input required type="file" {...register("productImage")} className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Product Location<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">
                                <input name="" {...register("productLocation")} className="px-2 py-3 rounded-none w-full " placeholder="Product's location" required />

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">product's quantity<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">
                                <input required name="productQuantity" {...register("productQuantity")} className="px-2 py-3 rounded-none w-full " placeholder="product's quantity" />

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">product's Cost<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">
                                <input required name="" {...register("productionCost")} className="px-2 py-3 rounded-none w-full " placeholder="product's quantity" />

                            </label>
                        </div>
                       
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Profit Margin%<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">

                                <input placeholder="profit Margin%" required type="text" name="" {...register("profitMargin")} className="px-2 py-3 rounded-none w-full" />

                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Discount%<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">

                                <input placeholder="discount%" required type="text" name="" {...register("discount")} className="px-2 py-3 rounded-none w-full" />

                            </label>
                        </div>

                        <div className="form-control lg:col-span-2 w-full">
                            <label className="label">
                                <span className="label-text text-black font-bold">Product Description<span className="text-red-500">*</span></span>
                            </label>
                            <label className="rounded-none">

                                <textarea name="description" placeholder="Product description" className="w-full input rounded-none h-28" required />
                            </label>
                        </div>
                        <div className="form-control lg:col-span-2  w-full ">

                            <label className="rounded none ">

                                <input type="submit" placeholder="submit" value="Add Product" className=" text-black hover:cursor-pointer font-bold w-full input input-bordered rounded-none border-2 border-blue-800" />
                            </label>
                        </div>
                    </div>
                </form>





            </div>
        </div>
    );
};

export default UpdateProduct;