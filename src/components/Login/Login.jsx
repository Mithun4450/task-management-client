import img from '../../assets/login.png'
import { FcGoogle  } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import swal from 'sweetalert';




const Login = () => {
    const [loginError, setLoginError] = useState('')
    const {loginWithEmailPassword, loginWithGoogle, loginWithGithub} = useContext(AuthContext);
    const navigate = useNavigate()
   

    const handleLogin = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        loginWithEmailPassword(email, password)
            .then(result =>{
                const loggedInUser = result.user;
                console.log(loggedInUser)
        
                swal("Good job!","You have successfully logged in!", "success");
                
                navigate("/dashboard");
               

            })
            .catch(error =>{
                console.error(error)
                setLoginError(error.message)
            })
        
        
    }

    const handleGoogleLogin = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result.user)

            swal("Good job!","You have successfully logged in!", "success");
            
            navigate("/dashboard");
            
        
        })
        .catch(error =>{
            console.error(error)
        })
    }

    const handleGithubLogin = () =>{
        loginWithGithub()
        .then(result =>{
            console.log(result.user);

            swal("Good job!","You have successfully logged in!", "success");
            
            navigate("/dashboard");

            
            
            

        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='my-14 p-6'>
            <div className="hero min-h-screen bg-base-200 rounded-lg">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <div>
                            <img className='w-full rounded-lg ' src={img}></img>
                        </div>
                        
                        <div>
                            <div className="form-control mt-6">
                                    <button onClick={handleGoogleLogin}  className="btn btn-outline btn-info"> <span><FcGoogle className="text-2xl"></FcGoogle></span>Login with Google</button>
                            </div>
                            <div className="form-control mt-6">
                                    <button onClick={handleGithubLogin} className="btn btn-outline btn-info"><span><BsGithub className="text-2xl text-black "></BsGithub></span>Login with GitHub</button>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                            <h1 className='text-3xl font-bold'>Please login here!</h1>
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
                               
                                {
                                    loginError &&  
                                    <div className="bg-base-100 p-4 text-center w-3/4 rounded-lg mx-auto h-20"><p className="text-red-600 pt-4">{loginError}</p></div>
                                    

                                }
                            
                                        
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
                            </div>
                    </form>
                    <p className="text-center pb-10">Do not have a account? Please <span className="text-blue-700 underline"><Link to="/signUp">Sign Up</Link></span> </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;