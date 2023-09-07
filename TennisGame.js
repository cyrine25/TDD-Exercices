const getGameWinner = (playerName, players) => {
  const updatedPlayers={...players}
    const opponent = playerName === 'P1' ? 'P2' : 'P1'
    return (
      updatedPlayers[playerName].score > 3 &&
      updatedPlayers[playerName].score > updatedPlayers[opponent].score
    )
}
const addPoints=(playerName,players)=> {
  const updatedPlayers = { ...players }
  
  updatedPlayers[playerName].score += 1

    if (updatedPlayers[playerName].score > 3 && getGameWinner(playerName,updatedPlayers)) {
      updatedPlayers[playerName].setScore += 1
      
  }
  return updatedPlayers[playerName]
}

const getRealGameResult = (players) => {
  const scoreCases = [0,15,30,40]
  
  return Object.keys(players).reduce((result, playerName) => {
    const playerScore = players[playerName].score
    result[playerName] = playerScore < 3 ? scoreCases[playerScore] : 40
    return result
  }, {})
}
  
const getSetResult=(players)=> {
  return `(${players['P1'].setScore},${players['P2'].setScore})`
}
  
  
module.exports = {addPoints,getGameWinner,getRealGameResult,getSetResult}