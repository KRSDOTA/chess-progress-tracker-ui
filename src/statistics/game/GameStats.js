import './GameStats.css'
import { createLocalDate } from "../PraseDateHelper";

export default function GameStats({ gameStats }) {
    
    const lastDate = gameStats && createLocalDate(gameStats.last.date);
    const bestDate = gameStats.best && createLocalDate(gameStats.best.date);

    return (
        <div className="game-object-container">
          { gameStats.last && <div>
          <h3>
            Last
          </h3>
          <div>
            {'Date - ' + lastDate}
          </div>
          <div>
            {'Rating - ' + gameStats.last.rating}
          </div>
          <div> 
            {'RD - ' + gameStats.last.rd}
          </div>
        </div> }
        { gameStats.best && <div>
          <h3>
            Best
          </h3> 
          <div>
            {'Date - ' + bestDate}
          </div>
          <div>
            {'Rating - ' + gameStats.best.rating}
          </div>
          <div>
            <a href={gameStats.best.game}>Best Performance</a>
          </div>
        </div> }
        { gameStats.record && <div>
          <h3>
            Record
          </h3>
          <div>
            {'Wins - ' + gameStats.record.win}
          </div>
          <div>
            {'Losses - ' +  gameStats.record.loss}
          </div>
        </div> }
      </div>
    )

}