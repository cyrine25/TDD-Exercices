const addPoints=(player,gameScore)=> {
    const gameScoreResult = gameScore.map((score, index) => {
        if ((player === '1' && index === 0) || (player === '2' && index === 1)) {
          return score + 1;
        }
        return score;
    });
    return gameScoreResult
}

const getRealGameResullt = (gameScoreResult) => {
    const finalResult = gameScoreResult.map((score) => {
      switch (score) {
        case 1:
          return 15;
        case 2:
          return 30;
        case 3:
          return 40;
        default:
          return score;
      }
    });
  
    return finalResult;
}

const getGameSet = (gameScore, setScore) => {
    const currentSet = setScore.map((score,index) => {
      if (gameScore[0] > 40 && gameScore[1] < gameScore[0] && index===0) {
        return score + 1;
        }
        if (gameScore[1] > 40 && gameScore[1] > gameScore[0] && index===1) {
            return score + 1;
        }
      return score;
    });
  
    const result = `(${currentSet.join(',')})`;
    return result;
  };
  
  
module.exports = {addPoints,getRealGameResullt,getGameSet}