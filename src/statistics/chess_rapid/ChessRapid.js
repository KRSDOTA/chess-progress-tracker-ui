import './ChessRapid.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import { LineGraph } from '../graph/LineGraph';


function ChessRapid({rapidStats, rapidData}) {

  console.log(rapidData);

  const noMatchDataPresent = () => {
    return !rapidData || !rapidData.points || !rapidData.points.length;
  }
  console.log(noMatchDataPresent());

    return (
      <Card className="chess-rapid-container">
        <h2>
          Rapid Stats
        </h2>
        <GameStats gameStats={rapidStats} />
        <h2>
          Rating Trends
        </h2>
        <Box>
          {!noMatchDataPresent() && <LineGraph dataPoints={rapidData} label='Rapid Rating'/>}
        </Box>
      </Card>
    );
  }

export default ChessRapid;