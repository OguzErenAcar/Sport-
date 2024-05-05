import React, { useEffect, useState } from "react";
import { getNextMatches } from "../../Api/Routers";

interface Team {
  logo: string;
  name: string;
}

interface Fixture {
  date: string;
}

interface Match {
  teams: {
    home: Team;
    away: Team;
  };
  fixture: Fixture;
}

function MatchsTable() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    const params = {
      team: "777",
      next: "5",
    };
    getNextMatches(params).then((res:any) => {
      setMatches(res.response);
    });
  }, []);

  return (
    <table className="table">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td>Date</td>
          <td></td>
          <td></td>
        </tr>
        {matches.map((item, j) => (
          <tr key={j}>
            <td>
              <img
                style={{ width: 30 }}
                alt=""
                src={item.teams.home.logo}
                className="img-fluid"
              />
            </td>
            <td>
              <label>{item.teams.home.name}</label>
            </td>
            <td>
              <label>{item.fixture.date.substring(0, 10)}</label>
            </td>
            <td>
              <label>{item.teams.away.name}</label>
            </td>
            <td>
              <img
                style={{ width: 30 }}
                alt=""
                src={item.teams.away.logo}
                className="img-fluid"
              />
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
}

export default MatchsTable;

