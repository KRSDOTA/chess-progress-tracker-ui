import { useEffect, useState } from "react";

function ChessRapid() {
 
    const [statsData, setStatsData] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8080/api/statistics/krsdota",   
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => {
        console.log(response);
        return response.json();
      }).then(data => {
        console.log(data);
        setStatsData(data.chess_rapid.best.rating);
      });
    }, []);

    return (
        <div>
          {statsData}
      </div>
    );
  }

export default ChessRapid;