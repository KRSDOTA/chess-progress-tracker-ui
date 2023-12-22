import './ChessRapid.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import ProgressChart from '../graph/ProgressLineChart';


function ChessRapid({rapidData}) {
    
    return (
      <Card className="chess-rapid-container">
        <h2>
          Rapid Stats
        </h2>
        <GameStats gameStats={rapidData} />
        <h2>
          Rating Trends
        </h2>
        <Box>
          <ProgressChart />
        </Box>
      </Card>
    );
  }

export default ChessRapid;