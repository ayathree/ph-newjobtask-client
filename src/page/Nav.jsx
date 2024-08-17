import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../route/AuthProvider";


const Nav = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout=()=>{
        logOut();
    }
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="lg:navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
          user ? <>
          <li><a href={'/products'}>Product</a></li>
          <li><a onClick={handleLogout}>Sign Out</a></li>
         
          
          </>:<>
          <li><a href={'/login'} >Sign In</a></li>
          </>
        }
        <li><a href={'/register'} >Sing Up</a></li>
       
      </ul>
    </div>
    <a className="text-purple-500 lg:text-3xl text-xl font-bold ">Products Gallery</a>
  </div>
  
  <div className=" lg:navbar-end ">
  {
        user ? <>
        <div className=" hidden lg:block">
    <ul className="menu menu-horizontal px-1">
      <Link to={'/products'}><button className="btn ml-2 bg-blue-300 hidden lg:block" >Product</button></Link>
    </ul>
  </div>
 
        <button onClick={handleLogout} className="btn ml-2 bg-red-400 hidden  lg:block">Sign Out</button>

        </> :
        
        
        <Link to={'/login'}> <a className="btn ml-2 bg-purple-400 hidden lg:block">Sign In</a></Link>
        
    }
   
    <Link to={'/register'}><a className="btn ml-2 bg-blue-300 hidden lg:block">Sing Up</a></Link>
  </div>
</div>
            
        </div>
    );
};

export default Nav;