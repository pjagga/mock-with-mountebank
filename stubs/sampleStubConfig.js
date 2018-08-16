const props = require('../properties')
module.exports = function (statusCode, responseBody) {
  return {
    port: props.mbPortSample,
    protocol: 'http',
    name: 'Sample stubs',
    recordRequests: true,
    stubs: [
      {
        predicates: [
          {
            equals: {
              method: 'POST',
              path: props.sampleServiceAddress
            }
          }
        ],
        responses: [
          {
            is: {
              statusCode,
              body: responseBody
            }
          }
        ]
      }
    ]
  }
 }