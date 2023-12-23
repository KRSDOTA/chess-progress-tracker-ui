import "./ChessBlitz.css"
import GameStats from "../game/GameStats";
import { Box, Card } from "@mui/material";
import { TestLine } from "../graph/TestLine";

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
            <TestLine />
          </Box>
        </Card>
      );
    
}