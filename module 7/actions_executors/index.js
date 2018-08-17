const creds = require("./creds");
const expect = require("chai").expect;
const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

let driver = new webdriver.Builder()
  .usingServer('http://localhost:4444/wd/hub')
  .withCapabilities(webdriver.Capabilities.chrome())
  .build();

driver.get('http://localhost:7000/')
  .then(_ => driver.manage().window().maximize())
  .then(_ => driver.manage().timeouts().implicitlyWait(5000))
  .then(_ => driver.findElement(By.id("userName")).clear())
  .then(_ => driver.findElement(By.css("#userName")).sendKeys(creds.userName))
  .then(_ => driver.findElement(By.name("firstName")).clear())
  .then(_ => driver.findElement(By.xpath(".//input[@id='firstName']")).sendKeys(creds.firstName))
  .then(_ => driver.findElement(By.css("#lastName")).clear())
  .then(_ => driver.findElement(By.css("#lastName")).sendKeys(creds.lastName))
  .then(_ => driver.findElement(By.css("#email")).clear())
  .then(_ => driver.findElement(By.css("#email")).sendKeys(creds.email))
  .then(_ => driver.findElement(By.css("#role")).sendKeys(creds.role))
  .then(_ => driver.findElement(By.xpath(".//span[text()='Sign in']")))
  .then(function (el) {
    driver.actions().click(el, webdriver.Button.LEFT).perform();
  })
  .then(function () {
    return driver.sleep(1000);
  })
  .then(_ => driver.wait(until.elementLocated(By.css("div[class*='dropdown-menu_header']"))), 5000)
  .then(_ => driver.findElement(By.css("div[class*='dropdown-menu_header']")))
  .then(function (el) {
    driver.actions().click(el, webdriver.Button.LEFT).perform();
  })
  .then(_ => driver.findElement(By.linkText("Manage Attributes")))
  .then(function (el) {
    driver.actions().click(el, webdriver.Button.LEFT).perform();
  })
  .then(_ => driver.findElement(By.css("div[class*='pageSizeControl'] div[class*='dropdown_valueOption']")).click())
  .then(_ => driver.findElement(By.xpath(".//span[text()='20']")).click())
  .then(function () {
    return driver.executeScript('window.scrollTo(500, 500)');
  })
  .then(function () {
    return driver.sleep(1000);
  })
  .then(function () {
    return driver.executeScript('window.scrollTo(0, 0)');
  })
  .then(function () {
    return driver.sleep(1000);
  })
  .then(_ => driver.findElement(By.partialLinkText("Add Attr")).click())
  .then(_ => driver.findElement(By.css("div[class*='with-field_root'] input[class*='text-input_input']")))
  .then(function (el) {
    driver.actions().doubleClick(el, webdriver.Button.LEFT).perform();
  })
  .then(_ => driver.findElement(By.css("div[class*='with-field_root'] input[class*='text-input_input']")))
  .then(function (el) {
    driver.actions().sendKeys("!name_for_webdriverjs_ak_module").perform();
  })
  .then(function (el) {
    driver.actions().sendKeys(webdriver.Key.TAB).perform();
  })
  .then(_ => driver.findElement(By.css("textarea[class*='text-input_textarea']")))
  .then(function (el) {
    driver.actions().sendKeys("descr1").perform();
  })
  .then(function (el) {
    driver.actions().sendKeys(webdriver.Key.ENTER).perform();
  })
  .then(function (el) {
    driver.actions().sendKeys("descr2").perform();
  })
  .then(function () {
    return highlightWithJSG(driver.findElement(By.xpath(".//button[text()='Cancel']")));
  })
  .then(function () {
    return highlightWithJSR(driver.findElement(By.xpath(".//button[text()='Create']")));
  })
  .then(_ => driver.findElement(By.xpath(".//span[text()='Please select...']")).click())
  .then(_ => driver.findElement(By.xpath(".//span[text()='Text']")).click())
  .then(_ => driver.findElements(By.css("label[class*='checkboxContainer']")))
  .then((elements) => {
    const promises = elements
      .map(element => {
        return element.getText();
      });
    return Promise.all(promises);
  })
  .then(_ => driver.findElement(By.className("_d7e6c8__checkbox_label")).click())
  .then(function () {
    return highlightWithJSG(driver.findElement(By.xpath(".//button[text()='Create']")));
  })
  .then(_ => driver.findElement(By.xpath(".//button[text()='Create']")).isSelected())
  .then(_ => driver.findElement(By.xpath(".//button[text()='Create']")).click())
  .then(_ => driver.findElement(By.css("div[class*='inline-notification_root__success']")).getText().then(function (txt) {
    console.log("Success creation message: " + txt);
  }))
  .then(_ => driver.findElement(By.xpath(".//td[text()='!name_for_webdriverjs_ak_module']/..//i[@data-qa-id='delete']")).click())
  .then(_ => driver.findElement(By.xpath(".//button[text()='Yes']")).click())
  .then(_ => driver.findElement(By.css("div[class*='inline-notification_root__success']")).isDisplayed())
  .then(elementIsDisplayed => expect(true).to.equal(elementIsDisplayed))
  .then(_ => driver.wait(until.elementLocated(By.css("div[class*='inline-notification_root__success']"))), 5000)
  .then(_ => driver.quit());

function highlightWithJSR(el) {
  var bg;
  return el.getCssValue("backgroundColor").then(function (col) {
    bg = col;
  }).then(function () {
    return driver.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
  }).then(function () {
    return driver.sleep(1000);
  }).then(function () {
    return driver.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
  }).then(function () {
    return driver.sleep(1000);
  })
}

function highlightWithJSG(el) {
  var bg;
  return el.getCssValue("backgroundColor").then(function (col) {
    bg = col;
  }).then(function () {
    return driver.executeScript("arguments[0].style.backgroundColor = '" + "green" + "'", el)
  }).then(function () {
    return driver.sleep(1000);
  }).then(function () {
    return driver.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
  }).then(function () {
    return driver.sleep(1000);
  })
}