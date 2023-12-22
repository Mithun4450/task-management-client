import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PreviousTasks = () => {
    const initialTasks = {
        todo: [
          { id: 'task-1', content: 'Task 1' },
          { id: 'task-2', content: 'Task 2' },
          // Add more initial tasks if needed
        ],
        ongoing: [],
        completed: [],
    };
      
      
    const [tasks, setTasks] = useState(initialTasks);
      
        const onDragEnd = (result) => {
          const { source, destination, draggableId } = result;
      
          // If dropped outside the droppable area
          if (!destination) return;
      
          // If dropped in the same list and position, do nothing
          if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
          ) {
            return;
          }
      
          const updatedTasks = { ...tasks };
          const sourceTasks = [...updatedTasks[source.droppableId]];
          const destinationTasks = [...updatedTasks[destination.droppableId]];
      
          const [removed] = sourceTasks.splice(source.index, 1);
          destinationTasks.splice(destination.index, 0, removed);
      
          updatedTasks[source.droppableId] = sourceTasks;
          updatedTasks[destination.droppableId] = destinationTasks;
      
          setTasks(updatedTasks);
    } ;

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className="task-manager">
                {Object.keys(tasks).map((list) => (
                <div key={list} className="task-list">
                    <h3>{list.toUpperCase()}</h3>
                    <Droppable droppableId={list}>
                    {(provided) => (
                        <ul
                        className="task-list-items"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        >
                        {tasks[list].map((task, index) => (
                            <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                            >
                            {(provided) => (
                                <li
                                className="task-item"
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                >
                                {task.content}
                                </li>
                            )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </ul>
                    )}
                    </Droppable>
                </div>
                ))}
            </div>
            </DragDropContext>
    );
};

export default PreviousTasks;