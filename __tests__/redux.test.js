const Store = require('../src/redux/store')

describe('redux state tests', () => {
    it('Should initially set games to an empty object', () => {
      const state = store.getState().games
      expect(state.games).toEqual({})
    })
  })