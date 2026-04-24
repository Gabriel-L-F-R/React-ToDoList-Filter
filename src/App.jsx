import { useState } from 'react'
import './App.css'
import { Home } from './Components/home'
import { TodoProvider } from './contexts/todocontext'

function App() {

  return (
    <>
    <TodoProvider>
      <Home />
    </TodoProvider>
    </>
  )
}

export default App
