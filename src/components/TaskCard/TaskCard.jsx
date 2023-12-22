

const TaskCard = ({task}) => {
    const  {title, description, deadline, priority, status, user_email} = task;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                    <p><span className="font-semibold">Deadline: </span>{deadline}</p>
                    <p><span className="font-semibold">Priority: </span>{priority}</p>
                    
                    
                </div>
            </div>
            
        </div>
    );
};

export default TaskCard;