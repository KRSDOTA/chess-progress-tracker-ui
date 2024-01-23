import './ChessBullet.css'
import GameStats from "../game/GameStats";
import { Box, Card } from '@mui/material';
import { LineGraph } from '../graph/LineGraph';

export default function ChessBullet({bulletData}) {


    return (
        <Card className='chess-bullet-container'>
          <h2>
            Bullet Stats
          </h2>
          <GameStats gameStats={bulletData} />
          <h2>
          Rating Trends
          </h2>
          <Box>
            <LineGraph label='Bullet Rating' />
          </Box>
        </Card>
      );
    
}