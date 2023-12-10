function ChessRapid({rapidData}) {
  
  console.log(rapidData);

    return (
      <>
      <h1>
        Rapid Stats
      </h1>
      <div>
        Last 
        <div>
          {rapidData.last.date}
        </div>
        <div>
          {rapidData.last.rating}
        </div>
        <div> 
          {rapidData.last.rd}
        </div>
      </div>
      <div>
        Best 
        <div>
          {rapidData.best.date}
        </div>
        <div>
          {rapidData.best.rating}
        </div>
        <div>
          {rapidData.best.game}
        </div>
      </div>
      <div>
        Record
        <div>
          {rapidData.record.win}
        </div>
        <div>
          {rapidData.record.loss}
        </div>
      </div>
      </>
    );
  }

export default ChessRapid;