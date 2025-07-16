import { createContext, useState } from 'react'
import './App.css'
import ChildA from './component/ChildA'


const UseContext=createContext();

function App() {
  const [user, setUser] = useState({name:"avinash kumar"})

  return (
    <>
    <UseContext.Provider value={user}>
    <ChildA/>
    </UseContext.Provider>
  
    </>
  )
}

export default App
export{UseContext}