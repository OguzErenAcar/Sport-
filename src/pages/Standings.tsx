import React, { useEffect, useState } from "react";
import { getStanding } from "../Api/Routers";
import { useParams } from "react-router-dom";



 
interface Standing {
  rank: number;
  team: {
    name: string;
  };
  all: {
    played: number;
    win: number;
    draw: number;
    lose: number;
    goals: {
      for: number;
      against: number;
    };
  };
  goalsDiff: number;
  points: number;
}

 interface leagueID{name:string ,id: number}

function Standings() {
  const { league } = useParams<{ league?: string }>();

  const leagueIDs:  Array<leagueID> = [
    {name:"Süperlig" ,id: 203},
    {name:"Serie A",id: 135},
    {name:"Bundesliga",id: 78},
    {name:"Premier League",id: 39},
    {name:"Lique1",id: 61},
    {name:"Laliga",id: 140},
  ];

  const [standings, setStandings] = useState<Standing[]>([]);

  useEffect(() => {
    const league_ = league ?? "Süperlig";
    console.log(league_);
    getleagueStanding(league_);
  }, [league]);

  const getleagueStanding = (value: string) => {
    const id = Object.values(
      leagueIDs.filter((i:leagueID, j:number) => i.name===value)[0]
    )[1]; 
     getStanding({ season: "2023", league: id }).then((res: any) => {
       setStandings(res.response[0].league.standings[0]);
      });
  };

  return (
    <div className="standingsContainer">
      <div className="standings table-responsive">
        <table className="table bg-waring table-hover ">
          <thead>
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
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Standings;

