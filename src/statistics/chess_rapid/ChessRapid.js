import './ChessRapid.css'
import GameStats from "../game/GameStats";


function ChessRapid({rapidData}) {
    
    return (
      <div className="chess-rapid-container">
        <h2>
          Rapid Stats
        </h2>
        <GameStats gameStats={rapidData} />
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

export default ChessRapid;