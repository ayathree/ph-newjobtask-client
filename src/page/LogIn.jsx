import { FaGoogle } from "react-icons/fa";


const LogIn = () => {
    const handleLogin=e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

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
          <p className="text-center text-2xl m-2 font-bold">Or Login With</p>
          <button className="btn bg-purple-600 text-white"> <FaGoogle />Google</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default LogIn;