import React from 'react'
import Header from '../components/Header';
import Homecard from '../components/Homecard';
import Homepics from '../components/Homepics';
import Video from '../components/Video';


function Home() {

const user = JSON.parse(localStorage.getItem('user'))
console.log(user);

  return (
    <div>
      <Header/>
      <Homecard/>
      <Video/>
      <Homepics/>
      
      
    </div>
  )
}

export default Home