import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoal from './components/CourseGoal.tsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
     <CourseGoal 
      title="Learn React"
      description="Learn React desc"
     />
     </main>
    </>
  )
}

export default App
