import "./ChessBlitz.css"
import GameStats from "../game/GameStats";
import { Box, Card } from "@mui/material";
import { LineGraph } from "../graph/LineGraph";

export default function ChessBlitz({blitzData}) {


    return (
        <Card className="chess-blitz-container">
          <h2>
            Blitz Stats
          </h2>
          <GameStats gameStats={blitzData} />
          <h2>
            Rating Trends
          </h2>
          <Box>
            <LineGraph label='Blitz Rating'/>
          </Box>
        </Card>
      );
    
}