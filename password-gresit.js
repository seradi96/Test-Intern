require("chromedriver");

const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

const driver = new webdriver.Builder().forBrowser("chrome").build();

driver.get("https://politrip.com/account/sign-up");

//In urma a mai multor teste, am observat ca la rezolutia mea HD 1920x1018 nu merge sa execute optiunea de SignUP si de selectare de partener
//Asadar am incercat sa dau scroll manual si a mers
//Am introdus un scroll down ca sa poata selecta optiunea aleasa
driver.executeScript("window.scrollTo(0, 350)");

var query = driver.wait(until.elementLocated(By.css("#first-name")));
query.sendKeys("Andrei");

var query = driver.wait(until.elementLocated(By.css("#last-name")));
query.sendKeys("Șerban");

var query = driver.wait(until.elementLocated(By.css("#email")));
query.sendKeys("seradi96@yahoo.com");

var query = driver.wait(until.elementLocated(By.css("#sign-up-password-input")));
query.sendKeys("Seradioooooo");

var query = driver.wait(until.elementLocated(By.css("#sign-up-confirm-password-input")));
query.sendKeys("Seradi1996");

var query1 = driver.wait(until.elementLocated(By.css("#sign-up-heard-input > option:nth-child(4)")));
query1.click();

var query1 = driver.wait(until.elementLocated(By.css(".button.pol-button-style.no-click-on-disabled")));
query1.click();

var query1 = driver.wait(until.elementLocated(By.css("#qa_signup-participant")));
query1.click();



driver.wait(until.titleContains("webdriver - Google"));