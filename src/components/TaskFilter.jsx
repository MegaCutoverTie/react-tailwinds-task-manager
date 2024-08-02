const TaskFilter = ({filter, changeFilter}) => {
    return(
        <section className="container mx-auto mt-6">
          <div className='bg-white rounded-md px-4 py-2 flex justify-between dark:bg-gray-700 transition-all duration-500'>
            <button onClick={() => changeFilter("all")} className={`${filter === 'all' ? 'text-blue-600 bg-gray-300 px-0.5 rounded-md' : 'text-gray-500 hover:text-blue-600 dark:text-gray-300 hover:dark:text-blue-600'}`}>All</button>
            <button onClick={() => changeFilter("active")} className={`${filter === 'active' ? 'text-blue-600 bg-gray-300 px-0.5 rounded-md' : 'text-gray-500 hover:text-blue-600 dark:text-gray-300 hover:dark:text-blue-600'}`}>Active</button>
            <button onClick={() => changeFilter("complete")} className={`${filter === 'complete' ? 'text-blue-600 bg-gray-300 px-0.5 rounded-md' : 'text-gray-500 hover:text-blue-600 dark:text-gray-300 hover:dark:text-blue-600'}`}>Complete</button>
          </div>
        </section>
    )
}

export default TaskFilter