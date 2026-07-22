import { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'
import { TodoProvider } from './contexts/todocontext'
import { LoginProvider } from './contexts/logincontext'

function App() {

  return (
    <LoginProvider>
      <TodoProvider>
        <Home />
      </TodoProvider>
    </LoginProvider>
  )
}

export default App
