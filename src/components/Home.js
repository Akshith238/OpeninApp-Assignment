import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import { useState } from 'react'

const Home = () => {
  const [content,setContent]=useState('')
  return (
    <div className='flex'>
        <SideBar setContent={setContent}/>
        <Main content={content}/>
    </div>
  )
}

export default Home