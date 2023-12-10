import GameStats from "../game/GameStats";

export default function ChessBlitz({blitzData}) {


    return (
        <>
        <h1>
          Blitz Stats
        </h1>
        <GameStats gameStats={blitzData} />
        </>
      );
    
}