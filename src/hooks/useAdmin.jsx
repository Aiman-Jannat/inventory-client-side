import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useAdmin = () => {
    
        const {userr} = useContext(AuthContext);
        const axiosSecure = useAxiosPublic();
        const {data:isAdmin} = useQuery({
        queryKey:[userr?.email,'isAdmin'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/users/admin/${userr?.email}`);
           console.log(res.data);
            return res.data?.admin;
        }
       })
       return [isAdmin];
};

export default useAdmin;