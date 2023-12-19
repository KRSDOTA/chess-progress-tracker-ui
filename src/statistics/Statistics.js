import './Statistics.css'
import SearchBar from "./search/SearchBar";
import ChessBlitz from "./chess_blitz/ChessBlitz";
import ChessBullet from "./chess_bullet/ChessBullet";
import ChessRapid from "./chess_rapid/ChessRapid";
import { useEffect, useState } from "react";
import { getStatisticsForUsername } from "./StatisticsService";
import NoStatsFound from "./NoStatsFound";
import { Box } from '@mui/material';

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

    function noStatsPresent() {
      return !statsData || (!statsData.chess_rapid && !statsData.chess_blitz && !statsData.chess_bullet);
    }

    return (
      <Box className="statistics-container">
        <h1>Displaying Game Stats for {searchQuery.toUpperCase()}</h1>
        <SearchBar onSearchHandler={searchStatsApiHandler}/> 
        <Box className='statistics-game-container'>
          {noStatsPresent() && <NoStatsFound />}
          { statsData && statsData.chess_rapid && <ChessRapid rapidData={statsData.chess_rapid} /> }
          { statsData && statsData.chess_blitz && <ChessBlitz blitzData={statsData.chess_blitz} /> }
          { statsData && statsData.chess_bullet && <ChessBullet bulletData={statsData.chess_bullet} /> }
        </Box>
      </Box>
    );

}