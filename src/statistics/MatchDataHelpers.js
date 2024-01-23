export const isMatchDataPresent = (matchData) => {
    return matchData && matchData.points && matchData.points.length;
  }

export const getMatchesForDiscipline = (discipline, matchData) => {
  const filteredStuff = matchData.filter(matchDataSet => matchDataSet.discipline === discipline);
  return filteredStuff[0];
}