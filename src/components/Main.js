import React,{useState} from 'react'
import Navbar from './Navbar'
import Upload from './Upload'
import Display from './Display'

const Main = ({content,profile}) => {
  const [data, setData] = useState([]);
  return (
    <div className='flex-col w-full h-[1047px] bg-halfwhite'>
        <Navbar content={content} profile={profile}/>
        {content==="Upload" && (
            <div className='flex flex-col gap-5'>
                <Upload setData={setData}/>
                {data.length > 0 && <Display data={data} />}
            </div>
        )}
        
    </div>
  )
}

export default Main