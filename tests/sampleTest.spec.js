const props = require('../properties')
const request = require('supertest')
const mountebankHelper = require('../mountebank-helper')
const readFile = require('read-file-utf8')
const flattenXml = require('flattenxml')

describe('operation: getAddress', () => {
  beforeAll(() => {
    mountebankHelper.setUrl(props.mountebankUrl)
  })
  describe('valid Scenarios', () => {
    test('Scenario: post mountebank stub dynamically', () => {
      const responseBody = readFile('./tests/sampleResponse.xml')
      const sampleImposterConfig = require('../stubs/sampleStubConfig')([{ statusCode: 200, responseBody: responseBody }])
      return mountebankHelper
        .createImposter(sampleImposterConfig)
    })
  })
})