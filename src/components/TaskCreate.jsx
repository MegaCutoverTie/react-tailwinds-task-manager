import { useState } from "react";

const TaskCreate = ({taskCreate}) =>{

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    if (title.trim().length > 0){
      taskCreate(title);
      setTitle('');
    }
    return setTitle('');
  }

  return(
      <form onSubmit={handleSubmit} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-6 dark:bg-gray-700 transition-all duration-500">
        <span className="rounded-full border-2 border-gray-400 h-5 w-5 inline-block"></span>
        <input className="w-full outline-none dark:bg-gray-700 dark:text-gray-100 transition-all duration-500" type="text" placeholder="Create a new task..." value={title} onChange={(e) => setTitle(e.target.value)}/>
      </form>
  )
}

export default TaskCreate