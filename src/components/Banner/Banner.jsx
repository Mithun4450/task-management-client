import { Link } from "react-router-dom";
import banner from "../../assets/banner.png"

const Banner = () => {
    return (
        <div  className="relative w-full my-8 ">
            <img src={banner} className="w-full rounded-lg" />
            <div className="absolute h-full flex items-center top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg ">
                <div className="w-3/4 md:w-1/2 space-y-1  md:space-y-3  lg:space-y-6 pl-14 ">
                    <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-bold leading-5">Streamline Your Workflow with our Intuitive Task Manager</h1>
                    <p className="text-white text-xs md:text-sm  lg:text-lg  "> Effortlessly organize tasks, streamline workflows, and foster teamwork for seamless project management and enhanced efficiency.</p>
                    <div className="flex gap-5">
                    <Link to="/login"><button className="btn  btn-info border-none text-white text-xs md:text-base ">Let’s Explore</button></Link>
                        
                        
                    </div>
                </div>
            </div>
            
        </div> 
    );
};

export default Banner;