import { useContext, useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic"
import {AuthContext} from '../../provider/AuthProvider'
import { MdOutlineMailOutline } from "react-icons/md";

const AllUser = () => {
  const {userr} = useContext(AuthContext);
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 6;
    const [save, setSave] = useState([]);
    const axiosPublic = useAxiosPublic();
    axiosPublic.get(`/users`)
    .then(res=>{
        setSave(res.data);
    })
  // Calculate the indexes for the current page
  console.log(save
    )
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = save.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
   
    
    

    
    return (
        <div>
            <p className="text-yellow-400 text-4xl font-bold bg-blue-800 py-6 text-center my-3">All Users</p>
            
            <div className=" rounded-tl-2xl rounded-tr-2xl  border-2 border-blue-800 overflow-x-auto w-3/4 mx-auto mt-10 flex justify-start items-center">

<table className="table">
  {/* head */}
  <thead>
    <tr className="bg-blue-800 text-white ">
      <th className="rounded-tl-2xl ">
        Item no.
      </th>
      <th className="">User Name</th>
      <th className="">Role</th>
      <th className="">Send promotional Email</th>
     
      


    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    {currentItems.map((item, index) =><><tr key={item._id} >
      
      <td>
        {index + 1}


      </td>
      
     
        
      <td>{item.name}</td>
      <td>{item.role}</td>
      {
        item.role=="user"&& <td><button  className="btn bg-white border-none  "><MdOutlineMailOutline  className="text-orange-500 text-4xl"></MdOutlineMailOutline > </button></td>
      }
      
      


    </tr>
    </>)}



  </tbody>
  {/* foot */}

</table>
</div>
<div className="w-fit mx-auto flex mt-10">
        {Array.from({ length: Math.ceil(save.length / itemsPerPage) }).map((_, index) => (
          <button className="bg-blue-400 border-2 p-6 text-xl" key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
        </div>
    );
};

export default AllUser;