import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoal from './components/CourseGoal.tsx';
import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg'
import CourseGoalList from './components/CourseGoalList.tsx';

export type CourseGoal = {
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

  function hanldeDeleteGoal(id: number){
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id !== id));
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
        <CourseGoalList goals={goals} onDeleteGoal={hanldeDeleteGoal}/>
      </main>
    </>
  )
}

export default App
