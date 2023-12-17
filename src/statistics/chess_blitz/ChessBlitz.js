import "./ChessBlitz.css"
import GameStats from "../game/GameStats";

export default function ChessBlitz({blitzData}) {


    return (
        <div className="chess-blitz-container">
          <h2>
            Blitz Stats
          </h2>
          <GameStats gameStats={blitzData} />
        </div>
      );
    
}