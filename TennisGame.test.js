const {addPoints,getRealGameResullt,getGameSet} = require('./TennisGame');

describe('Tennis Game', () => {
    beforeEach(() => {
        gameScore = [0, 0]
        setScore=[0,0]
      });
    test('should return gameScore with each player scoring', () => {
       
        expect(addPoints('1', gameScore)).toStrictEqual([1, 0])
        expect(addPoints('2',gameScore)).toStrictEqual([0,1])
    })

    test('should transforms gameScore', () => {
        expect(getRealGameResullt([1,2])).toStrictEqual([15, 30])
        expect(getRealGameResullt([2,3])).toStrictEqual([30, 40])
    })
    
    test('should return set result id first player win', () => {
    expect(getGameSet([45,30],setScore)).toStrictEqual('(1,0)')
    })

    test('should return set result if seconde player win', () => {
    expect(getGameSet([30,45],setScore)).toStrictEqual('(0,1)')
    })

})
