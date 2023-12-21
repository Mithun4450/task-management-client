import { Link} from "react-router-dom";
import logo from "../../assets/logo.png"

const Navbar = () => {
    const navLinks = <>
    
        <li><Link to="/" className="hover:bg-[#221070] hover:text-white" >Home</Link></li>
        <li><Link to="/about"  className="hover:bg-[#221070] hover:text-white">About</Link></li>
        <li><Link to="/features" className="hover:bg-[#221070] hover:text-white">Features</Link></li>
        <li><Link to="/resources" className="hover:bg-[#221070] hover:text-white">Resources</Link></li>
        
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center ">
                        <img className="w-10 md:w-16" src={logo} alt="" />
                        <a className="md:text-xl ">SCC Technovision Inc.</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login" className="btn bg-[#221070] text-white">Login</Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;