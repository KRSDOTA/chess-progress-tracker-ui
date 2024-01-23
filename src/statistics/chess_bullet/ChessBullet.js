import './ChessBullet.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import { LineGraph } from '../graph/LineGraph';
import { isMatchDataPresent } from '../MatchDataHelpers';

export default function ChessBullet({bulletStats, bulletMatchData}) {

    return (
        <Card className='chess-bullet-container'>
          <h2>
            Bullet Stats
          </h2>
          <GameStats gameStats={bulletStats} />
          <Box>
            {isMatchDataPresent(bulletMatchData) && <LineGraph dataPoints={bulletMatchData.points} graphLabel='Bullet Rating' /> }
          </Box>
        </Card>
      );
    
}