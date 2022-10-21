const {
  sumOfOdds,
  arraySubtract,
  surroundArray,
  longestString,
  sToR,
  divisibleBy4And7,
  exclamationAndQuestion,
  countAB,
  createCharacter,
  pairUp,
} = require('./main.js')


describe('sumOfOdds', () => {
  
  it('sumOfOdds - positive numbers', () => {
    expect(sumOfOdds(5, 10)).toBe(21);
    expect(sumOfOdds(5, 11)).toBe(32);
    expect(sumOfOdds(35, 55)).toBe(495);
  })

  
  it('sumOfOdds - negative numbers', () => {
    expect(sumOfOdds(-10, -5)).toBe(-21);
    expect(sumOfOdds(-10, 5)).toBe(-16);
  })

  
  it('sumOfOdds - consecutive numbers', () => {
    expect(sumOfOdds(2, 3)).toBe(3);
    expect(sumOfOdds(10, 11)).toBe(11);
  })
})

describe('arraySubtract', () => {
  
  it(`arraySubtract`, () => {
    expect(arraySubtract([7,9],[2,6])).toEqual([5,3]);
    expect(arraySubtract([5,4,7],[9,3,2])).toEqual([-4, 1, 5]);
    expect(arraySubtract([16,19,10],[5,5,5])).toEqual([11, 14, 5]);
    expect(arraySubtract([51,20,3],[0,2,1])).toEqual([51, 18, 2]);
    expect(arraySubtract([0,0,0],[0,0,0])).toEqual([0, 0, 0]);
  })
  
  it(`arraySubtract - zeroes`, () => {
    expect(arraySubtract([0,0,0],[0,0,0])).toEqual([0, 0, 0]);
  })
});

describe('surroundArray', () => {
  
  it(`surroundArray`, () => {
    expect(surroundArray(['cat'], 'dog', 'bird')).toEqual(['dog', 'cat', 'bird']);
    expect(surroundArray(['fox', 'mountain', 'egg'], 'bear', 'tent')).toEqual(['bear', 'fox', 'mountain', 'egg', 'tent']);
    expect(surroundArray(['gabite', 'garchomp'], 'gible', 'M-Garchomp')).toEqual(['gible', 'gabite', 'garchomp', 'M-Garchomp']);
  })
 
  
  it(`surroundArray - empty array`, () => {
    expect(surroundArray([], 'twi', 'la')).toEqual(['twi', 'la']);
  })
  
  it(`surroundArray - empty string`, () => {
    expect(surroundArray(['soup','store'],'',' ')).toEqual(['','soup','store',' ']);
  })
  
  it(`surroundArray - empty string and array`, () => {
    expect(surroundArray([],'','')).toEqual(['','']);
  })
})

describe('longestString', () => {
  
  it('longestString', () => {
    expect(longestString(['a', 'aa', 'aaa'])).toBe('aaa');
    expect(longestString(['a', 'aaa', 'aa'])).toBe('aaa');
    expect(longestString(['flying', 'fire', 'steel', 'psychic'])).toBe('psychic');
  })
   
  it('longestString spaces', () => {
    expect(longestString(['alpha', 'beta', 'infinity', 'not the longest'])).toBe('not the longest');
  })
  
  it('longestString empty', () => {
    expect(longestString([])).toBe('');
  })
})


describe('sToR', () => {
 
  it('sToR - bothCases', () => {
    expect(sToR('rrSSRRss')).toBe('ssRRSSrr');
    expect(sToR('Everything In Its Right Place')).toBe('Evesything In Itr Sight Place');
    expect(sToR('Summer is out of sight. Winter is forever.')).toBe('Rummes ir out of right. Wintes ir foseves.');
  })
 
  it('sToR - no r or s', () => {
    expect(sToR('illuminate')).toBe('illuminate');
  })

  it('sToR - lowerCase', () => {
    expect(sToR('ssrr')).toBe('rrss');
  })

  
  it('sToR - upperCase', () => {
    expect(sToR('SSRR')).toBe('RRSS');
  })


})

describe('divisibleBy4And7', () => {
  
  it('divisibleBy4And7', () => {
    expect(divisibleBy4And7(28)).toBe(true);
    expect(divisibleBy4And7(56)).toBe(true);
    expect(divisibleBy4And7(12)).toBe(false);
    expect(divisibleBy4And7(100)).toBe(false);
  })
  
  it('divisibleBy4And7 - 0', () => {
    expect(divisibleBy4And7(0)).toBe(true);
  })
})

describe('exclamationAndQuestion', () => {
  
  it('exclamationAndQuestion - true', () => {
    expect(exclamationAndQuestion('Hey! What is up?')).toBe(true);;
    expect(exclamationAndQuestion('NO WAY!?!?!?!?')).toBe(true);
    expect(exclamationAndQuestion('!        ?')).toBe(true);
  })

  
  it('exclamationAndQuestion - false', () => {
    expect(exclamationAndQuestion('Hey!')).toBe(false);
    expect(exclamationAndQuestion('What is up?')).toBe(false);
    expect(exclamationAndQuestion('sup')).toBe(false);
  })
})


describe('countAB', () => {
  
  it('countAB - both cases', () => {
    expect(countAB('abbA')).toEqual([2,2]);
    expect(countAB('A Map. A String. A Light. So Bright.  but why?')).toEqual([4,2]);
  })

  
  it('countAB - lower', () => {
    expect(countAB('There is an ocean')).toEqual([2,0]);
    expect(countAB('biding my time')).toEqual([0,1]);
  })

  
  it('countAB - upper', () => {
    expect(countAB('this is goodBYE')).toEqual([0,1]);
    expect(countAB('Dont Bend!  Ascend!')).toEqual([1,1]);
  })

  
  it('countAB - none', () => {
    expect(countAB('o')).toEqual([0,0]);
  })

})

describe('createCharacter', () => {
  it(`creates a character`, () => {
    const character1 = {
      name: 'Noah',
      atk: 95,
      def: 80
    };

    const character2 = {
      name: 'Mio',
      atk: 80,
      def: 100
    };

    expect(createCharacter('Noah',95,80)).toStrictEqual(character1);
    expect(createCharacter('Mio',80,100)).toStrictEqual(character2);
  })
})

describe('pairUp', () => {
  const character1 = {
    name: 'Noah',
    atk: 95,
    def: 80
  };

  const character2 = {
    name: 'Mio',
    atk: 80,
    def: 100
  };

  pairUp(character1,character2)
  it(`pairs up two characters`, () => { 
    expect(character1.pairUp).toBe(true);
    expect(character2.pairUp).toBe(true);
  })

  it(`sets up pair partners`, () => { 
    expect(character1.pairPartner).toBe('Mio');
    expect(character2.pairPartner).toBe('Noah');
  })
  
  it(`modifies the atk stat of character1`, () => { 
    expect(character1.atk).toBe(135);
    expect(character2.atk).toBe(80);
  })
  
})

