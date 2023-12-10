import { createLocalDate } from "../PraseDateHelper";


function ChessRapid({rapidData}) {
    
    const lastDate = createLocalDate(rapidData.last.date);
    const bestDate = createLocalDate(rapidData.best.date);
    
    return (
      <>
      <h1>
        Rapid Stats
      </h1>
      <div>
        <h2>
          Last
        </h2>
        <div>
          {'Date - ' + lastDate}
        </div>
        <div>
          {'Rating - ' + rapidData.last.rating}
        </div>
        <div> 
          {'RD - ' + rapidData.last.rd}
        </div>
      </div>
      <div>
        <h2>
          Best
        </h2>
        <div>
          {'Date - ' + bestDate}
        </div>
        <div>
          {'Rating - ' + rapidData.best.rating}
        </div>
        <div>
          {'Best Game - ' + rapidData.best.game}
        </div>
      </div>
      <div>
        <h2>
          Record
        </h2>
        <div>
          {'Wins - ' + rapidData.record.win}
        </div>
        <div>
          {'Losses - ' +  rapidData.record.loss}
        </div>
      </div>
      </>
    );
  }

export default ChessRapid;