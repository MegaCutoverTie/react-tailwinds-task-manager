import CrossIcon from "./icons/CrossIcon"
import CheckIcon from "./icons/CheckIcon"

const TaskItem = ({task, taskUpdate, taskRemove}) => {

    return(
        <article className="flex gap-4 border-gray-500 border-b dark:border-gray-200">
            <button onClick={() => taskUpdate(task.id)} className={`flex justify-center place-items-center rounded-full border-gray-400 border-2 h-5 w-5 ${task.completed && "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"}`}>
                {task.completed && <CheckIcon />}
            </button>
            <p className={`grow ${task.completed && "text-gray-400 line-through dark:text-gray-100" || "text-gray-900 dark:text-gray-100"}`}>{task.title}</p>
            <div className="flex-none">
                <button onClick={() => taskRemove(task.id)} > <CrossIcon /> </button> 
            </div>
            
        </article>
    )
}

export default TaskItem