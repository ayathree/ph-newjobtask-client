import { useContext, useState } from "react";
import { AuthContext } from "../route/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
const [errorRegister, setErrorRegister] = useState('')
const[successRegister, setSuccessRegister]= useState('')
    const handleRegister =e=>{


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        setErrorRegister('');
        setSuccessRegister('')

        createUser(email, password)
        .then(result=>{
          setSuccessRegister('User created successfully')
            e.target.reset();

            console.log(result.user)
        })
        .catch(error=>{
          setErrorRegister(error.message)
            console.log(error)
        })


    }
    return (
        <div className="hero bg-blue-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up Now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleRegister} className="card-body">
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
          
        </div>
        {
            errorRegister && <p className="text-red-600">{errorRegister}</p>
          }
          {
            successRegister && <p className="text-green-600">{successRegister}</p>
          }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;