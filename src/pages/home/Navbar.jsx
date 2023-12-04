import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import useUser from "../../hooks/useUser";
import useAdmin from "../../hooks/useAdmin";


const Navbar = () => {

  const [user] = useUser(); 
  const [isAdmin] = useAdmin();
  console.log(user)
    const {userr,logout} = useContext(AuthContext);
    console.log("userrr",userr)
    return (
        <div>
            <div className=" pb-2 ...">
        <div className=" text-black ">
           
<div className="  flex px-5 justify-between w-full py-2  ">

 <div className="dropdown ">
 <div className="bg-blue-900 "></div>
   <label tabIndex={0} className="btn btn-ghost flex-col-reverse lg:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
   <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 mr-5 z-[1] p-2   ">
     <NavLink to = "/" className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Home</NavLink>

{
 user?.role != "user"?<><NavLink to = '/dashboard' className={({ isActive}) =>   
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Dashboard</NavLink></>:<><NavLink to = '/createStore' className={({ isActive}) =>   
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Create Store</NavLink></>
}



     <NavLink to = 'https://youtu.be/tZxS7uCmIcU?si=F9Sa-mlxgF0SvOlS' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
}>Watch Demo</NavLink>
     <NavLink to = '/register' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
}>Register</NavLink>
     {/* {userr&&<>
       <NavLink to = '/dashboard' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Dashboard</NavLink>
           <NavLink to = '/profile' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>Profile</NavLink>
     </>
     } */}
     
   </ul>
 </div>
 <img className="hidden h-10 w-40  " src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpvbd2VDxNESQSKOx0FhTBzRlO5YGK_XQlA&usqp=CAU' alt="" />
</div>
<div className="flex justify-between">
 <div>
 <img className="h-10 w-40" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHpvbd2VDxNESQSKOx0FhTBzRlO5YGK_XQlA&usqp=CAU' alt="" />
 </div>
<div className=" hidden lg:flex h-10 font-bold  py-2 items-center ">

 <ul className="flex gap-5 text-sm  ">
 <NavLink to='/' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2  bg-blue-800" : ""
} >Home</NavLink>
     {
 user?.role == "admin"||user?.role=="manager"?<><NavLink to = '/dashboard' className={({ isActive}) =>   
 isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Dashboard</NavLink></>:<><NavLink to = '/createStore' className={({ isActive}) =>   
isActive ? "text-white text-md underline  px-5 py-2 rounded-md bg-blue-800"  : ""
} >Create Store</NavLink></>

}
     <NavLink to = 'https://youtu.be/tZxS7uCmIcU?si=F9Sa-mlxgF0SvOlS' className={({ isActive}) =>
 isActive ? "text-black text-md underline  px-5 py-2  bg-blue-800" : ""
}>Watch Demo</NavLink>
<NavLink to = '/register' className={({ isActive}) =>
 isActive ? "text-white text-md underline  px-5 py-2  bg-blue-800" : ""
}> Register</NavLink>
     {/* {userr&&<>
       <NavLink to = '/myCart' className={({ isActive}) =>
       isActive ? "text-[#FF444A] underline" : ""
     }>My Carts</NavLink>
           
     </>
     } */}
 </ul>
 
</div>
<div className="flex justify-center gap-3 items-center">
{
         userr?<p className=" font-bold text-blue-700 ">{userr.displayName}</p>:''
       } 
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
     <div className="w-10 rounded-full">
    
       {
         userr?<><img referrerPolicy="no-referrer" src={userr.photoURL} alt="image"/></>:<><img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-512x512-zxne30hp.png" /></>
       }
       
       
     </div>
   </label>
   {/* //onClick={logout} */}
   
   {
     userr? <Link to="/"> <button onClick={logout}  className="text-black bg-orange-500 font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Logout</button></Link>: <Link to="/login"> <button className="text-white bg-blue-800 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-purple-200 dark font-medium rounded-lg text-sm px-8 py-2.5 text-center mr-2 mb-2">Login</button></Link>
   }
 
</div>
</div>

</div> 
     </div>
        </div>
    );
};

export default Navbar;