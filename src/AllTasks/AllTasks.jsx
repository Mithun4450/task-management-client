import { useContext } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "../components/TaskCard/TaskCard";


const AllTasks = () => {

    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?user_email=${user.email}`)
            console.log(res.data)
            return res.data;
        }
    })

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
            <div className="w-full lg:1/4  bg-sky-400">
                <h1 className="text-xl font-bold text-center p-5">ToDo List</h1>
                <div className="grid grid-cols-1 gap-5 m-5">
                    {
                        tasks.map(task => <TaskCard 
                        key={task._id}
                        task={task}
                        
                        ></TaskCard>)
                    }

                </div>
            </div>
            <div className="w-full lg:1/4 grid grid-cols-1 bg-rose-300">
                <h1 className="text-xl font-bold text-center p-5">Ongoing Tasks List</h1>
                <div>

                </div>
            </div>
            <div className="w-full lg:1/4 grid grid-cols-1 bg-green-300">
                <h1 className="text-xl font-bold text-center p-5">Completed Tasks List</h1>
                <div>

                </div>
            </div>
            
        </div>
    );
};

export default AllTasks;