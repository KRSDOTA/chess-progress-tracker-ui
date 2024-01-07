
export function getStatisticsForUsername(username) {
    return fetch("http://localhost:8080/api/statistics/" + username,   
    {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      }
    });
}

/**
 * Get the rating delta for a given player across a time period
 * @param {*} username the username of the player
 * @param {*} start start of the time period
 * @param {*} end end of the time period
 * @returns A set of rating deltas for the given player across the time period, grouped by "DISCIPLINE" in descending order
 */
export function getRatingDeltaAcrossTimePeriod(username, start, end) {
  return fetch("http://localhost:8080/api/rating-delta/" + username + "/start/" + start + "/end/" + end,   
  {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    }
  });
}