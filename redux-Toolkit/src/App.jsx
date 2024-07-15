import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className='bg-black text-white h-screen'>
      <h1 className="bg-purple-500 text-center font-semibold ">Learn About redux-toolkit here</h1>
   <div className="my-6 mx-14">
   <AddTodo/>
   <Todos/>
   </div>
      
    </div>
  )
}

export default App
