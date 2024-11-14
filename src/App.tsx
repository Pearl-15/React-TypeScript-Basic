import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Header
        image={{src: goalsImg, alt: 'A list of Goals'}}
      >
        <h1>Your Course Goals</h1>
      </Header>
     <CourseGoal 
      title="Learn React"
     />
     <p>Learn React Description</p>
     </main>
    </>
  )
}

export default App
