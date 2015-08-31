var params = module.exports = require('./params.json')

//load it dynamical because it's slow
Object.defineProperties(params, {
  genesisState: {
    get: require.bind(this, './genesisState.json')
  }
})
