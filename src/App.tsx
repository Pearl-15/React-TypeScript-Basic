import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg'

type CourseGoal = {
  title: string;
  description: string;
  id: number;

}
function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([]); // Generic type, obj array 

  function handleAddGoal() {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn Redux',
        description: 'Redux is a global state management',

      };
      return [...prevGoals, newGoal]
    });
  }

  return (
    <>
      <main>
        <Header
          image={{ src: goalsImg, alt: 'A list of Goals' }}
        >
          <h1>Your Course Goals</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal
              title={goal.title}
            />
            <p>{goal.description}</p>
          </li>
        ))}
        </ul>
      </main>
    </>
  )
}

export default App
