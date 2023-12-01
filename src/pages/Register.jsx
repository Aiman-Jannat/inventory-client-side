import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
  const [regError, setRegError] = useState('');
  const [success, setSuccess] =  useState(false);

  const {createUser, userr, signIn} = useContext(AuthContext);

  console.log("User",userr);
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()_+{}|[\]:";'<>?,./]/;




  const handleSubmit = e =>{

       e.preventDefault();
       const form = e.target;
      const name = form.name.value;
      const photoUrl = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, email, password, photoUrl)
      setRegError('');
      setSuccess('');

      if(password.length<6)
      {
         setRegError("Password must be at least 6 character.") 
          return;
      }
      else if(!(uppercaseRegex.test(password)&&specialCharRegex.test(password)))
      {
          setRegError("Password must contain at least one spatial character and capital letter")
          return;
      }
      else{
          createUser(email, password, name, photoUrl )
          setSuccess(true);
          signIn(email,password);
          toast('Your account has been created successfully!')
          form.reset();
          const role = "user";
          const data = {
            name:userr.displayName,
            email:userr.email,
            role
          }
         
      }

  }

    return (
        <div>
            <div className="relative py-14"  >
            
<div className="relative flex-col px-10 lg:px-72">

<div className=" rounded-md  bg-blue-200 flex-shrink-0 w-full  shadow-2xl">

<div className="text-center  lg:text-left">
<h1 className="text-4xl bg-blue-800 py-3 text-center font-bold text-white">Register now!</h1>

</div>
<form className=" p-8 " onSubmit={handleSubmit} >
  <div className="form-control">
    <label className="label">
      <span className="text-black font-semibold ">Name <span className="text-red-500">*</span></span>
    </label>
    <input type="text" placeholder="Name" className="input border rounded-none" name="name" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-black font-semibold ">Photo URL <span className="text-red-500">*</span></span>
    </label>
    <input type="text" placeholder="Photo URL" className="input border rounded-none" name="photo" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-black font-semibold ">Email <span className="text-red-500">*</span></span>
    </label>
    <input type="email" placeholder="email" className="input border border-2-black rounded-none" name="email" required />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-black font-semibold ">Password <span className="text-red-500">*</span></span>
    </label>
    <input type="password" placeholder="password" className="input rounded-none" name="password" required />
    {
      regError && <p >{regError}</p>
    }
    
  </div>
  <div className="form-control mt-6">
      <input type="submit" className=" border-2 cursor-pointer  border-blue-800 py-3 text-black font-bold" value="Register" />
    
  </div>
  <p className="mt-4  ">Already have an account? please <Link
   to='/login'><span className="text-blue-800 font-semibold underline">login</span></Link> </p>
</form>
</div>
</div>
</div><ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Register;