import "./ChessBlitz.css"
import GameStats from "../game/GameStats";

export default function ChessBlitz({blitzData}) {


    return (
        <div className="chess-blitz-container">
          <h2>
            Blitz Stats
          </h2>
          <GameStats gameStats={blitzData} />
          <h2>
            Rating Trends
          </h2>
          <div>
            1 Day 
          </div>
          <div>
            3 Day 
          </div>
          <div>
            7 Day 
          </div>
        </div>
      );
    
}