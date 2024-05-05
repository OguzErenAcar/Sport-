import React, { useEffect, useState } from "react";
import { getNextMatches } from "../../Api/Routers";

function MatchsTable() {
  const [matchs, setmatchs] = useState([]);

  useEffect(() => {
    const params = {
      team: "777",
      next: "5",
    };
    getNextMatches(params).then((res) => {
      setmatchs(res.response);
    });
  }, []);

  return (
    <table class="table  ">
    
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>Date</td>
          <td></td>
          <td></td>
        </tr>
        {matchs.map((item,j)=>(
            <tr>
                    <td><img style={{width:30}} alt="" src= {item.teams.home.logo}  class="img-fluid " /> </td>
                    <td><label  >{item.teams.home.name}</label></td>
                    <td><label  >{ item.fixture.date.substring(0,10)  }</label></td>
                    <td><label  >{ item.teams.away.name }</label></td>
                    <td><img style={{width:30}} alt="" src=   {item.teams.away.logo}  class="img-fluid  " /> </td>

            </tr>
        ))}
        <tr> 
        </tr>
      
      </tbody>
    </table>
  );
}

export default MatchsTable;
