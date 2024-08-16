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
  <div className="navbar-start">
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
        <li><a>Product</a></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <Link to={'/products'}><a>Product</a></Link>
    </ul>
  </div>
  <div className="navbar-end">
  {
        user ? <>
        <p>{user.email}</p>
        <button onClick={handleLogout} className="btn">Sign Out</button>

        </> :
        
        
        <Link to={'/login'}> <a className="btn bg-purple-400">Sign In</a></Link>
    }
   
    <Link to={'/register'}><a className="btn ml-2 bg-blue-300">Sing Up</a></Link>
  </div>
</div>
            
        </div>
    );
};

export default Nav;