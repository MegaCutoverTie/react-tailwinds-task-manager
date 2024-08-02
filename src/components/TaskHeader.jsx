import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const initialStateDarkMode = localStorage.getItem('theme') === 'dark'

const TaskHeader = () =>{

  const [darkMode, setDarkMode] = useState(initialStateDarkMode)

  useEffect(() => {

    if(darkMode){
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", 'dark')
    }else{
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", 'light')
    }
  }, [darkMode])

  return(
      <header className="container mx-auto px-4 pt-8 md:max-w-2xl">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-2xl font-bold tracking-[0.5em] transition-all duration-500">task</h1>
          <button onClick={() => setDarkMode(!darkMode)}>{darkMode ? <SunIcon/> : <MoonIcon />}</button>
        </div>
      </header>
  )
}

export default TaskHeader