
// import Navbar from "../Shared/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";




const Register = () => {

    /* this is react hoke form stytem */
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
 
  
    
       
     
    }  
    return(
        <div>
        
                <div>
               <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10" action="">
                <h1 className="text-3xl pb-2 font-bold">Please Register</h1>
               <div>
                <label  className="text-xl font-semibold"  htmlFor="text">Your Name</label> <br />
                <input  type="text" name="name" placeholder="Write Your Name" className="input input-bordered w-full mt-2 " 
                   {...register("fullNameRequired", { required: true })} 
                />
                        {/* errors will return when field validation fails  */}
                     {errors.fullNameRequired && <span>This field is required</span>} 
               
               </div>
               <div>
                <label  className="text-xl font-semibold" htmlFor="text">Photo Url</label> <br />
                <input type="text" name="photo" placeholder="Put Yout Photo Url" className="input input-bordered w-full  mt-2" />
               </div>
               <div>
                <label  className="text-xl font-semibold" htmlFor="text">Email</label> <br />
                <input type="email" name="email" placeholder="Write Your Email" className="input input-bordered w-full mt-2 " 
                   {...register("emailRequired", { required: true })} 
                />
                {/* errors will return when field validation fails  */}
                {errors.emailRequired && <span>This field is required</span>} 
               </div>
               <div>
                <label className="text-xl font-semibold" htmlFor="text">Password</label> <br />
                <input type="password" name="password" placeholder="Write Your Password" className="input input-bordered w-full mt-2" 
                    {...register("passwordRequired", { required: true })} 
                />
                
                {errors.passwordRequired && <span>This field is required</span>}
               </div>
               <button className="bg-amber-900 text-white rounded py-2 w-full mt-4">Register</button>
                 <p className="my-4"> Already Have an Account? Please   <Link className="text-blue-800 underline font-semibold" to="/login">Login</Link></p>
            </form> 
                </div>   
        </div>
    );
};

export default Register;