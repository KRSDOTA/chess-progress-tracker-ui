import SearchBar from "./search/SearchBar";
import ChessBlitz from "./chess_blitz/ChessBlitz";
import ChessBullet from "./chess_bullet/ChessBullet";
import ChessRapid from "./chess_rapid/ChessRapid";
import { useEffect, useState } from "react";
import { getStatisticsForUsername } from "./StatisticsService";

export default function Statistics() {
    const [statsData, setStatsData] = useState(null);
    const [searchQuery, setCurrentSearchQuery] = useState('');

    function searchStatsApiHandler(searchQueryEvent) {
      const currentSearchQuery = searchQueryEvent.target.value;
      if(!currentSearchQuery){
        return;
      }
      
      setCurrentSearchQuery(currentSearchQuery);
      getStatisticsForUsername(currentSearchQuery)
      .then((response) => 
          response.json()
        ).then(data => 
          setStatsData(data)
      )

    }

    return (
      <div className="Statistics">
        <SearchBar onSearchHandler={searchStatsApiHandler}/>
        { statsData && statsData.chess_rapid && <ChessRapid rapidData={statsData.chess_rapid} /> }
        { statsData && statsData.chess_blitz && <ChessBlitz blitzData={statsData.chess_blitz} /> }
        { statsData && statsData.chess_bullet && <ChessBullet bulletData={statsData.chess_bullet} /> }
      </div>
    );

}