const { addPoints, getGameWinner, getRealGameResult, getSetResult } = require('./TennisGame.js');

describe('Tennis Game', () => {

    test('should add points to a player score', () => {
        const players = {
            'P1': { score: 3, setScore: 0 },
            'P2': { score: 0, setScore: 0 }
          }
        expect(addPoints('P1',players)).toStrictEqual({ score: 4, setScore: 1 })
        expect(addPoints('P2',players)).toStrictEqual({ score: 1, setScore: 0 })
  })

    test('should return Game Winner', () => {
        const playersFirstTestCase = {
            'P1': { score: 4, setScore: 1 },
            'P2': { score: 1, setScore: 0 }
          }
        expect(getGameWinner('P1', playersFirstTestCase)).toBe(true)
        expect(getGameWinner('P2', playersFirstTestCase)).toBe(false)
        const playersSecondeTestCase = {
            'P1': { score: 0, setScore: 0 },
            'P2': { score: 1, setScore: 0 }
          }
        expect(getGameWinner('P1', playersSecondeTestCase)).toBe(false)
        expect(getGameWinner('P2', playersSecondeTestCase)).toBe(false)
    })


    test('should calculate the real game result', () => {
        const players = {
            'P1': { score: 3, setScore: 1 },
            'P2': { score: 2, setScore: 0 }
          }
        const result = getRealGameResult(players)
        expect(result['P1']).toBe(40)
        expect(result['P2']).toBe(30)
    })

    test('should get the set result', () => {
        const players = {
            'P1': { score: 3, setScore: 1 },
            'P2': { score: 1, setScore: 2 }
          }
        const result = getSetResult(players)
        expect(result).toBe('(1,2)')
  })
})
