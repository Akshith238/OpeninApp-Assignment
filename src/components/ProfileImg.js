import React from 'react'

const ProfileImg = ({profile}) => {
  return (
    <div className="w-6">
        <img src={profile}  alt="profile" className='rounded-full' />
    </div>
  )
}

export default ProfileImg