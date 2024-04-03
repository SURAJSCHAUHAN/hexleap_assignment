'use client'
import React,{useState} from 'react'
import Main from './components/Main'
import Collection from './components/Collection'

const page = () => {

  const [btnOn,setBtnOn]=useState(false);
  const handleClick = () => {
    setBtnOn(!btnOn);
  }

  return (
    <div className={` flex flex-col justify-center items-center pb-20 relative h-100 ${btnOn?'bg-gray-800 text-white':''}`}>
      <Main btnon={btnOn}/>
      <Collection btnon={btnOn}/>
      <div className='fixed top-2 right-3'>
          <button className={`px-5 py-2 rounded-md ${btnOn?'bg-white text-black border-2 border-solid':'bg-slate-600 text-white'}`} onClick={handleClick}>Dark/Light</button>
      </div>
    </div>
  )
}

export default page