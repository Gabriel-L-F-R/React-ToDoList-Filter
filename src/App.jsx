import './App.css'
import Home from './components/Home/Home'
import { TodoProvider } from './state/todocontext'

function App() {

  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  )
}

export default App
