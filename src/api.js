import API from 'claudia-api-builder'
import root from './root'
import * as examples from './examples'

const api = new API()

api.get('/', root)
api.get('/example1', examples.sample1)
api.get('/example2', examples.sample2)

module.exports = api
