import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const {userr} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const {data:user,isLoading} = useQuery({
    queryKey:[userr],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/users/${userr?.email}`);
    //    console.log(res.data);
        return res.data;
    }
   })
   return [user,isLoading];
};

export default useUser;