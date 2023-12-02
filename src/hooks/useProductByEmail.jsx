import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const useProductByEmail = () => {
    const {userr} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const id=123;
    const {data:product=[],refetch} = useQuery({
    queryKey:[id],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/products/${userr?.email}`);
        // console.log(res.data);
        return res.data;
    }
   })
    return [product]
};

export default useProductByEmail;