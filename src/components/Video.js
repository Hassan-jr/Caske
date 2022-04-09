import React from 'react'
import ReactPlayer from 'react-player/youtube'

const Video = () => {
  return (
    <div className="videos">
    
   
      <div className="video">
      <ReactPlayer  width={"40vw"} url='https://youtu.be/3bNgyOSNH_U' />
      </div>
      <div className="video">
      <ReactPlayer  width={"40vw"} url='https://youtu.be/1TRgc0N5OVU' />
      </div>
     

    </div>
  )
}

export default Video