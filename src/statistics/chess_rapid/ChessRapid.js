import './ChessRapid.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import { TestLine } from '../graph/TestLine';


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
          <TestLine />
        </Box>
      </Card>
    );
  }

export default ChessRapid;