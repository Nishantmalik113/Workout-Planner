import React from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/Swoldier'
import { useState } from 'react'
import Button from './Button'

function Header(props){
  const {index, title, description} = props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-semibold text-zinc-500'>
          {index}
        </p>
        <h4 className='text-xl sm:text-2xl md:text-3xl'>
          {title}
        </h4>
      </div>
      <p className='text-sm sm:text-base mx-auto'>
        {description}
      </p>
    </div>
  )
}

export default function Generator(props) {
  const {Poison, setPoison, Muscles, setMuscles, Goals, setGoals, updateWorkout}=props
  const [showModal, setShowModal] = useState(false)
  
  //let showModal = false
  function toggleModal() {
    setShowModal(!showModal)
  }
  
  function updateMuscles(muscleGroup){
    if(Muscles.includes(muscleGroup)){
      setMuscles(Muscles.filter(val => val !== muscleGroup))
      return
    }

    if(Muscles.length>2){
      return
    }
    if(Poison !== 'individual'){
      setMuscles([muscleGroup])
      setShowModal(false)
      return
    }
    

    setMuscles([...Muscles, muscleGroup])
    if(Poison==='individual' && Muscles.length===2){
      setShowModal(false)
    }
  }

  return (
    <div className='min-h-screen items-center justify-center text-center'>
        <SectionWrapper id ={'generate'} header={"Generate Your Workout"} 
        title={['It\'s',' FIT ','o\'clock']} >
            <Header index={'01'} title={'Pick Your Poison'}
            description={'Select the workout you wish to enjoy'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
              { Object.keys(WORKOUTS).map((type, typeIndex)=>{
                return(
                  <button onClick={()=>{
                    setMuscles([])
                    setPoison(type)
                  }} className={'bg-zinc-950 border  duration-200 px-4 hover:border-orange-800 hover:bg-orange-500 py-3 rounded-lg ' + 
                    (type === Poison ? ' ' : ' border-orange-400')}
                  key={typeIndex}>
                    <p className='capitalize'>{type.replaceAll('_'," ")}</p>
                  </button>
                )
              })}
            </div>
            <Header index={'02'} title={'Lock On Targets'}
            description={'Select the muscles judges for annhilation.'} />
            <div className='bg-zinc-950  border border-solid 
            border-orange-400 rounded-lg flex flex-col'>
              <button onClick={toggleModal} className='relative p-3 flex items-center justify-center'>
                <p className='capitalize'>{Muscles.length==0? 'Select Muscle Groups':Muscles.join(' ')}</p>
                <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2  fa-caret-down"></i>
              </button>
              {showModal &&(
                <div className='flex flex-col px-3'>
                  {(Poison === 'individual' ? 
                  WORKOUTS[Poison]:Object.keys(WORKOUTS
                    [Poison])).map((muscleGroup, 
                      muscleGroupIndex)=>{
                    return(
                      <button key={muscleGroupIndex}  onClick={() => {
                        updateMuscles(muscleGroup)
                    }} className={'hover:text-orange-400 duration-200 ' + (Muscles.includes(muscleGroup) ? ' text-orange-400' : ' ')}>
                        <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                    </button>
                    )
                  })}
                </div>
              )}
            </div>
            <Header index={'03'} title={'Become Juggernaut'}
            description={'Select your ultimate objective.'} />
            <div className='grid grid-col-1 sm:grid-cols-3 gap-4'>
              { Object.keys(SCHEMES).map((scheme, schemeIndex)=>{
                return(
                  <button onClick={()=>{
                    setGoals(scheme)
                  }} className={'bg-zinc-950 border  duration-200 px-4 hover:border-orange-800 hover:bg-orange-500 py-3 rounded-lg ' + 
                    (scheme === Goals ? '' : ' border-orange-400')}
                  key={schemeIndex}>
                    <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
                  </button>
                )
              })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
        
    </div>
  )
}
