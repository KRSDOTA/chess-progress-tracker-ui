import './ChessRapid.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import { LineGraph } from '../graph/LineGraph';
import { isMatchDataPresent } from '../MatchDataHelpers';


function ChessRapid({rapidStats, rapidMatchData}) {

    return (
      <Card className="chess-rapid-container">
        <h2>
          Rapid Stats
        </h2>
        <GameStats gameStats={rapidStats} />
        <Box>
          {isMatchDataPresent(rapidMatchData) && <LineGraph dataPoints={rapidMatchData.points} graphLabel='Rapid Rating' />}
        </Box>
      </Card>
    );
  }

export default ChessRapid;