import { createLocalDate } from "../PraseDateHelper";

export default function GameStats({ gameStats }) {
    const lastDate = createLocalDate(gameStats.last.date);
    const bestDate = createLocalDate(gameStats.best.date);

    return (
        <>
        { gameStats.last && <div>
        <h2>
          Last
        </h2>
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
        <h2>
          Best
        </h2> 
        <div>
          {'Date - ' + bestDate}
        </div>
        <div>
          {'Rating - ' + gameStats.best.rating}
        </div>
        <div>
          {'Best Game - ' + gameStats.best.game}
        </div>
      </div> }
      { gameStats.record && <div>
        <h2>
          Record
        </h2>
        <div>
          {'Wins - ' + gameStats.record.win}
        </div>
        <div>
          {'Losses - ' +  gameStats.record.loss}
        </div>
      </div> }
        </>
    )

}