import React from 'react'
import Navbar from '../Components/Navbar' 
import LastNews from '../Components/Home/LastNews'
import MatchsTable from '../Components/Home/MatchsTable'
import Carousel_ from '../Components/Home/Carousel'

function Home() {
  return (
    <div className='home'>  
    <div className='topContainer'>
      <div className='topdiv'>
        <div className='CarouselCont'>
         <Carousel_/>
        </div>
        <div className='MatchesTableCont'>
          <label style={{ display:"block",marginLeft:30,marginTop:60,textAlign:'center',color:"white",fontSize:55}}>Matchs</label>
        <MatchsTable/>
        </div> 
      </div>
    </div>
      <LastNews/>
   
    </div>
  )
}

export default Home
