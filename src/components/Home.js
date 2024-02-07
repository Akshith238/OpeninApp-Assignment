import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import Navbar from './Navbar'
import { useState } from 'react'

const Home = () => {
  const [content,setContent]=useState('')
  const [toggle,setToggle]=useState(false)
  return (
    <div className='relative flex flex-col lg:flex-row'>
      <div className='lg:hidden flex'>
        <Navbar content={content} toggle={toggle} setToggle={setToggle}/>
      </div>
      <div className='lg:hidden flex w-[140px] text-[24px] p-5 items-center font-figtree font-semibold text-base leading-8 text-black'>
            {content === 'Upload'? 'Upload CSV': content}
      </div>
      {toggle?(
          <div className='absolute z-10'>
            <SideBar setContent={setContent} setToggle={setToggle}/>
          </div>
        ):(
        <div className='hidden lg:flex'>
            <SideBar setContent={setContent}/>
        </div>
      )}
        <Main content={content}/>
    </div>
  )
}

export default Home