import SearchBar from "./search/SearchBar";
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

    function searchStatsApiHandler(searchQuery) {
      console.log('searched API with query', searchQuery);
    }

    return (
      <div className="Statistics">
        <SearchBar onSearch={searchStatsApiHandler}/>
        { statsData && <ChessRapid rapidData={statsData.chess_rapid} /> }
        { statsData && <ChessBlitz blitzData={statsData.chess_blitz} /> }
        { statsData && <ChessBullet bulletData={statsData.chess_bullet} /> }
      </div>
    );

}