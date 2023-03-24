import { useState } from 'react'
import './App.css'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <div className="App">
        <h1>App</h1>
      </div>
      <Routes>
        <Route path="/" element={<DefaultComponent />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<Team />} />
      </Routes>
    </HashRouter>

  )
}
export default App