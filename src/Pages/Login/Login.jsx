import { Link } from "react-router-dom";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
    }
    return (
        <div>
        {/* <Navbar /> */}

        <div>
            <form onSubmit={handleLogin} className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10">
                <div>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" name="email" placeholder="Write Your Email" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" placeholder="Write Your Password" className="input input-bordered w-full" required />
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