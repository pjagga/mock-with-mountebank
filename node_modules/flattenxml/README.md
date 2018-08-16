# FlattenXML
Small JavaScript/NodeJS library that takes a formatted XML string like the following: 

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <SOAP-ENV:Envelope
    xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/">
        <SOAP-ENV:Body>
            <m:Something xmlns:m="http://hedgehogsareawesome.com.au">
                <name>hedgehogs are awesome</name>
            </m:Something>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

and makes it as flat as a pancake like so:

```xml
<SOAP-ENV:Envelope xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/"><SOAP-ENV:Body><m:Something xmlns:m="http://hedgehogsareawesome.com.au"><name>hedgehogs are awesome</name></m:Something></SOAP-ENV:Body></SOAP-ENV:Envelope>
```

## Installation
Using npm / yarn:
```shell
npm i flattenxml

yarn add flattenxml
```

## Usage
```js
const flattenXml = require('flattenxml')

const formattedXml = `
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
  <SOAP-ENV:Envelope
    xmlns:SOAPENV="http://schemas.xmlsoap.org/soap/envelope/">
        <SOAP-ENV:Body>
            <m:Something xmlns:m="http://hedgehogsareawesome.com.au">
                <name>hedgehogs are awesome</name>
            </m:Something>
    </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
`

console.log(flattenXml(formattedXml))
```

## Credits 
Made possible because of the fantastic [xmldoc](https://github.com/nfarina/xmldoc)


