import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../route/AuthProvider";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    const {signIn, google} = useContext(AuthContext)
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setErrorMessage('');
        signIn(email, password)
        .then(result=>{
            e.target.reset();
            navigate('/');
            
            console.log(result.user)
        })
        .catch(error=>{
          setErrorMessage(error.message)
            console.log(error)
        })

    }
    const handleGoogle =()=>{
        google()
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    return (
        <div className="hero bg-purple-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        <div className="form-control mt-6">
          <button className="btn bg-purple-600 text-white">Login</button>
        </div>
        {
            errorMessage && <p className="text-red-600">{errorMessage}</p>
          }
          <p className="text-center text-2xl m-2 font-bold">Or Login With</p>
          <button onClick={handleGoogle} className="btn bg-purple-600 text-white"> <FaGoogle />Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default LogIn;