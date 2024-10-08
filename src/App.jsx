import { useState } from 'react'
import Contact from "./components/contact"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contact/>
    </>
  )
}

export default App
