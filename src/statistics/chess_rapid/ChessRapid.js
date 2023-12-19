import './ChessRapid.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';


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
          1 Day 
        </Box>
        <Box>
          3 Day 
        </Box>
        <Box>
          7 Day 
        </Box>
      </Card>
    );
  }

export default ChessRapid;