import { useRef, useState } from 'react';

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, content: 'Task 1' },
        { id: 2, content: 'Task 2' },
        { id: 3, content: 'Task 3' },
        { id: 4, content: 'Task 4' },
    
    ]);



   
    

    return (
        <div>
            {
                tasks.map((task, index) => (<div key={index} className='relative flex mb-3 border rounded p-2 bg-gray-300 w-20 ' 
                draggable
               
                >
                    <p>{task.content}</p>
                </div>))
            }
            
        </div>
    );
};

export default TaskManager;