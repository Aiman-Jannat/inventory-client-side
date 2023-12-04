import { useState } from 'react';
import useUser from '../../hooks/useUser'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Title from '../../shared/Title';

const AdminSaleSummary = () => {

    const [user] = useUser();
    const axiosPublic = useAxiosPublic();
    const [product, setProduct] = useState([]);
    axiosPublic.get('/products')
    .then(res=>{
        // console.log(res.data)
        setProduct(res.data)
    });
    // console.log(user)
    const  totalSale = product.reduce((total,item) => total+parseFloat(item.saleCount),0)


    return (
        <div>
            <Title mainTitle={"Sales Summary"} subTitle={"Manage your all shops"}></Title>
             <div className="w-9/12 mx-auto flex gap-5 items-center justify-center  mt-20">
                <div  className="  bg-orange-500 py-10  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-blue-800">Total Income: <span className="text-3xl text-white">{user?.income}$</span> </p></div>
                <div  className="  bg-pink-600 py-10  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-yellow-400">Total Product: <span className="text-3xl text-white">{product?.length}</span> </p></div>
                <div  className="  bg-cyan-400 py-10  px-5 hover:cursor-pointer"><p className=" text-center text-2xl font-bold text-pink-500">Total Sale: <span className="text-3xl text-blue-800">{totalSale}</span> </p></div>

                
                
            </div>
        </div>
    );
};

export default AdminSaleSummary;