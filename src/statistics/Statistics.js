import './Statistics.css'
import SearchBar from "./search/SearchBar";
import ChessBlitz from "./chess_blitz/ChessBlitz";
import ChessBullet from "./chess_bullet/ChessBullet";
import ChessRapid from "./chess_rapid/ChessRapid";
import { useState } from "react";
import { getRatingDeltaAcrossTimePeriod, getRecentGamesForPlayer, getStatisticsForUsername } from "./StatisticsService";
import NoStatsFound from "./NoStatsFound";
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function StatisticsOverview() {
    const [statsData, setStatsData] = useState(null);
    const [searchQuery, setCurrentSearchQuery] = useState('');
    const [matchData, setCurrentMatchData] = useState([]);

    function searchStatsApiHandler(searchQueryEvent) {
      const currentSearchQuery = searchQueryEvent.target.value;
      if(!currentSearchQuery){
        return;
      }
      
      setCurrentSearchQuery(currentSearchQuery);

      getStatisticsForUsername(currentSearchQuery)
      .then((response) => response.json())
      .then(data => setStatsData(data));

      getRatingDeltaAcrossTimePeriod(currentSearchQuery, "2023-01-01", "2023-12-31")
      .then((response) => response.json())
      .then(matchData => {setCurrentMatchData(matchData); console.log(matchData)});

    }

    function noStatsPresent() {
      return !statsData || (!statsData.chess_rapid && !statsData.chess_blitz && !statsData.chess_bullet);
    }

    return (
      <Box className="statistics-container">
        <h1>Displaying Game Stats for {searchQuery.toUpperCase()}</h1>
        <SearchBar onSearchHandler={searchStatsApiHandler}/>
        <DatePicker />
        <DatePicker />
        {/* <Box className="date-picker-container">
          <DatePickerStart />
          <DatePickerEnd />
        </Box>  */}
        <Box className='statistics-game-container'>
          {noStatsPresent() && <NoStatsFound />}
          { statsData && statsData.chess_rapid && <ChessRapid rapidData={statsData.chess_rapid} /> }
          { statsData && statsData.chess_blitz && <ChessBlitz blitzData={statsData.chess_blitz} /> }
          { statsData && statsData.chess_bullet && <ChessBullet bulletData={statsData.chess_bullet} /> }
        </Box>
      </Box>
    );

}
export default StatisticsOverview;