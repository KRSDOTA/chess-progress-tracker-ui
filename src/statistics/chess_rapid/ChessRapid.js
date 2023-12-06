import { useEffect, useState } from "react";

function ChessRapid() {

    const [statsData, setStatsData] = useState("hi mom");

    useEffect(() => {
      fetch("http://127.0.0.1:8080/api/statistics/krsdota",   
      {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      }).then((response) => {
        console.log(response);
        setStatsData(response);
      });
    }, []);

    return (
        <div>
          {statsData}
      </div>
    );
  }

export default ChessRapid;