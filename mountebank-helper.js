const request = require('supertest')

let mountebankServer = null
function setUrl (url) {
  mountebankServer = request(url)
 }
 
 function createImposter (imposterConfig) {
  return mountebankServer
    .delete(`/imposters/${imposterConfig.port}`)
    .then(() => {
      return mountebankServer
        .post('/imposters')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(imposterConfig))
    })
 }
 
 function getImposterPort (imposterConfig) {
  return imposterConfig.port
 }
 
//  function getRequests (port) {
//   return mountebankServer.get(`/imposters/${port}`).then(response => {
//     return {
//       numberOfRequests: response.body.numberOfRequests,
//       requests: response.body.requests
//     }
//   })
//  }
 
 module.exports = {
  setUrl,
  createImposter,
  getImposterPort
  // getRequests
 }
 
 