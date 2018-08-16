const envobj = require('envobj')
const pino = require('pino')()

const env = envobj({
  DEBUG: false,

  // Mountebank mocking server
  MB_PROTOCOL: 'http',
  MB_HOST: 'localhost',
  MB_PORT: 2525,

  // Mocked services
  MB_PORT_FOR_SAMPLE_STUB: '4545',
  SAMPLE_SERVICE_ADDRESS: '/sampleServicesPath'
})

if (env.NODE_ENV !== 'production') {
  pino.info('-- ENVIRONMENT CONFIG --')
  Object.keys(env).map(key => {
    pino.info(`${key}: ${env[key]}`)
  })
}

const mountebankUrl = `${env.MB_PROTOCOL}://${env.MB_HOST}:${env.MB_PORT}`

// Mocked services
const mbPortSample = env.MB_PORT_FOR_SAMPLE_STUB
const sampleServiceAddress = env.SAMPLE_SERVICE_ADDRESS

module.exports = {
  mountebankUrl,
  mbPortSample,
  sampleServiceAddress
}
