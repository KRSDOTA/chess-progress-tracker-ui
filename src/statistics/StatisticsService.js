
export function getStatisticsForUsername(username){
    return fetch("http://localhost:8080/api/statistics/" + username,   
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
}