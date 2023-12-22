import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CreateTask = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    

    const onSubmit = data => {
        console.log(data);
    }   

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Title</span>
                    </label>
                    <input type="text"  {...register("title", { required: true })} name="title" placeholder="Title" className="input input-bordered" />
                    {errors.title && <span className="text-red-600">Title is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Description</span>
                    </label>
                    <textarea  {...register("description", { required: true })} name="description" placeholder="Description" className="input input-bordered" />
                    {errors.description && <span className="text-red-600">Description is required</span>}
                </div>
                <div className="flex items-center flex-col md:flex-row gap-5">
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Deadline</span>
                        </label>
                        <input type="date" {...register("deadline", { required: true })} name="deadline" placeholder="Deadline" className="input input-bordered" />
                        {errors.description && <span className="text-red-600">Deadline is required</span>}
                    </div>
                    <div className="form-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Choose Priority</span>
                        </label>
                        <select {...register("priority", { required: true })} name="priority" placeholder="Priority"  className="border rounded-md py-3 px-8" >
                            <option>Low</option>
                            <option>Moderate</option>
                            <option>High</option>
                        </select>
                        
                        {errors.description && <span className="text-red-600">Priority is required</span>}
                    </div>
                </div>
                
                
                
                <div className="form-control mt-6">
                    <input className="btn bg-[#221070] text-white" type="submit" value="Create New Task" />
                </div>
            </form>
        </div>
    );
};

export default CreateTask;