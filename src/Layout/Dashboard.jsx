import { useContext } from "react";
import { FaArrowsLeftRight, FaArrowsLeftRightToLine, FaBasketShopping, FaCalculator, FaCalendar, FaCartShopping, FaContao, FaCreativeCommonsSampling, FaDatabase, FaHouse, FaIcons, FaList, FaMessage, FaPaypal, FaPlus, FaRightFromBracket, FaShop, FaUser, FaUsersViewfinder, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Footer from "../pages/home/footer/Footer";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const {userr, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () =>{
        navigate('/login');
        logout();
    }

//    console.log(userr)
    const axiosPublic = useAxiosPublic();
    const {data:shop} = useQuery({
    queryKey:[userr],
    queryFn: async() =>{
        const res = await axiosPublic.get(`/shop/${userr.email}`);
    //    console.log(res.data);
        return res.data;
    }
   })
//    console.log(shop)





    const isAdmin=false;
    return (
        <div>
            <div className="flex">
            <div className="w-3/12 min-h-screen bg-blue-900 -ms-10 max-h-min">
            
                <div className="flex flex-col  w-9/12 mx-auto justify-start mt-10 text-black ">
                <ul className="">
                    {
                        isAdmin ? 
                        <>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpvbd2VDxNESQSKOx0FhTBzRlO5YGK_XQlA&usqp=CAU" alt="" />
                        <li className=" flex hover:text-white gap-3 items-center font-bold uppercase">
                        <FaHouse></FaHouse>
                        <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                    </li>
                    <li className=" flex hover:text-white  gap-3 items-center font-bold mt-5 uppercase">
                        <FaUtensils></FaUtensils>
                        <NavLink to="/dashboard/addItems">Add Items</NavLink>
                    </li>
                    <li className=" flex gap-3 mt-5 hover:text-white  items-center font-bold uppercase">
                        <FaList></FaList>
                        <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
                    </li>
                    <li className=" flex gap-3 mt-5 hover:text-white  items-center font-bold uppercase">
                        <FaDatabase></FaDatabase>
                        <NavLink to="/dashboard/manageBookings">Manage Bookings</NavLink>
                    </li>
                    <li className=" flex gap-3 my-5 items-center  hover:text-white  font-bold uppercase">
                        <FaUser></FaUser>
                        <NavLink to="/dashboard/allUsers">All Users</NavLink>
                    </li>
                        </>
                        :
                        <>
                        <img className=" w-full mx-auto" src={shop?.shoplogo} alt="" />
                        <p className="text-yellow-500  font-bold text-lg">{shop?.shopName}</p>
                        <hr className="mt-5" />
                        
                        <li className=" mt-8 flex hover:text-white gap-3 items-center font-bold uppercase">
                        <FaHouse></FaHouse>
                        <NavLink to="/dashboard/home" className={({ isActive}) =>
 isActive ? "text-white text-md underline "  : ""}>My Home</NavLink>
                    </li>
                    <li className=" flex hover:text-white  gap-3 items-center font-bold mt-5 uppercase">
                        <FaPlus></FaPlus>
                        <NavLink to="/dashboard/addProduct" className={({ isActive}) =>
 isActive ? "text-white text-md underline "  : ""}>Add Product</NavLink>
                    </li>
                    <li className=" flex hover:text-white  gap-3 items-center font-bold mt-5 uppercase">
                        <FaCreativeCommonsSampling></FaCreativeCommonsSampling>
                        <NavLink to="/dashboard/manageProduct" className={({ isActive}) =>
 isActive ? "text-white text-md underline "  : ""}>Manage Product</NavLink>
                    </li>
                    <li className=" flex hover:text-white  gap-3 items-center font-bold mt-5 uppercase">
                        <FaShop></FaShop>
                        <NavLink to="/dashboard/salesCollection" className={({ isActive}) =>
 isActive ? "text-white text-md underline "  : ""}>Sales Collection</NavLink>
                    </li>
                    
                    
                   
                        </>
                    }
                    <hr className="mt-5" />
                    <li className=" flex gap-3 hover:text-white  items-center font-bold mt-5 uppercase">
                        <FaHouse></FaHouse>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className=" flex gap-3 hover:text-white  items-center font-bold mt-5 uppercase">
                        <FaMessage></FaMessage>
                        <NavLink >Notice</NavLink>
                    </li>
                    <li className=" flex hover:text-white  gap-3 items-center  font-bold mt-5 uppercase">
                  
                        <button className="flex hover:text-white items-center  gap-3 font-bold  uppercase" onClick={handleLogout}><FaRightFromBracket className="flex"></FaRightFromBracket> LogOut</button>
                    </li>

                    <div className="mt-6 mb-5">
                           {
                           userr&&<div className="flex gap-4 justify-start items-center"><img className="w-7 h-7 rounded-full" src={userr.photoURL} alt="" /><p className="text-white font bold text-md">{userr.displayName}</p></div>
                           }
                        </div>
                   </ul>
                 
                </div>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
                
            </div>
            
        </div>
        <Footer className="flex items-end"></Footer>
        </div>
    );
};

export default Dashboard;