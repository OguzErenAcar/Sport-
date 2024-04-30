import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



function LeaguesList() {

  const navigate =useNavigate()
  const leagueImgs=
  [{name:"Süperlig",src:'https://www.tff.org/Resources/TFF/Images/0000000015/TFF/TFF-Logolar/2023-trendyol/trendyol-super-lig-dikey.png'},
   {name:"Serie A",src:'https://www.fifplay.com/img/public/serie-a-logo-transparent.png'},
   {name:"Bundesliga",src:'https://upload.wikimedia.org/wikipedia/tr/thumb/d/d9/Bundesliga_2017_logo.png/180px-Bundesliga_2017_logo.png'},
   {name:"Premier League",src:'https://www.fifplay.com/img/public/premier-league-2-logo.png'},
   {name:"Lique1",src:'https://lesdieuxdufoot.alwaysdata.net/public/logo/competition/ligue_1_uber_eats_2020.png'},
   {name:"Laliga",src:'https://logos-world.net/wp-content/uploads/2023/07/LaLiga-Logo.png'}
  ] 

   
  return (
    <div className='leagues'>
      <div className='leaguesdiv'>
      <label>Leagues</label>
      <div className='leagueslistdiv'>
      <div className='leagueslist'>
        {leagueImgs.map((item,j)=>(
          <Link key={j} to= {"/standings/"+item.name}>
           <img  alt="" src={item.src}/>
          </Link>
        ))}
       </div>
      </div>
      </div>
    </div>
  )
}

export default LeaguesList
