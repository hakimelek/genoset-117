var gql = require('gql')

module.exports = gql.and([
  gql.only('rs7454108', 'C'),
  gql.or([
  		gql.only('rs2040410', 'A'),
  		gql.exact('rs2040410', 'AG')
  	])
])