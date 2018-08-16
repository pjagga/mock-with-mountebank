var xmldoc = require('xmldoc')

function flattenXml(formattedXmlString){
  return new xmldoc.XmlDocument(formattedXmlString).toString({compressed: true})      
}

module.exports = flattenXml