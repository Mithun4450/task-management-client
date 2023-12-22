import { NavLink, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../Navbar/Navbar";




const Dashboard = () => {
    const {user} = useContext(AuthContext);
    

    return (
        <>
        <Navbar></Navbar>

        <div className="flex flex-col lg:flex-row">


            {/* dashboard side bar */}
            <div className="w-full lg:w-1/4 min-h-screen bg-[#221070] text-white p-8 space-y-3">
                
                {
                     <>
                        <h1 className="text-xl font-bold">DASHBOARD</h1>
                        <div className="flex flex-col md:flex-row gap-2">
                            <div>
                                
                                <div className="mb-8">
                                    <label  className="btn btn-ghost btn-circle avatar w-14">
                                    <div className="w-14 rounded-full">
                                        {
                                        user?.photoURL? <img src={user.photoURL} /> : <img src=""></img>

                                        }
                                    </div>
                                    </label>
                                </div>

                            </div>
                            <div>
                                <h1 className="text-base ">{user?.displayName}</h1>
                                <h1 className="text-base">{user?.email}</h1>
                            </div>
                        </div>


                        <ul className="space-y-3" >
                            
                            
                            <li>
                                <NavLink to="/dashboard/createTask">Create New Task</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allTasks">All Tasks</NavLink>
                            </li>
                            
                                
                        </ul>
                    
                    
                    </>
                }
                


            </div>

            {/* dashboard children */}
            <div className="w-full  lg:w-3/4">
                <Outlet></Outlet>
            </div>

        </div>

       

       </>
    );
};

export default Dashboard;