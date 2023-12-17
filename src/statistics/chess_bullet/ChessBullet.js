import './ChessBullet.css'
import GameStats from "../game/GameStats";

export default function ChessBullet({bulletData}) {


    return (
        <div className='chess-bullet-container'>
          <h2>
            Bullet Stats
          </h2>
          <GameStats gameStats={bulletData} />
        </div>
      );
    
}