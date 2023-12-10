import GameStats from "../game/GameStats";

export default function ChessBullet({bulletData}) {


    return (
        <>
        <h1>
          Bullet Stats
        </h1>
        <GameStats gameStats={bulletData} />
        </>
      );
    
}