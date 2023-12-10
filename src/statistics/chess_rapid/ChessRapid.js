import GameStats from "../game/GameStats";

function ChessRapid({rapidData}) {
    
    return (
      <>
      <h1>
        Rapid Stats
      </h1>
      <GameStats gameStats={rapidData}/>
      </>
    );
  }

export default ChessRapid;