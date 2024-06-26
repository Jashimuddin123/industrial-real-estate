import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createContext } from "react";
import auth from "../../Firebase/Firebase";

const Login = () => {
const {signInUser} = createContext(auth)

const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
            const {email, password} = data
            signInUser(email, password)
            .then(result=>{
                console.log(result.user);
            })
            .catch(error=>{
                console.log(error);
            })


    
  }

    // const handleLogin = e =>{
    //     e.preventDefault()
    // }
    return (
        <div>
        {/* <Navbar /> */}

        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10">
            <div>
                        <label className="text-xl font-semibold" htmlFor="text">Email</label> <br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Write Your Email"
                            className="input input-bordered w-full mt-2"
                            {...register("emailRequired", { required: true })}
                        />
                        {/* errors will return when field validation fails */}
                        {errors.emailRequired && <span>This field is required</span>}
                    </div>
                    <div>
                        <label className="text-xl font-semibold" htmlFor="text">Password</label> <br />
                        <input
                            type="password"
                            name="password"
                            placeholder="Write Your Password"
                            className="input input-bordered w-full mt-2"
                            {...register("passwordRequired", { required: true })}
                        />
                        {errors.passwordRequired && <span>This field is required</span>}
                    </div>
                <button className="bg-blue-700 text-white rounded py-2 w-full mt-4">Login</button>
                <p className="my-4">
                    If you do not register? please <Link className="text-blue-800 underline font-semibold" to="/register">Register</Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Login;