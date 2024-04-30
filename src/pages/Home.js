import React from 'react'
import Navbar from '../Components/Navbar' 
import LastNews from '../Components/Home/LastNews'
import MatchesTable from '../Components/Home/MatchesTable'
import Carousel from '../Components/Home/Carousel'

function Home() {
  return (
    <div className='home'> 
      <div className='topdiv'>
      <Carousel/>
      <MatchesTable/>
      </div>
      <LastNews/>
    </div>
  )
}

export default Home
