import React, { useEffect, useState } from "react";
import { getStanding } from "../Api/Routers";
import { useParams } from "react-router-dom";


function Standings() {

 
 const {league}= useParams();


  const leagueIDs = [
    { Süperlig: 203 },
    { "Serie A": 135 },
    { Bundesliga: 78 },
    { "Premier League": 39 },
    { Lique1: 61 },
    { Laliga: 140 },
  ];
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const league_=league===undefined?"Süperlig":league
    console.log(league_)
    getleagueStanding(league_);
  }, [league]);

  
  const getleagueStanding = (value) => {
    const id =Object.values(leagueIDs.filter((item,j)=>Object.keys(item)[0]===value)[0])[0]
 
    getStanding({ season: "2023", league: id }).then(
      (res) => {
        setStandings(res.response[0].league.standings[0]);
      }
    );
  };

  return ( 
      <div className="standingsContainer">
        <div className="standings">
          <table className="table bg-waring table-hover table-sm">
            <thead >
              <tr key="header">
                <th scope="col">Sıra</th>
                <th scope="col">Takımlar</th>
                <th scope="col">O</th>
                <th scope="col">G</th>
                <th scope="col">B</th>
                <th scope="col">M</th>
                <th scope="col">A</th>
                <th scope="col">Y</th>
                <th scope="col">Avj</th>
                <th scope="col">Puan</th>
              </tr>
            </thead>
            <tbody className=" table-dark">
              {standings.length > 0 ? (
                standings.map((item, j) => (
                  <tr key={j}>
                    <td>{item.rank}</td>
                    <td>{item.team.name}</td>
                    <td>{item.all.played}</td>
                    <td>{item.all.win}</td>
                    <td>{item.all.draw}</td>
                    <td>{item.all.lose}</td>
                    <td>{item.all.goals.for}</td>
                    <td>{item.all.goals.against}</td>
                    <td>{item.goalsDiff}</td>
                    <td>{item.points}</td>
                  </tr>
                ))
              ) : (
                <tr> 
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>   
  );
}

export default Standings;
