import props from '../../properties'

module.exports = function accordionSteps () {
  this.Given(/^I post "([^"]* )" stub with status "(\d+)" and response body "([^"]* )"$/, function (accordionTotal, accordionType) {
    return accordionHelper.getAllAccordionCount(accordionType).should.equal(parseInt(accordionTotal))
  //I post "" stub with status "" and response body "
  })

  // this.Given(/^You should see ([^"]* )?accordion (\d+)( has)? expanded$/, function (accordionType, accordionNum) {
  //   return browser.waitUntil(function () {
  //     return browser.element(accordionHelper.getExpandedAccordionSelector(accordionNum, accordionType)).isExisting() === true
  //   }, constants.pageTimeout, 'accordion not expanded within timeout')
  // })
}
