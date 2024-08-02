const TaskCalculator = ({taskCount, clearCompleted}) => {
    return(
        <section className='py-4 px-4 flex justify-between gap-4 bg-white rounded-b-md dark:bg-gray-700 transition-all duration-500'>
          <span className='text-gray-400 dark:text-gray-100'>{taskCount} items left</span>
          <button onClick={() => clearCompleted()} className="bg-blue-400 dark:bg-yellow-300 px-0.5 rounded-md border-b-2 border-blue-500 dark:border-yellow-600 transition-all duration-500">clear</button>
        </section>
    )
}

export default TaskCalculator