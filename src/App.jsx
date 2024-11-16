import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/funtions'

function App() {
  const [workout, setworkout] = useState(null)
  const [Poison, setPoison] = useState('individual')
  const [Muscles, setMuscles] = useState([])
  const [Goals, setGoals] = useState('strength_power')

  function updateWorkout() {
    if (Muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({ Poison, Muscles, Goals })
    setworkout(newWorkout)
    window.location.href='#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
    from-zinc-800 to-zinc-950 text-white text-sm sm:text-base'>
      
      <Hero />
      <Generator 
      Poison={Poison} setPoison={setPoison} 
      Muscles={Muscles} setMuscles={setMuscles}
      Goals={Goals} setGoals={setGoals}
      updateWorkout={updateWorkout}
      />
      {workout &&(<Workout workout={workout}/>)}
    </main>
  )
}

export default App
