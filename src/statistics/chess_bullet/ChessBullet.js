import './ChessBullet.css'
import GameStats from "../game/GameStats";

export default function ChessBullet({bulletData}) {


    return (
        <div className='chess-bullet-container'>
          <h2>
            Bullet Stats
          </h2>
          <GameStats gameStats={bulletData} />
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