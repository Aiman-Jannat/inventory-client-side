import { useContext } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../provider/AuthProvider";


const useShop = () => {
    
    const axiosPublic = useAxiosPublic();
const {userr} = useContext(AuthContext);

const id=123;
const {data:shop=[],refetch} = useQuery({
queryKey:[id],
queryFn: async() =>{
    const res = await axiosPublic.get(`/shop/${userr?.email}`);
    // console.log(res.data);
    return res.data;
}
})
return [shop]
};

export default useShop;

