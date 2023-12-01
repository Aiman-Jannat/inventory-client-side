/* eslint-disable react/prop-types */

import useAxiosPublic from "./useAxiosPublic";
import useCheck from "./useCheck";







const useUpdateCheck = ({item}) => {
    const [check] = useCheck();
    console.log(item);
    const count = check.filter(items=>items.productId==item.productId)
    const newSale = count.length;
    const newQuantity=parseInt(item.productQuantity)-newSale;
    console.log(item._id,newSale,newQuantity)
    const data ={
        newSale,newQuantity
       
    }
    console.log("product_id",item._productId);
    const axiosPublic = useAxiosPublic();
    axiosPublic.put(`/products/selling/${item.productId}`,data)
    .then(res=>{

    })

    return data
    
};

export default useUpdateCheck;