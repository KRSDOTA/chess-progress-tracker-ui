import './ChessRapid.css'
import GameStats from "../game/GameStats";


function ChessRapid({rapidData}) {
    
    return (
      <div className="chess-rapid-container">
        <h2>
          Rapid Stats
        </h2>
        <GameStats gameStats={rapidData} />
      </div>
    );
  }

export default ChessRapid;