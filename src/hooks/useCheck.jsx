import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useCheck = () => {
   const {userr} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const id=123;
    const {data:check=[],refetch} = useQuery({
    queryKey:[id],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/checkout/${userr?.email}`);
    //    console.log(res.data);
        return res.data;
    }
   })
   return [check,refetch];
};



export default useCheck;