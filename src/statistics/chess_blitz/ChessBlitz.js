import "./ChessBlitz.css"
import GameStats from "../game/GameStats";
import { Box, Card } from "@mui/material";
import { LineGraph } from "../graph/LineGraph";
import { isMatchDataPresent } from "../MatchDataHelpers";

export default function ChessBlitz({blitzStats, blitzMatchData}) {

    return (
        <Card className="chess-blitz-container">
          <h2>
            Blitz Stats
          </h2>
          <GameStats gameStats={blitzStats} />
          <Box>
            {isMatchDataPresent(blitzMatchData) && <LineGraph dataPoints={blitzMatchData.points} graphLabel='Blitz Rating'/>}
          </Box>
        </Card>
      );
    
}