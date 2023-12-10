import ChessBlitz from "./chess_blitz/ChessBlitz";
import ChessBullet from "./chess_bullet/ChessBullet";
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
        { statsData && <ChessBlitz blitzData={statsData.chess_blitz} /> }
        { statsData && <ChessBullet bulletData={statsData.chess_bullet} /> }
      </>
    );

}