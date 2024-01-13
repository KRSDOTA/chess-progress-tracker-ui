import './Statistics.css'
import SearchBar from "./search/SearchBar";
import ChessBlitz from "./chess_blitz/ChessBlitz";
import ChessBullet from "./chess_bullet/ChessBullet";
import ChessRapid from "./chess_rapid/ChessRapid";
import { useState } from "react";
import { getRatingDeltaAcrossTimePeriod, getStatisticsForUsername } from "./StatisticsService";
import NoStatsFound from "./NoStatsFound";
import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

function StatisticsOverview() {
    const [statsData, setStatsData] = useState(null);
    const [searchQuery, setCurrentSearchQuery] = useState('');
    const [matchData, setCurrentMatchData] = useState([]);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const searchStatsApiHandler = async (searchQueryEvent) => {
      const currentSearchQuery = searchQueryEvent.target.value;
      if(!currentSearchQuery){
        return;
      }
      
      setCurrentSearchQuery(currentSearchQuery);
      
      const response = await getStatisticsForUsername(currentSearchQuery);
      const data = await response.json();
      setStatsData(data);
    }

    const convertToUTCDate = (date) => new Date(date).toISOString().split('T')[0];

    const getMatchData = async(date, id) => {
      const utcDate = convertToUTCDate(date);
      
      if (id === "start") {
        setStartDate(utcDate);
      } else if (id === "end") {
        setEndDate(utcDate);
      }

      if (startDate && endDate) {
        const response = await getRatingDeltaAcrossTimePeriod(searchQuery, startDate, endDate);
        const matchDataUpdate = await response.json();
        console.log(matchDataUpdate);
        setCurrentMatchData(matchDataUpdate);
      }
    }


    const noStatsPresent = () => {
      return !statsData || (!statsData.chess_rapid && !statsData.chess_blitz && !statsData.chess_bullet);
    }

    return (
      <Box className="statistics-container">
        <h1>Displaying Game Stats for {searchQuery.toUpperCase()}</h1>
        <SearchBar onSearchHandler={searchStatsApiHandler}/>
        <DatePicker id="date-picker-start" onChange={(date) => getMatchData(date, "start")} />
        <DatePicker id="date-picker-end" onChange={(date) => getMatchData(date, "end")} />
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