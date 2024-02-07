import React from 'react'
import Base from './Base'
import SignIn from './SignIn'

const Start = () => {
  return (
    <div className='flex lg:flex-row flex-col'>
        <Base className="flex-1"/>
        <SignIn className="flex-1" />
    </div>  
  )
}

export default Start