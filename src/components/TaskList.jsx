import TaskItem from "./TaskItem";

const TaskList = ({tasks, taskUpdate, taskRemove, taskModal}) => {

    return(
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 dark:bg-gray-700 transition-all duration-500">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} taskUpdate={taskUpdate} taskRemove={taskRemove}/>
            ))}
        </div>
    )
}

export default TaskList