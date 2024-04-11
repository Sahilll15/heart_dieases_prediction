import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col justify-center items-center '>
        <h1 className='text-3xl text-sans font-bold mt-4 text-red-400'>Heart Disease prediction</h1>
        <img className='w-96 h-96 mt-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU1jFRXwJIzHheFMDYuzD6NRYFhFFauf87A&s" alt="" />
        <button onClick={()=>{
            navigate('/predict')
        }} className=' border-2 p-2 bg-red-400  rounded-lg w-96 font-bold text-white' >
            Get Started
        </button>
    </div>
  )
}

export default HomePage
