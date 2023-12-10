import ChessRapid from "./chess_rapid/ChessRapid";
import { useEffect, useState } from "react";

export default function Statistics() {
    const [statsData, setStatsData] = useState(null);

    useEffect(() => {
      fetch("http://localhost:8080/api/statistics/krsdota",   
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((response) => 
        response.json()
      ).then(data => 
        setStatsData(data)
      );
    }, []);

    return (
      <>
        { statsData && <ChessRapid rapidData={statsData.chess_rapid} /> }
      </>
    );

}