import { useEffect, useState } from 'react';
import TaskHeader from './components/TaskHeader.jsx';
import TaskList from './components/TaskList.jsx';
import TaskCreate from './components/TaskCreate.jsx';
import TaskCalculator from './components/TaskCalculator.jsx';
import TaskFilter from './components/TaskFilter.jsx';


const initialStateTasks = JSON.parse(localStorage.getItem("tasks")) || [
  {
    id: 1,
    title: "Visit this site",
    completed: true,
  }
];

const App = () => {

  const [tasks, setTasks] = useState(initialStateTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const taskCreate = (title) => {

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    }
    setTasks([...tasks, newTask]);
  }

  const taskUpdate = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task ));
  }

  const taskRemove = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const taskCount = tasks.filter((task) => !task.completed).length;

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  }

  const [filter, setFilter] = useState("all");

  const taskFilter = () => {
    switch(filter){
      case "all":
        return tasks;
      case "active":
        return tasks.filter((task) => !task.completed);
      case "complete":
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  }

  const changeFilter = (filter) => setFilter(filter);

  return (
    <>
      <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-200 min-h-screen dark:bg-gray-800 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-500 md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">

        <TaskHeader />

        <main className="container mx-auto pb-4 px-4 mt-6 md:max-w-2xl">

          <TaskCreate taskCreate={taskCreate}/>

          <TaskList tasks={taskFilter()} taskUpdate={taskUpdate} taskRemove={taskRemove}/>

          <TaskCalculator taskCount={taskCount} clearCompleted={clearCompleted}/>

          <TaskFilter filter={filter} changeFilter={changeFilter}/>

        </main>
      </div>
    </>
  )
}

export default App
